"use client";
import { Button } from "@nextui-org/react";
import { revalidatePath } from "next/cache";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useState } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

function ArrivalDate({ arrivalDate }: { arrivalDate: Date | undefined }) {
  const [selected, setSelected] = useState<Date | undefined>(arrivalDate);
  const [loading, setLoading] = useState(false);

  const searchParams = useSearchParams();
  const router = useRouter();

  const updateArrivalDate = async () => {
    setLoading(true);

    const email = searchParams.get("email");
    if (!email) return;
    const res = await fetch("/api/date-arrival-flight", {
      method: "POST",
      body: JSON.stringify({ email: email.toString(), arrivalDate: selected }),
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
      <h1 className="font-semibold text-xl my-3">Update your arrival date</h1>
      <DayPicker
        className="bg-white shadow border p-2 rounded-md mt-2"
        mode="single"
        selected={selected}
        defaultMonth={selected}
        onSelect={setSelected}
      />

      <div className="flex mt-3 px-2 justify-between items-center">
        <div></div>

        <Button
          isLoading={loading}
          onClick={updateArrivalDate}
          className="bg-gradient-to-tr from-slate-800 to-slate-700 text-white shadow-lg"
        >
          Update
        </Button>
      </div>
    </div>
  );
}

export default ArrivalDate;
