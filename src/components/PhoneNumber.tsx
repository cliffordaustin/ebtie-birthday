"use client";

import React from "react";
import { Button } from "@nextui-org/react";
import PhoneInput from "react-phone-number-input";
import CustomPhoneNumber from "../components/ui/phone-number";
import Cookies from "js-cookie";
import { useRouter } from "next-nprogress-bar";
import "react-phone-number-input/style.css";
import { Package, Property, User } from "@prisma/client";

function PhoneNumber({
  user,
  setShowPhoneNumberSection,
}: {
  user:
    | ({ package: ({ properties: Property[] } & Package) | null } & User)
    | null;
  setShowPhoneNumberSection: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [phone, setPhone] = React.useState<any>(user?.phone || "");
  const [loading, setLoading] = React.useState(false);
  const router = useRouter();

  const updatePhoneNumber = async () => {
    setLoading(true);
    const email = Cookies.get("email");
    if (!email) {
      setLoading(false);
      return;
    }

    const res = await fetch("/api/phone-number", {
      method: "POST",
      body: JSON.stringify({
        email,
        phoneNumber: phone,
      }),
    });

    if (res.ok) {
      setLoading(false);
      setShowPhoneNumberSection(false);
      router.refresh();
    } else {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col justify-center gap-2">
      <div className="flex gap-4 mt-6">
        <div className="w-[300px]">
          <PhoneInput
            placeholder="Enter phone number"
            value={phone}
            onChange={setPhone}
            defaultCountry="US"
            focusInputOnCountrySelection={false}
            inputComponent={CustomPhoneNumber}
          />
        </div>

        <Button
          color={phone || !loading ? "primary" : "secondary"}
          variant="solid"
          size="lg"
          radius="none"
          className="text-white py-[18px]"
          onClick={updatePhoneNumber}
          isLoading={loading}
          disabled={loading}
        >
          Save
        </Button>
      </div>
    </div>
  );
}

export default PhoneNumber;
