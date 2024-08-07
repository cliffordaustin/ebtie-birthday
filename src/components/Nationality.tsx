"use client";

import { Select, Selection, SelectItem } from "@nextui-org/react";
import React, { useEffect, useState } from "react";

function Nationality({
  selectedCountry,
  setSelectedCountry,
  countries,
}: {
  selectedCountry: string;
  setSelectedCountry: (value: string) => void;
  countries: { key: string; value: string; index: number }[];
}) {
  const handleSelectionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCountry(e.target.value);
  };

  return (
    <div className="w-full">
      {countries && countries.length > 0 && (
        <Select
          label="Nationality"
          variant="bordered"
          placeholder="Select a nationality"
          selectedKeys={[selectedCountry]}
          className="max-w-[384px]"
          radius="none"
          onChange={handleSelectionChange}
          classNames={
            {
              // popoverContent: "bg-green-400",
            }
          }
        >
          {countries.map((item) => (
            <SelectItem key={item.key}>{item.key}</SelectItem>
          ))}
        </Select>
      )}
    </div>
  );
}

export default Nationality;
