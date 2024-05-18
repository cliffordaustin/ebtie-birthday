import React from "react";
import prisma from "@/db/db";
import { Button, Divider, ScrollShadow, Tooltip } from "@nextui-org/react";
import moment from "moment";
import parse from "html-react-parser";
import Package from "@/components/Package";
import ClientOnly from "@/components/ui/client-only";
import Flight from "@/components/Flight";
import TripAddons from "@/components/TripAddons";
import DietaryRestriction from "@/components/DietaryRestriction";
import DepartureDate from "@/components/EditViews/DepartureDate";
import ArrivalDate from "@/components/EditViews/ArrivalDate";
import ArrivalInfo from "@/components/EditViews/ArrivalInfo";
import DepartureInfo from "@/components/EditViews/DepartureInfo";
import { cookies, headers } from "next/headers";
import EditPackage from "@/components/EditViews/Package";
import PDF from "@/components/pdf/PDF";
import ContactUs from "@/components/ContactUs";
import Payment from "@/components/Payment";
import { redirect } from "next/navigation";

async function UserProfile({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const cookieStore = cookies();
  const email = cookieStore.get("email");

  const user = await prisma.user.findUnique({
    where: {
      email: email?.value || "",
    },
    include: {
      tripAddOns: true,
      dietryRestrictions: true,
      CardPaymentLink: true,
      package: {
        include: {
          properties: true,
        },
      },
    },
  });

  if (!email || !email.value || !user) {
    redirect(
      `/login?edit=${searchParams["edit"] || ""}&packageId=${
        searchParams["packageId"] || ""
      }`
    );
  }

  const packages = await prisma.package.findMany({
    include: {
      properties: true,
    },
  });

  return (
    <div>
      <ContactUs></ContactUs>
      <div className="w-screen h-screen p-5 flex gap-4">
        <div className="w-[60%] py-5 pl-6 pr-4 overflow-y-scroll bg-white border shadow">
          <ScrollShadow>
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <div className="bg-gray-200 rounded-full h-[100px] w-[100px] flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={80}
                    height={80}
                    className="text-gray-300"
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

              <PDF user={user} />
            </div>

            <Divider className="my-4" />

            <div className="mt-6">
              <h1 className="font-semibold text-gray-800 text-xl">
                Flight Info
              </h1>

              <Flight user={user} />

              <Divider className="my-4" />

              <div className="mt-4 flex flex-col gap-5 text-sm">
                <Package others={user?.others} packageType={user?.package} />
              </div>

              <Divider className="my-4" />

              <h1 className="font-semibold text-gray-800 text-xl">
                Dietary Restriction
              </h1>

              <DietaryRestriction
                userId={user?.id}
                dietaryRestrictions={user?.dietryRestrictions}
              />

              <Divider className="my-4" />

              <h1 className="font-semibold text-gray-800 text-xl">
                Trip Addons
              </h1>

              <TripAddons userId={user?.id} tripAddons={user?.tripAddOns} />

              <Divider className="my-4" />

              <h1 className="font-semibold text-gray-800 text-xl">
                Payment Info
              </h1>

              <Payment paymentLinks={user?.CardPaymentLink} />
            </div>
          </ScrollShadow>
        </div>
        <div className="w-[40%] overflow-y-scroll bg-white border shadow">
          {searchParams["edit"] === "departureDate" && user?.departureDate && (
            <DepartureDate departureDate={user?.departureDate}></DepartureDate>
          )}
          {searchParams["edit"] === "arrivalDate" && user?.arrivalDate && (
            <ArrivalDate arrivalDate={user?.arrivalDate}></ArrivalDate>
          )}
          {searchParams["edit"] === "arrivalInfo" &&
            user?.arrivalFlightInfo && (
              <ArrivalInfo info={user?.arrivalFlightInfo}></ArrivalInfo>
            )}
          {searchParams["edit"] === "departureInfo" &&
            user?.departureFlightInfo && (
              <DepartureInfo info={user?.departureFlightInfo}></DepartureInfo>
            )}
          {searchParams["edit"] === "package" && (
            <EditPackage dbPackages={packages}></EditPackage>
          )}
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
