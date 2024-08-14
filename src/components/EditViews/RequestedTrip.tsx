"use client";
import { Button, Textarea } from "@nextui-org/react";
import { useRouter } from "next-nprogress-bar";
import React, { useState } from "react";
import Cookies from "js-cookie";

function RequestedTrip({ info }: { info: string | null | undefined }) {
  const [loading, setLoading] = useState(false);
  const [requestedTripInfo, setRequestedTripInfo] = useState(info ? info : "");

  const router = useRouter();

  const updatePackageToOthers = async () => {
    setLoading(true);

    const email = Cookies.get("email");
    if (!email) return;

    try {
      await fetch("/api/packages", {
        method: "POST",
        body: JSON.stringify({
          email: email.toString(),
          packageId: "others",
          userPackage: requestedTripInfo,
        }),
      });

      router.refresh();
    } catch (error) {
      console.error(error);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="md:mb-0 mb-2 md:py-3 md:px-5">
      <h1 className="font-semibold text-xl my-3 hidden md:block">
        Update your requested trip plan
      </h1>

      <Textarea
        label="Flight Arrival Info"
        placeholder="Enter your flight arrival info here"
        rows={10}
        radius="none"
        value={requestedTripInfo}
        onChange={(e) => {
          setRequestedTripInfo(e.target.value);
        }}
        name="requestedTripInfo"
        disableAutosize
        className="w-full"
      />

      <div className="flex mt-3 justify-between items-center">
        <div></div>

        <Button
          isLoading={loading}
          color={requestedTripInfo ? "primary" : "default"}
          type="submit"
          radius="none"
          onClick={updatePackageToOthers}
          className="text-white w-full"
          disabled={!requestedTripInfo}
        >
          Update
        </Button>
      </div>
    </div>
  );
}

export default RequestedTrip;
