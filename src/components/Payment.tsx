import { CardPaymentLink } from "@prisma/client";
import Link from "next/link";
import React from "react";

function Payment({
  paymentLinks,
}: {
  paymentLinks: CardPaymentLink[] | undefined;
}) {
  return (
    <div className="flex flex-col gap-3 mt-4">
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-3">
          <div className="w-[7px] h-[7px] bg-gray-500 rounded-full"></div>
          <p className="text-sm">Credit card payments</p>
        </div>

        <div className="flex flex-col gap-3 ml-5">
          {/* {paymentLinks?.map((paymentLink) => (
            <Link
              href={paymentLink.link}
              key={paymentLink.id}
              className="text-sm text-blue-600 underline line-clamp-1"
              target="_blank"
            >
              {paymentLink.link}
            </Link>
          ))} */}
          <p className="text-gray-500 text-sm">
            Credit card payments (we work with a third party processor, so
            you&apos;ll have to sign a short agreement with them prior to making
            payment here.)
            <br />
            <br />
            <Link
              href="https://drive.google.com/file/d/1uRcwQxcRpH5buDAUs_UjIWgGm-Nu6QcO/view?usp=sharing"
              target="_blank"
              className="text-sm text-blue-600 underline line-clamp-1"
            >
              https://drive.google.com/file/d/1uRcwQxcRpH5buDAUs_UjIWgGm-Nu6QcO/view?usp=sharing
            </Link>
          </p>
        </div>
      </div>

      {/* <div className="flex flex-col gap-1">
        <div className="flex items-center gap-3">
          <div className="w-[7px] h-[7px] bg-gray-500 rounded-full"></div>
          <p className="text-sm">Kenya Bank Details</p>
        </div>

        <p className="text-gray-500 text-sm ml-5">
          Account Name: Numinous Holdings Limited
          <br />
          Bank Name: Standard Chartered Bank Kenya Limited <br />
          Bank Branch: Chiromo <br />
          Branch Code: 02084 <br />
          SWIFT Code: SCBLKENXXXX <br />
          USD Account Number: 8702479992200 <br />
          Account Currency: USD <br />
          Email: ndiko@winda.guide <br />
        </p>
      </div> */}

      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-3">
          <div className="w-[7px] h-[7px] bg-gray-500 rounded-full"></div>
          <p className="text-sm">Revolut</p>
        </div>

        <p className="text-gray-500 text-sm ml-5">
          Revolut (You can either do a direct transfer if you have revolut{" "}
          <b>@karenmbi</b> or transfer using the details below)
          <br />
          <br />
          Beneficiary: Karen Mwaura <br />
          IBAN: GB23 REVO 0099 7088 7578 63 <br />
          BIC / SWIFT code: REVOGB21 <br />
          Bank Name and Address: Revolut Ltd, 7 Westferry Circus, E14 4HD,
          London, United Kingdom <br />
          Correspondent BIC: CHASGB2L <br />
        </p>
      </div>

      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-3">
          <div className="w-[7px] h-[7px] bg-gray-500 rounded-full"></div>
          <p className="text-sm">Transferwise</p>
        </div>

        <p className="text-gray-500 text-sm ml-5">
          Transferwise (You can either do a direct transfer to{" "}
          <Link
            href="https://wise.com/pay/me/karena213"
            target="_blank"
            className="text-blue-600 underline"
          >
            https://wise.com/pay/me/karena213
          </Link>{" "}
          if you have wise or transfer using the details below)
          <br />
          <br />
          Account holder: Karen Ndiko Mwaura <br />
          ACH and Wire routing number: 084009519 <br />
          Account number: 9600003178812512 <br />
          Account type: Checking <br />
          Currency: USD <br />
          Wise&apos;s address: 30 W. 26th Street, Sixth Floor New York NY 10010
          United States <br />
          Email: ndikomwaura77@gmail.com <br />
        </p>
      </div>
    </div>
  );
}

export default Payment;
