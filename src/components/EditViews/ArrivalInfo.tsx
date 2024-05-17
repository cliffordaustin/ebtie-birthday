"use client";
import { Button, Textarea } from "@nextui-org/react";
import { useRouter } from "next/navigation";
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
    <div className="py-3 px-5">
      <h1 className="font-semibold text-xl my-3">
        Update your flight arrival info
      </h1>

      <form className="h-[200px]" action={updateArrivalInfo}>
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
            color="primary"
            type="submit"
            radius="none"
            className="text-white w-full"
          >
            Update
          </Button>
        </div>
      </form>
    </div>
  );
}

export default ArrivalInfo;
