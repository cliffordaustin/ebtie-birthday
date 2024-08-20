import { Button, DatePicker, DateValue, Input } from "@nextui-org/react";
import { OtherPassportInfo, Package, Property, User } from "@prisma/client";
import React from "react";
import { IoClose } from "react-icons/io5";
import { RiEdit2Line } from "react-icons/ri";
import { parseDate, getLocalTimeZone } from "@internationalized/date";
import Nationality from "./Nationality";
import Cookies from "js-cookie";
import { useDateFormatter } from "@react-aria/i18n";
import moment from "moment";
import { useRouter } from "next-nprogress-bar";
import { MdDelete } from "react-icons/md";

function PassportInfo({
  passportInfo,
  user,
  userCountry,
  countries,
  isPDFView,
}: {
  passportInfo?: OtherPassportInfo | null;
  user:
    | ({ package: ({ properties: Property[] } & Package) | null } & User)
    | null;
  userCountry: { label: string; value: string; index: number } | null;
  countries: { key: string; value: string; index: number }[];
  isPDFView?: boolean;
}) {
  const router = useRouter();

  const [showEdit, setShowEdit] = React.useState(false);

  const [firstName, setFirstName] = React.useState(
    passportInfo?.flightFirstName || user?.name.split(" ")[0] || ""
  );
  const [middleName, setMiddleName] = React.useState(
    passportInfo?.flightMiddleName || ""
  );
  const [lastName, setLastName] = React.useState(
    passportInfo?.flightLastName || user?.name.split(" ")[1] || ""
  );

  const [dob, setDob] = React.useState<DateValue | undefined>(
    passportInfo?.flightDateOfBirth
      ? parseDate(moment(passportInfo?.flightDateOfBirth).format("YYYY-MM-DD"))
      : undefined
  );

  const [passportNumber, setPassportNumber] = React.useState(
    passportInfo?.flightPassportNumber || ""
  );

  const [selectedCountry, setSelectedCountry] = React.useState<string>(
    passportInfo?.flightNationality || userCountry?.label || ""
  );

  const [loading, setLoading] = React.useState(false);

  const [deleteLoading, setDeleteLoading] = React.useState(false);

  const createOtherFlightPersonalInfo = async () => {
    setLoading(true);
    const email = Cookies.get("email");
    if (!email) return;

    try {
      const res = await fetch("/api/passport-info-update", {
        method: "POST",
        body: JSON.stringify({
          id: passportInfo?.id,
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

  const deletePassportInfo = async () => {
    setDeleteLoading(true);
    const email = Cookies.get("email");
    if (!email) return;

    try {
      const res = await fetch(`/api/passport-info-update/`, {
        method: "DELETE",
        body: JSON.stringify({ id: passportInfo?.id }),
      });
      setDeleteLoading(false);
      router.refresh();
    } catch (error) {
      console.log("error", error);
    }
  };

  let formatter = useDateFormatter({ dateStyle: "medium" });
  return (
    <div>
      {showEdit && !isPDFView && (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            createOtherFlightPersonalInfo();
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

          <div className="flex items-center gap-2 mt-2">
            <Button
              radius="none"
              color="primary"
              isLoading={loading}
              size="md"
              className="w-fit text-white"
              type="submit"
            >
              Save
            </Button>

            <Button
              endContent={
                <IoClose size={20} className="cursor-pointer text-blue-500" />
              }
              onClick={() => {
                setShowEdit(false);
              }}
              radius="none"
              variant="light"
              className="hover:!bg-gray-100 !px-0 md:!px-3 !min-w-fit"
            >
              Close edit
            </Button>
          </div>
        </form>
      )}
      {(!showEdit || isPDFView) && (
        <>
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-1">
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
              {passportInfo?.flightNationality || "No data"}
            </span>

            <span>
              <span className="font-medium">Passport number:{"  "}</span>
              {passportInfo?.flightPassportNumber || "No data"}
            </span>
          </div>

          {!isPDFView && (
            <div className="mt-2 flex gap-2">
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
                className="!bg-gray-100 !px-3 !min-w-fit"
              >
                Edit
              </Button>
              <Button
                endContent={
                  <MdDelete size={20} className="cursor-pointer text-white" />
                }
                onClick={() => {
                  deletePassportInfo();
                }}
                isLoading={deleteLoading}
                radius="none"
                className="!px-3 !bg-red-500 !text-white !min-w-fit"
              >
                Delete
              </Button>
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default PassportInfo;
