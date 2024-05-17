"use client";
import { Button } from "@nextui-org/react";
import { revalidatePath } from "next/cache";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { DayPicker } from "react-day-picker";
import Cookies from "js-cookie";

function ArrivalDate({ arrivalDate }: { arrivalDate: Date | undefined }) {
  const [selected, setSelected] = useState<Date | undefined>(arrivalDate);
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const updateArrivalDate = async () => {
    setLoading(true);

    const email = Cookies.get("email");
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
        className="bg-white shadow border p-2 rounded-none mt-2"
        mode="single"
        selected={selected}
        defaultMonth={selected}
        onSelect={setSelected}
        classNames={{
          day_selected: "!bg-[#212529] !text-white",
        }}
        styles={{
          cell: {
            width: "4rem",
            height: "3rem",
          },
          table: {
            maxWidth: "100%",
          },
        }}
      />

      <div className="flex mt-3 px-4 justify-between items-center">
        <div></div>

        <Button
          isLoading={loading}
          onClick={updateArrivalDate}
          color="primary"
          radius="none"
          className="text-white w-full"
        >
          Update
        </Button>
      </div>
    </div>
  );
}

export default ArrivalDate;
