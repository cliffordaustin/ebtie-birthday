"use client";

import { Package, Property, User } from "@prisma/client";
import React, { useCallback } from "react";
import moment from "moment";
import { RiEdit2Line } from "react-icons/ri";
import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Tooltip,
  useDisclosure,
} from "@nextui-org/react";
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next-nprogress-bar";
import ArrivalDate from "./EditViews/ArrivalDate";
import ArrivalInfo from "./EditViews/ArrivalInfo";
import DepartureDate from "./EditViews/DepartureDate";
import DepartureInfo from "./EditViews/DepartureInfo";

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

  const {
    isOpen: isOpenArrivalDate,
    onOpen: onOpenArrivalDate,
    onOpenChange: onOpenChangeArrivalDate,
  } = useDisclosure();

  const {
    isOpen: isOpenArrivalInfo,
    onOpen: onOpenArrivalInfo,
    onOpenChange: onOpenChangeArrivalInfo,
  } = useDisclosure();

  const {
    isOpen: isOpenDepartureInfo,
    onOpen: onOpenDepartureInfo,
    onOpenChange: onOpenChangeDepartureInfo,
  } = useDisclosure();

  const {
    isOpen: isOpenDepartureDate,
    onOpen: onOpenDepartureDate,
    onOpenChange: onOpenChangeDepartureDate,
  } = useDisclosure();

  return (
    <div className="mt-4 flex flex-col gap-5 text-sm">
      <div className="flex justify-between items-center">
        <h1 className="font-bold">Arrival Date</h1>

        {!isPDFView && (
          <>
            <Tooltip
              className=""
              showArrow
              placement="bottom"
              content="Edit Arrival Date"
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
                    pathname + "?" + createQueryString("edit", "arrivalDate")
                  );
                }}
                radius="none"
                variant="light"
                className="hover:!bg-gray-100 hidden md:flex"
              >
                {user?.arrivalDate
                  ? moment(user?.arrivalDate).format("MMM Do YYYY")
                  : "No date"}
              </Button>
            </Tooltip>

            <Button
              endContent={
                <RiEdit2Line
                  size={20}
                  className="cursor-pointer text-blue-500"
                />
              }
              onClick={() => {
                onOpenArrivalDate();
                router.replace(
                  pathname + "?" + createQueryString("edit", "arrivalDate")
                );
              }}
              radius="none"
              variant="light"
              className="hover:!bg-gray-100 md:hidden !px-0 !min-w-fit"
            >
              {user?.arrivalDate
                ? moment(user?.arrivalDate).format("MMM Do YYYY")
                : "No date"}
            </Button>
          </>
        )}

        <Modal
          isOpen={isOpenArrivalDate}
          placement="bottom"
          onOpenChange={onOpenChangeArrivalDate}
          radius="none"
        >
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1">
                  Update your arrival date
                </ModalHeader>
                <ModalBody>
                  {user?.arrivalDate && (
                    <ArrivalDate arrivalDate={user?.arrivalDate}></ArrivalDate>
                  )}
                </ModalBody>
              </>
            )}
          </ModalContent>
        </Modal>

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
            <>
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
                  className="hover:!bg-gray-100 hidden md:flex"
                >
                  Edit
                </Button>
              </Tooltip>

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
                  onOpenArrivalInfo();
                }}
                radius="none"
                variant="light"
                className="hover:!bg-gray-100 md:hidden !px-0 !min-w-fit"
              >
                Edit
              </Button>
            </>
          )}

          <Modal
            isOpen={isOpenArrivalInfo}
            placement="bottom"
            onOpenChange={onOpenChangeArrivalInfo}
            radius="none"
          >
            <ModalContent>
              {(onClose) => (
                <>
                  <ModalHeader className="flex flex-col gap-1">
                    Update your flight arrival info
                  </ModalHeader>
                  <ModalBody>
                    {user?.arrivalFlightInfo && (
                      <ArrivalInfo info={user?.arrivalFlightInfo}></ArrivalInfo>
                    )}
                  </ModalBody>
                </>
              )}
            </ModalContent>
          </Modal>
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
          <>
            <Tooltip showArrow placement="bottom" content="Edit Departure Date">
              <Button
                onClick={() => {
                  router.replace(
                    pathname + "?" + createQueryString("edit", "departureDate")
                  );
                }}
                radius="none"
                variant="light"
                className="hover:!bg-gray-100 hidden md:flex"
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

            <Button
              onClick={() => {
                router.replace(
                  pathname + "?" + createQueryString("edit", "departureDate")
                );
                onOpenDepartureDate();
              }}
              radius="none"
              variant="light"
              className="hover:!bg-gray-100 md:hidden !px-0 !px-0 !min-w-fit"
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
          </>
        )}

        {isPDFView && (
          <p className="text-gray-600">
            {user?.departureDate
              ? moment(user?.departureDate).format("MMM Do YYYY")
              : "No date"}
          </p>
        )}

        <Modal
          isOpen={isOpenDepartureDate}
          placement="bottom"
          onOpenChange={onOpenChangeDepartureDate}
          radius="none"
        >
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1">
                  Update your departure date
                </ModalHeader>
                <ModalBody>
                  {user?.departureDate && (
                    <DepartureDate
                      departureDate={user?.departureDate}
                    ></DepartureDate>
                  )}
                </ModalBody>
              </>
            )}
          </ModalContent>
        </Modal>
      </div>

      <div className="flex flex-col gap-1">
        <div className="flex items-center justify-between">
          <h1 className="font-bold">Flight Departure Info</h1>

          {!isPDFView && (
            <>
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
                      pathname +
                        "?" +
                        createQueryString("edit", "departureInfo")
                    );
                  }}
                  radius="none"
                  variant="light"
                  className="hover:!bg-gray-100 md:flex hidden"
                >
                  Edit
                </Button>
              </Tooltip>

              <Button
                onClick={() => {
                  router.replace(
                    pathname + "?" + createQueryString("edit", "departureInfo")
                  );
                  onOpenDepartureInfo();
                }}
                radius="none"
                variant="light"
                className="hover:!bg-gray-100 md:hidden !px-0 !min-w-fit"
                endContent={
                  <RiEdit2Line
                    size={20}
                    className="cursor-pointer text-blue-500"
                  ></RiEdit2Line>
                }
              >
                Edit
              </Button>
            </>
          )}
        </div>

        <Modal
          isOpen={isOpenDepartureInfo}
          placement="bottom"
          onOpenChange={onOpenChangeDepartureInfo}
          radius="none"
        >
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1">
                  Update your flight departure info
                </ModalHeader>
                <ModalBody>
                  {user?.departureFlightInfo && (
                    <DepartureInfo
                      info={user?.departureFlightInfo}
                    ></DepartureInfo>
                  )}
                </ModalBody>
              </>
            )}
          </ModalContent>
        </Modal>

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
