import React from "react";
import prisma from "@/db/db";
import { Divider, ScrollShadow } from "@nextui-org/react";
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
import Logout from "@/components/Logout";
import ImportantInfo from "@/components/ImportantInfo";
import ProfileSection from "@/components/ProfileSection";
import ActivitiesInfo from "@/components/ActivitiesInfo";

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
      newUserPackages: {
        include: {
          package: {
            include: {
              properties: true,
            },
          },
        },
      },
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
      !user?.onSiteTripAddOns?.find((userAddon) => userAddon.id === addon.id) &&
      addon.advanceBookingRequired
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
      UserPackage: true,
    },
  });

  console.log("param", searchParams["edit"]);

  return (
    <div>
      <div className="bg-white z-[50] sticky top-0 left-0 right-0 w-full">
        <ContactUs></ContactUs>
      </div>
      <div className="w-screen md:h-screen md:p-5 flex gap-4">
        <div className="w-full md:w-[55%] lg:w-[60%] py-5 md:px-5 px-6 md:pl-6 md:pr-4 overflow-y-scroll md:bg-white md:border md:shadow">
          <ScrollShadow>
            <ProfileSection
              user={user}
              allTripAddOns={allTripAddOns}
              allOnSiteTripAddOns={allOnSiteTripAddOns}
            ></ProfileSection>

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
                  packageType={user?.newUserPackages}
                  packageDescription={user.doubleRoomDescription}
                  dbPackages={packages}
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
              <ActivitiesInfo></ActivitiesInfo>
              <Divider className="my-4" />

              <h1 className="font-semibold flex items-center gap-2 text-gray-800 text-lg">
                Trip Activities (Prepaid, Per Person - added to your booking
                amount)
              </h1>

              <TripAddons
                allTripAddons={allTripAddOns}
                userId={user?.id}
                tripAddons={user?.tripAddOns}
              />

              <Divider className="my-4" />

              <h1 className="font-semibold flex items-center gap-2 text-gray-800 text-lg">
                Trip Activities (Book Independently Below)
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
                name={user.name}
              />

              <Divider className="my-4" />

              <h1 className="font-semibold mt-4 text-gray-800 text-xl">
                Pre-Travel Checklist
              </h1>

              <Link
                href="https://docs.google.com/presentation/d/1aqy-FGL02KV3Or0O-vz9uO9cCuzZP7Cyytu5VOgXuEQ/edit#slide=id.g2c25874eeee_0_0"
                className="ml-2 mt-2 line-clamp-1 text-blue-600 hover:underline"
                target="_blank"
              >
                https://docs.google.com/presentation/d/1aqy-FGL02KV3Or0O-vz9uO9cCuzZP7Cyytu5VOgXuEQ/edit#slide=id.g2c25874eeee_0_0
              </Link>

              <Divider className="my-4" />

              <h1 className="font-semibold mt-4 text-gray-800 text-xl">
                Important Info
              </h1>

              <ImportantInfo user={user}></ImportantInfo>
            </div>
          </ScrollShadow>
        </div>
        <div className="md:w-[45%] lg:w-[40%] hidden md:block overflow-y-scroll bg-white border shadow">
          {searchParams["edit"] === "departureDate" && (
            <DepartureDate departureDate={user?.departureDate}></DepartureDate>
          )}
          {searchParams["edit"] === "arrivalDate" && (
            <ArrivalDate arrivalDate={user?.arrivalDate}></ArrivalDate>
          )}
          {searchParams["edit"] === "arrivalInfo" && (
            <ArrivalInfo info={user?.arrivalFlightInfo}></ArrivalInfo>
          )}
          {searchParams["edit"] === "departureInfo" && (
            <DepartureInfo info={user?.departureFlightInfo}></DepartureInfo>
          )}
          {searchParams["edit"] === "package" && (
            <EditPackage
              dbPackages={packages}
              userId={user.id}
              others={user.others}
            ></EditPackage>
          )}
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
