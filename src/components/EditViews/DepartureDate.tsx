"use client";
import { Button } from "@nextui-org/react";
import { useRouter } from "next-nprogress-bar";
import React, { useState } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import Cookies from "js-cookie";

function DepartureDate({ departureDate }: { departureDate: Date | undefined }) {
  const [selected, setSelected] = useState<Date | undefined>(departureDate);
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const updateDepartureDate = async () => {
    setLoading(true);

    const email = Cookies.get("email");
    if (!email) return;
    const res = await fetch("/api/date-departure-flight", {
      method: "POST",
      body: JSON.stringify({
        email: email.toString(),
        departureDate: selected,
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
      <h1 className="font-semibold text-xl my-3">Update your departure date</h1>
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
          onClick={updateDepartureDate}
          radius="none"
          color="primary"
          className="text-white w-full"
        >
          Update
        </Button>
      </div>
    </div>
  );
}

export default DepartureDate;
