"use client";

import { Package, Property, User } from "@prisma/client";
import React, { useCallback } from "react";
import moment from "moment";
import { RiEdit2Line } from "react-icons/ri";
import {
  Button,
  DatePicker,
  DateValue,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  Selection,
  ModalHeader,
  Tooltip,
  useDisclosure,
  ModalProps,
  Divider,
} from "@nextui-org/react";
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next-nprogress-bar";
import ArrivalDate from "./EditViews/ArrivalDate";
import ArrivalInfo from "./EditViews/ArrivalInfo";
import DepartureDate from "./EditViews/DepartureDate";
import DepartureInfo from "./EditViews/DepartureInfo";
import { parseDate, getLocalTimeZone } from "@internationalized/date";
import Nationality from "./Nationality";
import Cookies from "js-cookie";

import { useDateFormatter } from "@react-aria/i18n";
import { IoClose } from "react-icons/io5";

function Flight({
  user,
  isPDFView,
  flightFirstName,
  flightLastName,
  flightMiddleName,
  flightDateOfBirth,
  flightPassportNumber,
  flightNationality,
  countries,
  userCountry,
}: {
  user:
    | ({ package: ({ properties: Property[] } & Package) | null } & User)
    | null;
  isPDFView?: boolean;
  flightFirstName?: string | null;
  flightLastName?: string | null;
  flightMiddleName?: string | null;
  flightDateOfBirth?: Date | null;
  flightPassportNumber?: string | null;
  flightNationality?: string | null;
  countries: { key: string; value: string; index: number }[];
  userCountry: { label: string; value: string; index: number } | null;
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

  const [firstName, setFirstName] = React.useState(
    flightFirstName || user?.name.split(" ")[0] || ""
  );
  const [middleName, setMiddleName] = React.useState(flightMiddleName || "");
  const [lastName, setLastName] = React.useState(
    flightLastName || user?.name.split(" ")[1] || ""
  );

  const [dob, setDob] = React.useState<DateValue | undefined>(
    flightDateOfBirth
      ? parseDate(moment(flightDateOfBirth).format("YYYY-MM-DD"))
      : undefined
  );

  const [passportNumber, setPassportNumber] = React.useState(
    flightPassportNumber || ""
  );

  const [selectedCountry, setSelectedCountry] = React.useState<string>(
    flightNationality || userCountry?.label || ""
  );

  const [loading, setLoading] = React.useState(false);

  const createFlightPersonalInfo = async () => {
    setLoading(true);
    const email = Cookies.get("email");
    if (!email) return;

    try {
      const res = await fetch("/api/passport-info", {
        method: "POST",
        body: JSON.stringify({
          email: email.toString(),
          firstName: firstName,
          middleName: middleName,
          lastName: lastName,
          dateOfBirth: dob?.toDate(getLocalTimeZone()),
          passportNumber: passportNumber,
          nationality: selectedCountry,
        }),
      });
      setLoading(false);
      setShowEdit(false);
      router.refresh();
    } catch (error) {
      console.log("error", error);
    }
  };

  let formatter = useDateFormatter({ dateStyle: "medium" });

  const [showEdit, setShowEdit] = React.useState(false);

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
                  <ArrivalDate arrivalDate={user?.arrivalDate}></ArrivalDate>
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

          {isOpenArrivalInfo && (
            <div
              onClick={() => {
                onOpenChangeArrivalInfo();
              }}
              className="fixed inset-0 bg-black bg-opacity-20 z-20"
            >
              <div
                onClick={(e) => {
                  e.stopPropagation();
                }}
                className="absolute bottom-1 p-4 bg-white -translate-x-0 w-full z-20 h-[400px]"
              >
                <h1 className="font-bold text-xl my-3">
                  Update your flight arrival info
                </h1>

                <ArrivalInfo info={user?.arrivalFlightInfo}></ArrivalInfo>

                <div
                  onClick={() => {
                    onOpenChangeArrivalInfo();
                  }}
                  className="cursor-pointer w-[30px] h-[30px] rounded-full flex items-center justify-center bg-gray-100 absolute top-2 right-2"
                >
                  <IoClose></IoClose>
                </div>
              </div>
            </div>
          )}

          {/* <Modal
            isOpen={isOpenArrivalInfo}
            // placement="auto"
            onOpenChange={onOpenChangeArrivalInfo}
            radius="none"
            // scrollBehavior="outside"
            size="full"
            className="overflow-y-scroll"
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
          </Modal> */}
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
                  <DepartureDate
                    departureDate={user?.departureDate}
                  ></DepartureDate>
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

        {isOpenDepartureInfo && (
          <div
            onClick={() => {
              onOpenChangeDepartureInfo();
            }}
            className="fixed inset-0 bg-black bg-opacity-20 z-20"
          >
            <div
              onClick={(e) => {
                e.stopPropagation();
              }}
              className="absolute bottom-1 p-4 bg-white -translate-x-0 w-full z-20 h-[400px]"
            >
              <h1 className="font-bold text-xl my-3">
                Update your flight departure info
              </h1>

              <DepartureInfo info={user?.departureFlightInfo}></DepartureInfo>

              <div
                onClick={() => {
                  onOpenChangeDepartureInfo();
                }}
                className="cursor-pointer w-[30px] h-[30px] rounded-full flex items-center justify-center bg-gray-100 absolute top-2 right-2"
              >
                <IoClose></IoClose>
              </div>
            </div>
          </div>
        )}

        {/* <Modal
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
        </Modal> */}

        {displayParseHTML && user?.departureFlightInfo && (
          <p className="text-gray-500 whitespace-pre-line">
            {user?.departureFlightInfo}
          </p>
        )}

        {!user?.departureFlightInfo && isPDFView && (
          <p className="mt-1 ml-1 text-sm text-gray-600">None</p>
        )}
      </div>

      <div className="mt-4">
        <div className="flex items-center justify-between">
          <h1 className="mb-3 font-bold">Passport info</h1>
          {!showEdit && (
            <Button
              endContent={
                <RiEdit2Line
                  size={20}
                  className="cursor-pointer text-blue-500"
                />
              }
              onClick={() => {
                setShowEdit(true);
              }}
              radius="none"
              variant="light"
              className="hover:!bg-gray-100 md:hidden !px-0 !min-w-fit"
            >
              Edit
            </Button>
          )}
          {showEdit && (
            <Button
              endContent={
                <IoClose size={20} className="cursor-pointer text-blue-500" />
              }
              onClick={() => {
                setShowEdit(false);
              }}
              radius="none"
              variant="light"
              className="hover:!bg-gray-100 md:hidden !px-0 !min-w-fit"
            >
              Close edit
            </Button>
          )}
        </div>
        <Divider className="my-2" />
        {/* {!isPDFView && (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              createFlightPersonalInfo();
            }}
            className="flex flex-col gap-3"
          >
            <div className="flex gap-1 items-start justify-between flex-wrap">
              <Input
                label="First Name"
                variant="bordered"
                placeholder="First Name"
                radius="none"
                type="text"
                className="w-full md:w-[49%] lg:w-[32%]"
                value={firstName}
                onChange={(e: any) => {
                  setFirstName(e.target.value);
                }}
                isRequired
              />

              <Input
                label="Middle Name(Optional)"
                variant="bordered"
                placeholder="Middle Name(Optional)"
                radius="none"
                type="text"
                className="w-full md:w-[49%] lg:w-[32%]"
                value={middleName}
                onChange={(e: any) => {
                  setMiddleName(e.target.value);
                }}
              />

              <Input
                label="Last Name"
                variant="bordered"
                placeholder="Last Name"
                radius="none"
                type="text"
                className="w-full lg:w-[32%]"
                value={lastName}
                onChange={(e: any) => {
                  setLastName(e.target.value);
                }}
                isRequired
              />
            </div>

            <DatePicker
              className="max-w-[384px]"
              label="Date of birth"
              radius="none"
              variant="bordered"
              value={dob}
              onChange={setDob}
              isRequired
            />

            <Nationality
              setSelectedCountry={setSelectedCountry}
              selectedCountry={selectedCountry}
              countries={countries}
            ></Nationality>

            <Input
              label="Passport Number"
              variant="bordered"
              placeholder="Passport Number"
              radius="none"
              type="text"
              className="max-w-[384px]"
              value={passportNumber}
              onChange={(e: any) => {
                setPassportNumber(e.target.value);
              }}
              isRequired
            />

            <Button
              radius="none"
              color="primary"
              isLoading={loading}
              size="md"
              className="w-fit mt-2 text-white"
              type="submit"
            >
              Save
            </Button>
          </form>
        )}

        {isPDFView && (
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-0.5">
              <span className="font-bold">{firstName}</span>
              <span className="font-bold">{middleName}</span>
              <span className="font-bold">{lastName}</span>
            </div>

            <span>
              Date of birth:{"  "}
              {dob ? formatter.format(dob.toDate(getLocalTimeZone())) : "--"}
            </span>

            <span>
              Nationality:{"  "} {flightNationality}
            </span>

            <span>
              Passport number:{"  "} {flightPassportNumber}
            </span>
          </div>
        )} */}

        {!isPDFView && showEdit && (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              createFlightPersonalInfo();
            }}
            className="flex flex-col gap-3"
          >
            <div className="flex gap-1 items-start justify-between flex-wrap">
              <Input
                label="First Name"
                variant="bordered"
                placeholder="First Name"
                radius="none"
                type="text"
                className="w-full md:w-[49%] lg:w-[32%]"
                value={firstName}
                onChange={(e: any) => {
                  setFirstName(e.target.value);
                }}
                isRequired
              />

              <Input
                label="Middle Name(Optional)"
                variant="bordered"
                placeholder="Middle Name(Optional)"
                radius="none"
                type="text"
                className="w-full md:w-[49%] lg:w-[32%]"
                value={middleName}
                onChange={(e: any) => {
                  setMiddleName(e.target.value);
                }}
              />

              <Input
                label="Last Name"
                variant="bordered"
                placeholder="Last Name"
                radius="none"
                type="text"
                className="w-full lg:w-[32%]"
                value={lastName}
                onChange={(e: any) => {
                  setLastName(e.target.value);
                }}
                isRequired
              />
            </div>

            <DatePicker
              className="max-w-[384px]"
              label="Date of birth"
              radius="none"
              variant="bordered"
              value={dob}
              onChange={setDob}
              isRequired
            />

            <Nationality
              setSelectedCountry={setSelectedCountry}
              selectedCountry={selectedCountry}
              countries={countries}
            ></Nationality>

            <Input
              label="Passport Number"
              variant="bordered"
              placeholder="Passport Number"
              radius="none"
              type="text"
              className="max-w-[384px]"
              value={passportNumber}
              onChange={(e: any) => {
                setPassportNumber(e.target.value);
              }}
              isRequired
            />

            <Button
              radius="none"
              color="primary"
              isLoading={loading}
              size="md"
              className="w-fit mt-2 text-white"
              type="submit"
            >
              Save
            </Button>
          </form>
        )}

        {isPDFView ||
          (!showEdit && (
            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-0.5">
                <span className="font-medium">Full name: </span>
                <span className="">{firstName}</span>
                <span className="">{middleName}</span>
                <span className="">{lastName}</span>
              </div>

              <span>
                <span className="font-medium">Date of birth:{"  "}</span>
                {dob
                  ? formatter.format(dob.toDate(getLocalTimeZone()))
                  : "No data"}
              </span>

              <span>
                <span className="font-medium">Nationality:{"  "}</span>
                {flightNationality || "No data"}
              </span>

              <span>
                <span className="font-medium">Passport number:{"  "}</span>
                {flightPassportNumber || "No data"}
              </span>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Flight;
