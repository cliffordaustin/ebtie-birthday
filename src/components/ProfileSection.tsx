"use client";

import {
  CardPaymentLink,
  DietryRestriction,
  Package,
  Property,
  TripAddOn,
  User,
  UserPackage,
} from "@prisma/client";
import React from "react";
import ProfilePic from "../components/ProfilePic";
import { Avatar, Button, Tooltip } from "@nextui-org/react";
import Logout from "../components/Logout";
import PhoneNumber from "../components/PhoneNumber";
import PDF from "../components/pdf/PDF";

import { MdModeEditOutline } from "react-icons/md";

function ProfileSection({
  user,
  allTripAddOns,
  allOnSiteTripAddOns,
}: {
  user:
    | ({ package: ({ properties: Property[] } & Package) | null } & {
        newUserPackages:
          | ({ package: { properties: Property[] } & Package } & UserPackage)[]
          | null;
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
  const [showPhoneNumberSection, setShowPhoneNumberSection] =
    React.useState(false);
  return (
    <>
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2 ">
          <div className="p-2">
            {!user?.profilePicture ? (
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
            ) : (
              <Avatar
                src={user.profilePicture}
                isBordered
                color="secondary"
                className="h-[100px] w-[100px]"
              />
            )}
          </div>

          <div className="flex flex-col gap-1">
            <h1 className="text-xl md:text-2xl font-bold">{user?.name}</h1>
            <p className="text-gray-500">{user?.email}</p>
            <div className="flex items-center gap-1">
              <p className="text-gray-500">
                {user?.phone ? user.phone : "No phone number added"}
              </p>
              <Tooltip
                className=""
                showArrow
                placement="bottom"
                content={
                  showPhoneNumberSection ? "Cancel edit" : "Edit phone number"
                }
              >
                <Button
                  onClick={() => {
                    setShowPhoneNumberSection(!showPhoneNumberSection);
                  }}
                  size="sm"
                  variant="light"
                  isIconOnly
                >
                  {!showPhoneNumberSection ? (
                    <MdModeEditOutline size={14} color="blue" />
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="size-4"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M6 18 18 6M6 6l12 12"
                      />
                    </svg>
                  )}
                </Button>
              </Tooltip>
            </div>
            <div className="flex items-center gap-2">
              <ProfilePic></ProfilePic>
              <div className="w-[1px] h-[20px] bg-gray-500"></div>
              <Logout />
            </div>

            <div className="lg:hidden">
              <PDF
                user={user}
                allTripAddOns={allTripAddOns}
                allOnSiteTripAddOns={allOnSiteTripAddOns}
              />
            </div>
          </div>
        </div>

        <div className="hidden lg:block">
          <PDF
            user={user}
            allTripAddOns={allTripAddOns}
            allOnSiteTripAddOns={allOnSiteTripAddOns}
          />
        </div>
      </div>
      {showPhoneNumberSection && (
        <PhoneNumber
          setShowPhoneNumberSection={setShowPhoneNumberSection}
          user={user}
        ></PhoneNumber>
      )}
    </>
  );
}

export default ProfileSection;
