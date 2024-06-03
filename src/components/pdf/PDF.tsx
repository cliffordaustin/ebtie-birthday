"use client";

import { Button, Divider } from "@nextui-org/react";
import {
  CardPaymentLink,
  DietryRestriction,
  Package,
  Property,
  TripAddOn,
  User,
} from "@prisma/client";
import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import ReactToPrint from "react-to-print";
import Flight from "../Flight";
import UserPackage from "../Package";
import TripAddons from "../TripAddons";
import DietaryRestriction from "../DietaryRestriction";

import { Ubuntu } from "next/font/google";
import Payment from "../Payment";
import PaymentPlan from "../PaymentPlan";
import Link from "next/link";
import ImportantInfo from "../ImportantInfo";

const inter = Ubuntu({
  weight: ["400", "500", "300", "700"],
  subsets: ["latin"],
});

function PDF({
  user,
  allTripAddOns,
  allOnSiteTripAddOns,
}: {
  user:
    | ({ package: ({ properties: Property[] } & Package) | null } & {
        userPackages: ({ properties: Property[] } & Package)[] | null;
      } & User & {
          tripAddOns: TripAddOn[];
          onSiteTripAddOns: TripAddOn[];
          dietryRestrictions: DietryRestriction[];
          CardPaymentLink: CardPaymentLink[];
        })
    | null;
  allTripAddOns: TripAddOn[];
  allOnSiteTripAddOns: TripAddOn[];
}) {
  const componentRef = useRef<HTMLDivElement>(null);
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  return (
    <div>
      <ReactToPrint
        trigger={() => {
          return (
            <Button
              startContent={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4m4-5l5 5l5-5m-5 5V3"
                  />
                </svg>
              }
              onClick={handlePrint}
              radius="none"
              color="primary"
              variant="bordered"
              size="md"
            >
              View/Download PDF
            </Button>
          );
        }}
        content={() => componentRef.current}
      />

      <div className="hidden">
        <div
          ref={componentRef}
          className={"w-full p-6 overflow-y-scroll bg-white " + inter.className}
        >
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="bg-gray-300 rounded-full h-[100px] w-[100px] flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={80}
                  height={80}
                  className="text-gray-400"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M19.652 19.405c.552-.115.882-.693.607-1.187c-.606-1.087-1.56-2.043-2.78-2.771C15.907 14.509 13.98 14 12 14c-1.981 0-3.907.508-5.479 1.447c-1.22.728-2.174 1.684-2.78 2.771c-.275.494.055 1.072.607 1.187a37.503 37.503 0 0 0 15.303 0"
                  />
                  <circle cx="12" cy="8" r="5" fill="currentColor" />
                </svg>
              </div>

              <div className="flex flex-col gap-1">
                <h1 className="text-2xl font-bold">{user?.name}</h1>
                <p className="text-gray-500">{user?.email}</p>
              </div>
            </div>
          </div>

          <Divider className="my-4" />

          <h1 className="font-semibold text-gray-800 text-xl">Flight Info</h1>

          <div className="mt-6">
            {user?.arrivalDate ||
            user?.departureDate ||
            user?.arrivalFlightInfo ||
            user?.departureFlightInfo ? (
              <>
                <Flight isPDFView={true} user={user} />
              </>
            ) : (
              <p className="mt-1 ml-1 text-sm text-gray-600">None</p>
            )}

            <Divider className="my-4" />

            {user?.userPackages && user?.userPackages.length > 0 && (
              <div className="mt-4 flex flex-col gap-5 text-sm">
                <UserPackage
                  userId={user.id}
                  isPDFView={true}
                  packageType={user?.userPackages}
                  packageDescription={user.doubleRoomDescription}
                />
              </div>
            )}

            {user?.userPackages &&
              user?.userPackages.length === 0 &&
              !user?.others && (
                <p className="text-gray-500 text-sm text-center mt-3">
                  No package added yet
                </p>
              )}

            {user?.others && (
              <div className="flex flex-col gap-4 text-sm">
                <h1 className="font-bold">Your requested trip plan</h1>

                <p className="text-gray-500">{user?.others}</p>
              </div>
            )}

            <Divider className="my-4" />

            <h1 className="font-semibold text-gray-800 text-xl">
              Dietary Restriction
            </h1>

            {user?.dietryRestrictions && user.dietryRestrictions.length > 0 ? (
              <DietaryRestriction
                isPDFView={true}
                dietaryRestrictions={user?.dietryRestrictions}
                userId={user?.id}
              />
            ) : (
              <p className="mt-1 ml-1 text-sm text-gray-600">None</p>
            )}

            <Divider className="my-4" />

            <h1 className="font-semibold flex items-center gap-2 text-gray-800 text-lg">
              Trip Add-Ons (Prepaid, Per Person - added to your booking amount)
            </h1>

            {user?.tripAddOns && user.tripAddOns.length > 0 ? (
              <TripAddons
                isPDFView={true}
                allTripAddons={allTripAddOns}
                userId={user?.id}
                tripAddons={user?.tripAddOns}
              />
            ) : (
              <p className="mt-1 ml-1 text-sm text-gray-600">None</p>
            )}

            <Divider className="my-4" />

            <h1 className="font-semibold flex items-center gap-2 text-gray-800 text-lg">
              Trip Add-Ons (Book Independently Below)
            </h1>

            {user?.onSiteTripAddOns && user.onSiteTripAddOns.length > 0 ? (
              <TripAddons
                isPDFView={true}
                allTripAddons={allOnSiteTripAddOns}
                userId={user?.id}
                tripAddons={user?.onSiteTripAddOns}
                isOnSite={true}
              />
            ) : (
              <p className="mt-1 ml-1 text-sm text-gray-600">None</p>
            )}

            <Divider className="my-4" />

            <h1 className="font-semibold text-gray-800 text-xl">
              Payment Plan
            </h1>

            {user?.paymentPlan ? (
              <PaymentPlan paymentPlan={user?.paymentPlan} isPDFView={true} />
            ) : (
              <p className="mt-1 ml-1 text-sm text-gray-600">None</p>
            )}

            <Divider className="my-4" />

            <h1 className="font-semibold text-gray-800 text-xl">
              Payment Info
            </h1>

            <Payment
              paymentMethods={user?.paymentMethod}
              paymentLinks={user?.CardPaymentLink}
              isPDFView={true}
            />

            <Divider className="my-4" />

            <h1 className="font-semibold mt-4 text-gray-800 text-xl">
              Pre-Travel Checklist
            </h1>

            <Link
              href="https://docs.google.com/presentation/d/1aqy-FGL02KV3Or0O-vz9uO9cCuzZP7Cyytu5VOgXuEQ/edit#slide=id.g2c25874eeee_0_0"
              className="ml-2 mt-2 line-clamp-1 text-blue-600 hover:underline"
            >
              https://docs.google.com/presentation/d/1aqy-FGL02KV3Or0O-vz9uO9cCuzZP7Cyytu5VOgXuEQ/edit#slide=id.g2c25874eeee_0_0
            </Link>

            <Divider className="my-4" />

            <h1 className="font-semibold mt-4 text-gray-800 text-xl">
              Important Info
            </h1>

            <ImportantInfo isPDFView={true} user={user}></ImportantInfo>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PDF;
