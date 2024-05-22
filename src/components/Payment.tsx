"use client";

import { Button, Select, SelectItem } from "@nextui-org/react";
import { CardPaymentLink, PaymentMethods, PaymentPlan } from "@prisma/client";
import Link from "next/link";
import React from "react";
import Cookies from "js-cookie";
import { useRouter } from "next-nprogress-bar";
import { CiCreditCard1 } from "react-icons/ci";
import { CiBank } from "react-icons/ci";

function Payment({
  paymentLinks,
  paymentMethods,
  isPDFView,
}: {
  paymentLinks: CardPaymentLink[] | undefined;
  paymentMethods: PaymentMethods | null | undefined;
  isPDFView?: boolean;
}) {
  const [paymentOption, setPaymentOption] = React.useState<any>();
  const [loading, setLoading] = React.useState(false);

  const router = useRouter();

  const paymentOptions: {
    id: PaymentMethods;
    name: string;
  }[] = [
    { id: "CARD", name: "Card" },
    { id: "BANK", name: "Bank" },
  ];

  const updatePaymentOption = async () => {
    setLoading(true);
    const email = Cookies.get("email");
    if (!email) {
      setLoading(false);
      return;
    }

    const message = `User with email:${email} selected ${paymentOption?.anchorKey} as payment method`;

    try {
      const res = await fetch("/api/payment-method", {
        method: "POST",
        body: JSON.stringify({
          email,
          paymentMethod: paymentOption?.anchorKey,
        }),
      });

      await fetch("/api/contact-us", {
        method: "POST",
        body: JSON.stringify({
          message,
          to: "+254757629101",
        }),
      });
    } catch (error) {
      setLoading(false);
    } finally {
      setPaymentOption(new Set([]));
      setLoading(false);
      router.refresh();
    }
  };

  return (
    <div className="ml-3">
      {!isPDFView && (
        <p className="mt-2 text-gray-600">
          We have a new payments processor you will be required to sign on this
          document{" "}
          <Link href="www.google.com" className="text-blue-600 hover:underline">
            here
          </Link>
          . Below are the 2 payment options to select from
        </p>
      )}

      {!paymentMethods && (
        <div className="mt-3 flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-gray-400"></div>
          <p className="text-gray-600 text-sm">
            No payment method selected yet
          </p>
        </div>
      )}

      {paymentMethods && (
        <div className="mt-3">
          {paymentMethods === "CARD" ? (
            <div className="flex items-center gap-2">
              <CiCreditCard1 size={25} />{" "}
              <p className="text-gray-600">
                Selected payment method is <b>card</b>
              </p>
            </div>
          ) : paymentMethods === "BANK" ? (
            <div className="flex items-center gap-2">
              <CiBank size={25} />{" "}
              <p className="text-gray-600">
                Selected payment method is <b>bank</b>
              </p>
            </div>
          ) : (
            ""
          )}
        </div>
      )}

      {!isPDFView && (
        <div className="flex flex-col gap-3 mt-2">
          <div className="flex items-center gap-2 sticky left-0 top-0 bottom-0 bg-white z-20 py-4">
            <Select
              label="Payment method"
              variant="bordered"
              placeholder="Select a payment method"
              selectedKeys={paymentOption}
              className="max-w-60"
              radius="none"
              onSelectionChange={(e: any) => {
                setPaymentOption(e);
              }}
              startContent={
                paymentOption && paymentOption?.anchorKey === "CARD" ? (
                  <CiCreditCard1 size={25} />
                ) : paymentOption && paymentOption?.anchorKey === "BANK" ? (
                  <CiBank size={25} />
                ) : (
                  ""
                )
              }
            >
              {paymentOptions.map((item) => (
                <SelectItem key={item.id} value={item.name}>
                  {item.name}
                </SelectItem>
              ))}
            </Select>

            <Button
              radius="none"
              disabled={!paymentOption}
              isLoading={loading}
              onClick={updatePaymentOption}
              color={!paymentOption ? "default" : "primary"}
              className="text-white px-4 !py-[27px]"
            >
              Select this payment method
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Payment;
