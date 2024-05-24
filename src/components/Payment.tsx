"use client";

import { Button, Divider, Select, SelectItem } from "@nextui-org/react";
import { CardPaymentLink, PaymentMethods, PaymentPlan } from "@prisma/client";
import Link from "next/link";
import React from "react";
import Cookies from "js-cookie";
import { useRouter } from "next-nprogress-bar";
import { CiCreditCard1 } from "react-icons/ci";
import { CiBank } from "react-icons/ci";
import { IoWalletOutline } from "react-icons/io5";

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
    {
      id: "REVOLUT_TRANSFERWISE",
      name: "Revolut/Transferwise",
    },
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
      // setPaymentOption(new Set([]));
      setLoading(false);
      router.refresh();
    }
  };

  return (
    <div className="ml-3">
      {/* {!isPDFView && (
        <p className="mt-2 text-gray-600">
          We have a new payments processor you will be required to sign on this
          document{" "}
          <Link href="www.google.com" className="text-blue-600 hover:underline">
            here
          </Link>
          . Below are the 2 payment options to select from
        </p>
      )} */}

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
                Selected payment method is <b>Card</b>
              </p>
            </div>
          ) : paymentMethods === "BANK" ? (
            <div className="flex items-center gap-2">
              <CiBank size={25} />{" "}
              <p className="text-gray-600">
                Selected payment method is <b>Bank</b>
              </p>
            </div>
          ) : paymentMethods === "REVOLUT_TRANSFERWISE" ? (
            <div className="flex items-center gap-2">
              <IoWalletOutline size={25} />{" "}
              <p className="text-gray-600">
                Selected payment method is <b>Revolut/Transferwise</b>
              </p>
            </div>
          ) : (
            <div></div>
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
                ) : paymentOption &&
                  paymentOption?.anchorKey === "REVOLUT_TRANSFERWISE" ? (
                  <IoWalletOutline size={25} />
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
              <span className="md:block hidden">
                Select this payment method
              </span>
              <span className="md:hidden">Select</span>
            </Button>
          </div>
        </div>
      )}

      <Divider className="my-2" />

      <div className="">
        {paymentOption && paymentOption?.anchorKey === "CARD" && (
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-gray-600"></div>
              <p className="text-sm text-gray-600">
                You will receive a link to a payment agreement to sign via
                docusign.
              </p>
            </div>

            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-gray-600"></div>
              <p className="text-sm text-gray-600">
                You will receive credit card links based on your payment plan.
              </p>
            </div>
          </div>
        )}

        {paymentOption && paymentOption?.anchorKey === "BANK" && (
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-gray-600"></div>
              <p className="text-sm text-gray-600">
                You will receive a link to a payment agreement to sign via
                docusign.
              </p>
            </div>

            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-gray-600"></div>
              <p className="text-sm text-gray-600">
                You can proceed to make a payment to the bank account below
                based on your payment plan.
              </p>
            </div>

            <p className="mt-2">Bank details here</p>
            <Link
              href="https://drive.google.com/file/d/1EvFKBut_rqbeM_YgSOCks0BzXbnb0y-c/view?usp=sharing"
              target="_blank"
              className="text-blue-600 hover:underline"
            >
              https://drive.google.com/file/d/1EvFKBut_rqbeM_YgSOCks0BzXbnb0y-c/view?usp=sharing
            </Link>
          </div>
        )}

        {paymentOption &&
          paymentOption?.anchorKey === "REVOLUT_TRANSFERWISE" && (
            <div className="flex flex-col gap-1">
              <div className="">
                <p className="text-sm text-gray-600 ml-1">
                  Revolut (You can either do a direct transfer if you have
                  revolut <b>@karenmbi</b> or transfer using the details below)
                </p>

                <p className="text-sm text-gray-600 ml-1 mt-2">
                  Beneficiary: Karen Mwaura
                  <br />
                  IBAN: GB23 REVO 0099 7088 7578 63
                  <br />
                  BIC / SWIFT code: REVOGB21
                  <br />
                  Bank Name and Address: Revolut Ltd, 7 Westferry Circus, E14
                  4HD, London, United Kingdom
                  <br />
                  Correspondent BIC: CHASGB2L
                  <br />
                </p>
              </div>

              <div className="mt-2">
                <p className="text-sm text-gray-600 ml-1">
                  Transferwise (You can either do a direct transfer to{" "}
                  <Link
                    className="text-blue-600 hover:underline"
                    href="https://wise.com/pay/me/karena213"
                    target="_blank"
                  >
                    https://wise.com/pay/me/karena213
                  </Link>{" "}
                  if you have wise or transfer using the details below)
                </p>

                <p className="text-sm text-gray-600 ml-1 mt-2">
                  Account holder: Karen Ndiko Mwaura
                  <br />
                  ACH and Wire routing number: 084009519
                  <br />
                  Account number: 9600003178812512
                  <br />
                  Account type: Checking
                  <br />
                  Currency: USD
                  <br />
                  Wise&apos;s address: 30 W. 26th Street, Sixth Floor
                  <br />
                  New York NY 10010
                  <br />
                  United States
                  <br />
                  Email: ndikomwaura77@gmail.com
                  <br />
                </p>
              </div>
            </div>
          )}

        {paymentMethods === "CARD" && !paymentOption && (
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-gray-600"></div>
              <p className="text-sm text-gray-600">
                You will receive a link to a payment agreement to sign via
                docusign.
              </p>
            </div>

            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-gray-600"></div>
              <p className="text-sm text-gray-600">
                You will receive credit card links based on your payment plan.
              </p>
            </div>
          </div>
        )}

        {paymentMethods === "BANK" && !paymentOption && (
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-gray-600"></div>
              <p className="text-sm text-gray-600">
                You will receive a link to a payment agreement to sign via
                docusign.
              </p>
            </div>

            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-gray-600"></div>
              <p className="text-sm text-gray-600">
                You can proceed to make a payment to the bank account below
                based on your payment plan.
              </p>
            </div>

            <p className="mt-2">Bank details here</p>
            <Link
              href="https://drive.google.com/file/d/1EvFKBut_rqbeM_YgSOCks0BzXbnb0y-c/view?usp=sharing"
              target="_blank"
              className="text-blue-600 hover:underline"
            >
              https://drive.google.com/file/d/1EvFKBut_rqbeM_YgSOCks0BzXbnb0y-c/view?usp=sharing
            </Link>
          </div>
        )}

        {paymentMethods === "REVOLUT_TRANSFERWISE" && !paymentOption && (
          <div className="flex flex-col gap-1">
            <div className="">
              <p className="text-sm text-gray-600 ml-1">
                Revolut (You can either do a direct transfer if you have revolut{" "}
                <b>@karenmbi</b> or transfer using the details below)
              </p>

              <p className="text-sm text-gray-600 ml-1 mt-2">
                Beneficiary: Karen Mwaura
                <br />
                IBAN: GB23 REVO 0099 7088 7578 63
                <br />
                BIC / SWIFT code: REVOGB21
                <br />
                Bank Name and Address: Revolut Ltd, 7 Westferry Circus, E14 4HD,
                London, United Kingdom
                <br />
                Correspondent BIC: CHASGB2L
                <br />
              </p>
            </div>

            <div className="mt-2">
              <p className="text-sm text-gray-600 ml-1">
                Transferwise (You can either do a direct transfer to{" "}
                <Link
                  className="text-blue-600 hover:underline"
                  href="https://wise.com/pay/me/karena213"
                  target="_blank"
                >
                  https://wise.com/pay/me/karena213
                </Link>{" "}
                if you have wise or transfer using the details below)
              </p>

              <p className="text-sm text-gray-600 ml-1 mt-2">
                Account holder: Karen Ndiko Mwaura
                <br />
                ACH and Wire routing number: 084009519
                <br />
                Account number: 9600003178812512
                <br />
                Account type: Checking
                <br />
                Currency: USD
                <br />
                Wise&apos;s address: 30 W. 26th Street, Sixth Floor
                <br />
                New York NY 10010
                <br />
                United States
                <br />
                Email: ndikomwaura77@gmail.com
                <br />
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Payment;
