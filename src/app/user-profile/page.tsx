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
import PaymentPlan from "@/components/PaymentPlan";
import { BsFillInfoCircleFill } from "react-icons/bs";
import Link from "next/link";

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
      onSiteTripAddOns: true,
      dietryRestrictions: true,
      CardPaymentLink: true,
      package: {
        include: {
          properties: true,
        },
      },
    },
  });

  let tripAddOns = await prisma.tripAddOn.findMany();

  let allTripAddOns = tripAddOns.filter(
    (addon) =>
      !user?.onSiteTripAddOns?.find((userAddon) => userAddon.id === addon.id)
  );

  //get all the trip addons excluding the ones in user.tripAddOns or the ones that has advanceBookingRequired as true
  let allOnSiteTripAddOns = tripAddOns.filter(
    (addon) =>
      !user?.tripAddOns?.find((userAddon) => userAddon.id === addon.id) &&
      !addon.advanceBookingRequired
  );

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
      User: true,
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

              <PDF
                user={user}
                allTripAddOns={allTripAddOns}
                allOnSiteTripAddOns={allOnSiteTripAddOns}
              />
            </div>

            <Divider className="my-4" />

            <div className="mt-6">
              <h1 className="font-semibold text-gray-800 text-xl">
                Flight Info
              </h1>

              <Flight user={user} />

              <Divider className="my-4" />

              <div className="mt-4 flex flex-col gap-5 text-sm">
                <Package
                  userId={user.id}
                  others={user?.others}
                  packageType={user?.package}
                  packageDescription={user.doubleRoomDescription}
                />
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

              <h1 className="font-semibold flex items-center gap-2 text-gray-800 text-lg">
                Trip Addons (Must be booked in advance, per person, excludes
                transport)
              </h1>

              <TripAddons
                allTripAddons={allTripAddOns}
                userId={user?.id}
                tripAddons={user?.tripAddOns}
              />

              <Divider className="my-4" />

              <h1 className="font-semibold flex items-center gap-2 text-gray-800 text-lg">
                Trip Addons (Independently booked before or during the trip)
              </h1>

              <TripAddons
                allTripAddons={allOnSiteTripAddOns}
                userId={user?.id}
                tripAddons={user?.onSiteTripAddOns}
                isOnSite={true}
              />

              <Divider className="my-4" />

              <h1 className="font-semibold text-gray-800 text-xl">
                Payment Plan
              </h1>

              <PaymentPlan paymentPlan={user?.paymentPlan} />

              <h1 className="font-semibold mt-4 text-gray-800 text-xl">
                Payment Info
              </h1>

              <Payment
                paymentMethods={user.paymentMethod}
                paymentLinks={user?.CardPaymentLink}
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
