"use client";
import { Button, Textarea } from "@nextui-org/react";
import { useRouter } from "next-nprogress-bar";
import React from "react";
import Cookies from "js-cookie";

function DepartureInfo({ info }: { info: string | undefined }) {
  const [loading, setLoading] = React.useState(false);
  const [departureFlightInfo, setDepartureFlightInfo] = React.useState(info);
  const router = useRouter();

  const updateDepartureInfo = async () => {
    setLoading(true);

    const email = Cookies.get("email");
    if (!email) return;
    const res = await fetch("/api/flight-departure-info", {
      method: "POST",
      body: JSON.stringify({
        email: email.toString(),
        departureFlightInfo: departureFlightInfo,
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
        Update your flight departure info
      </h1>

      <Textarea
        label="Flight Departure Info"
        placeholder="Enter your flight departure info here"
        rows={10}
        radius="none"
        value={departureFlightInfo}
        onChange={(e) => {
          setDepartureFlightInfo(e.target.value);
        }}
        name="departureFlightInfo"
        disableAutosize
        className="w-full"
      />

      <div className="flex mt-2 justify-between">
        <div></div>
        <Button
          isLoading={loading}
          type="submit"
          color="primary"
          onClick={updateDepartureInfo}
          radius="none"
          className="w-full text-white"
        >
          Update
        </Button>
      </div>
    </div>
  );
}

export default DepartureInfo;
