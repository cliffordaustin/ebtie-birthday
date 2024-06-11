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
  name,
}: {
  paymentLinks: CardPaymentLink[] | undefined;
  paymentMethods: PaymentMethods | null | undefined;
  isPDFView?: boolean;
  name?: string;
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

      await fetch("/api/send-slack-payment", {
        method: "POST",
        body: JSON.stringify({
          name,
          email,
          paymentMethod: paymentOption?.anchorKey,
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
                You will receive credit card links based on your payment plan.
                See the full payment terms{" "}
                <Link
                  href="https://drive.google.com/file/d/1h6EqjUh7so3m3yW1xgyWD_9cspmzhc77/view"
                  target="_blank"
                  className="text-blue-600 hover:underline"
                >
                  here
                </Link>
              </p>
            </div>
          </div>
        )}

        {paymentOption && paymentOption?.anchorKey === "BANK" && (
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-gray-600"></div>
              <p className="text-sm text-gray-600">
                You can proceed to make a payment to the bank account below
                based on your payment plan.
              </p>
            </div>

            <div className="mt-2 text-sm text-gray-600">
              <span>Account Name: Numinous Holdings Limited</span>
              <br />
              <span>
                Bank Name: Standard Chartered Bank Kenya Limited Bank Branch:
                Chiromo
              </span>
              <br />
              <span>Branch Code: 02084</span> <br />
              <span>SWIFT Code: SCBLKENXXXX</span> <br />
              <span>USD Account Number: 8702479992200</span> <br />
              <span>Account Currency: USD</span> <br />
              <span>
                Email:{" "}
                <Link
                  href="mailto:ndiko@winda.guide"
                  className="text-blue-600 hover:underline"
                  target="_blank"
                >
                  ndiko@winda.guide
                </Link>
              </span>{" "}
              <br />
              <span>
                Physical address: Peponi gardens road, P.O. Box 1345, 00606,
                Westlands, Nairobi, Kenya
              </span>
            </div>

            <p className="text-sm text-gray-600 mt-2">
              See the full payment terms{" "}
              <Link
                href="https://drive.google.com/file/d/1h6EqjUh7so3m3yW1xgyWD_9cspmzhc77/view"
                target="_blank"
                className="text-blue-600 hover:underline"
              >
                here
              </Link>
            </p>
          </div>
        )}

        {paymentMethods === "CARD" && !paymentOption && (
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-gray-600"></div>
              <p className="text-sm text-gray-600">
                You will receive credit card links based on your payment plan.
                See the full payment terms{" "}
                <Link
                  href="https://drive.google.com/file/d/1h6EqjUh7so3m3yW1xgyWD_9cspmzhc77/view"
                  target="_blank"
                  className="text-blue-600 hover:underline"
                >
                  here
                </Link>
              </p>
            </div>
          </div>
        )}

        {paymentMethods === "BANK" && !paymentOption && (
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-gray-600"></div>
              <p className="text-sm text-gray-600">
                You can proceed to make a payment to the bank account below
                based on your payment plan.
              </p>
            </div>

            <div className="mt-2 text-sm text-gray-600">
              <span>Account Name: Numinous Holdings Limited</span>
              <br />
              <span>
                Bank Name: Standard Chartered Bank Kenya Limited Bank Branch:
                Chiromo
              </span>
              <br />
              <span>Branch Code: 02084</span> <br />
              <span>SWIFT Code: SCBLKENXXXX</span> <br />
              <span>USD Account Number: 8702479992200</span> <br />
              <span>Account Currency: USD</span> <br />
              <span>
                Email:{" "}
                <Link href="mailto:ndiko@winda.guide" target="_blank">
                  ndiko@winda.guide
                </Link>
              </span>{" "}
              <br />
              <span>
                Physical address: Peponi gardens road, P.O. Box 1345, 00606,
                Westlands, Nairobi, Kenya
              </span>
            </div>

            <p className="text-sm text-gray-600 mt-2">
              See the full payment terms{" "}
              <Link
                href="https://drive.google.com/file/d/1h6EqjUh7so3m3yW1xgyWD_9cspmzhc77/view"
                target="_blank"
                className="text-blue-600 hover:underline"
              >
                here
              </Link>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Payment;
