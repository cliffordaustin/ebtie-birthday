"use client";
import { Button, Textarea } from "@nextui-org/react";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useState } from "react";

function ArrivalInfo() {
  const [loading, setLoading] = useState(false);

  const searchParams = useSearchParams();
  const router = useRouter();

  const updateArrivalInfo = async (formData: FormData) => {
    setLoading(true);

    const email = searchParams.get("email");
    if (!email) return;
    const res = await fetch("/api/flight-arrival-info", {
      method: "POST",
      body: JSON.stringify({
        email: email.toString(),
        arrivalFlightInfo: formData.get("arrivalFlightInfo"),
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
    <div className="p-3">
      <h1 className="font-semibold text-xl my-3">
        Update your flight arrival info
      </h1>

      <form className="h-[200px]" action={updateArrivalInfo}>
        <Textarea
          label="Flight Arrival Info"
          placeholder="Enter your flight arrival info here"
          rows={10}
          name="arrivalFlightInfo"
          disableAutosize
          className="w-full"
        />

        <div className="flex justify-between">
          <div></div>
          <Button
            isLoading={loading}
            type="submit"
            className="bg-gradient-to-tr mt-4 from-slate-800 to-slate-700 text-white shadow-lg"
          >
            Update
          </Button>
        </div>
      </form>
    </div>
  );
}

export default ArrivalInfo;
