"use client";
import { Button, Textarea } from "@nextui-org/react";
import { useRouter } from "next-nprogress-bar";
import React, { useState } from "react";
import Cookies from "js-cookie";

function ArrivalInfo({ info }: { info: string | undefined }) {
  const [loading, setLoading] = useState(false);
  const [arrivalFlightInfo, setArrivalFlightInfo] = useState(info);

  const router = useRouter();

  const updateArrivalInfo = async () => {
    setLoading(true);

    const email = Cookies.get("email");
    if (!email) return;
    const res = await fetch("/api/flight-arrival-info", {
      method: "POST",
      body: JSON.stringify({
        email: email.toString(),
        arrivalFlightInfo: arrivalFlightInfo,
      }),
    });

    if (res.ok) {
      router.refresh();
      setLoading(false);
    } else {
      setLoading(false);
    }
  };

  return (
    <div className="md:mb-0 mb-2 md:py-3 md:px-5">
      <h1 className="font-semibold text-xl my-3 hidden md:block">
        Update your flight arrival info
      </h1>

      <Textarea
        label="Flight Arrival Info"
        placeholder="Enter your flight arrival info here"
        rows={10}
        radius="none"
        value={arrivalFlightInfo}
        onChange={(e) => {
          setArrivalFlightInfo(e.target.value);
        }}
        name="arrivalFlightInfo"
        disableAutosize
        className="w-full"
      />

      <div className="flex mt-3 justify-between items-center">
        <div></div>

        <Button
          isLoading={loading}
          color={arrivalFlightInfo ? "primary" : "default"}
          type="submit"
          radius="none"
          onClick={updateArrivalInfo}
          className="text-white w-full"
          disabled={!arrivalFlightInfo}
        >
          Update
        </Button>
      </div>
    </div>
  );
}

export default ArrivalInfo;
