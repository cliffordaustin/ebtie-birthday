"use client";

import { Package, Property, User } from "@prisma/client";
import React, { useCallback } from "react";
import moment from "moment";
import { RiEdit2Line } from "react-icons/ri";
import { Button, Tooltip } from "@nextui-org/react";
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next-nprogress-bar";

function Flight({
  user,
  isPDFView,
}: {
  user:
    | ({ package: ({ properties: Property[] } & Package) | null } & User)
    | null;
  isPDFView?: boolean;
}) {
  const [displayParseHTML, setDisplayParseHTML] = React.useState(false);

  React.useEffect(() => {
    setDisplayParseHTML(true);
  }, []);

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  return (
    <div className="mt-4 flex flex-col gap-5 text-sm">
      <div className="flex justify-between items-center">
        <h1 className="font-bold">Arrival Date</h1>

        {!isPDFView && (
          <Tooltip showArrow placement="bottom" content="Edit Arrival Date">
            <Button
              endContent={
                <RiEdit2Line
                  size={20}
                  className="cursor-pointer text-blue-500"
                />
              }
              onClick={() => {
                router.replace(
                  pathname + "?" + createQueryString("edit", "arrivalDate")
                );
              }}
              radius="none"
              variant="light"
              className="hover:!bg-gray-100"
            >
              {user?.arrivalDate
                ? moment(user?.arrivalDate).format("MMM Do YYYY")
                : "No date"}
            </Button>
          </Tooltip>
        )}

        {isPDFView && (
          <p className="text-gray-600">
            {user?.arrivalDate
              ? moment(user?.arrivalDate).format("MMM Do YYYY")
              : "No date"}
          </p>
        )}
      </div>

      <div className="flex flex-col gap-1">
        <div className="flex items-center justify-between">
          <h1 className="font-bold">Flight Arrival Info</h1>

          {!isPDFView && (
            <Tooltip
              showArrow
              placement="bottom"
              content="Edit Flight Arrival Info"
            >
              <Button
                endContent={
                  <RiEdit2Line
                    size={20}
                    className="cursor-pointer text-blue-500"
                  />
                }
                onClick={() => {
                  router.replace(
                    pathname + "?" + createQueryString("edit", "arrivalInfo")
                  );
                }}
                radius="none"
                variant="light"
                className="hover:!bg-gray-100"
              >
                Edit
              </Button>
            </Tooltip>
          )}
        </div>

        {displayParseHTML && user?.arrivalFlightInfo && (
          <p className="text-gray-500 whitespace-pre-line">
            {user?.arrivalFlightInfo}
          </p>
        )}

        {!user?.arrivalFlightInfo && isPDFView && (
          <p className="mt-1 ml-1 text-sm text-gray-600">None</p>
        )}
      </div>

      <div className="flex justify-between items-center">
        <h1 className="font-bold">Departure Date</h1>

        {!isPDFView && (
          <Tooltip showArrow placement="bottom" content="Edit Departure Date">
            <Button
              onClick={() => {
                router.replace(
                  pathname + "?" + createQueryString("edit", "departureDate")
                );
              }}
              radius="none"
              variant="light"
              className="hover:!bg-gray-100"
              endContent={
                <RiEdit2Line
                  size={20}
                  className="cursor-pointer text-blue-500"
                ></RiEdit2Line>
              }
            >
              {user?.departureDate
                ? moment(user?.departureDate).format("MMM Do YYYY")
                : "No date"}
            </Button>
          </Tooltip>
        )}

        {isPDFView && (
          <p className="text-gray-600">
            {user?.departureDate
              ? moment(user?.departureDate).format("MMM Do YYYY")
              : "No date"}
          </p>
        )}
      </div>

      <div className="flex flex-col gap-1">
        <div className="flex items-center justify-between">
          <h1 className="font-bold">Flight Departure Info</h1>

          {!isPDFView && (
            <Tooltip
              showArrow
              placement="bottom"
              content="Edit Flight Departure Info"
            >
              <Button
                endContent={
                  <RiEdit2Line
                    size={20}
                    className="cursor-pointer text-blue-500"
                  />
                }
                onClick={() => {
                  router.replace(
                    pathname + "?" + createQueryString("edit", "departureInfo")
                  );
                }}
                radius="none"
                variant="light"
                className="hover:!bg-gray-100"
              >
                Edit
              </Button>
            </Tooltip>
          )}
        </div>

        {displayParseHTML && user?.departureFlightInfo && (
          <p className="text-gray-500 whitespace-pre-line">
            {user?.departureFlightInfo}
          </p>
        )}

        {!user?.departureFlightInfo && isPDFView && (
          <p className="mt-1 ml-1 text-sm text-gray-600">None</p>
        )}
      </div>
    </div>
  );
}

export default Flight;
