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

function AddPassportInfo({
  userId,
  userCountry,
  countries,
  setAddAnotherPassport,
}: {
  userId?: string | null;
  userCountry: { label: string; value: string; index: number } | null;
  countries: { key: string; value: string; index: number }[];
  setAddAnotherPassport: (value: boolean) => void;
}) {
  const router = useRouter();

  const [firstName, setFirstName] = React.useState("");
  const [middleName, setMiddleName] = React.useState("");
  const [lastName, setLastName] = React.useState("");

  const [dob, setDob] = React.useState<DateValue | undefined>(undefined);

  const [passportNumber, setPassportNumber] = React.useState("");

  const [selectedCountry, setSelectedCountry] = React.useState<string>(
    userCountry?.label || ""
  );

  const [loading, setLoading] = React.useState(false);

  const createOtherFlightPersonalInfo = async () => {
    setLoading(true);
    const email = Cookies.get("email");
    if (!email) return;

    try {
      const res = await fetch("/api/other-passport-info", {
        method: "POST",
        body: JSON.stringify({
          userId: userId,
          firstName: firstName,
          middleName: middleName,
          lastName: lastName,
          dateOfBirth: dob?.toDate(getLocalTimeZone()),
          passportNumber: passportNumber,
          nationality: selectedCountry,
        }),
      });
      setLoading(false);
      setAddAnotherPassport(false);
      router.refresh();
    } catch (error) {
      console.log("error", error);
    }
  };

  let formatter = useDateFormatter({ dateStyle: "medium" });
  return (
    <div>
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
              setAddAnotherPassport(false);
            }}
            radius="none"
            variant="light"
            className="hover:!bg-gray-100 !px-3 !min-w-fit"
          >
            Cancel
          </Button>
        </div>
      </form>
    </div>
  );
}

export default AddPassportInfo;
