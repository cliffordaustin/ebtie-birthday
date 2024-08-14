"use client";

import React, { useEffect, useMemo, useState } from "react";
import Select from "react-select";

function Nationality({
  selectedCountry,
  setSelectedCountry,
  countries,
}: {
  selectedCountry: string;
  setSelectedCountry: (value: string) => void;
  countries: { key: string; value: string; index: number }[];
}) {
  return (
    <div className="w-full">
      <div className="max-w-[384px]">
        <Select
          options={
            countries.map((country) => ({
              label: country.key,
              value: country.key.toLowerCase(),
            })) as any
          }
          placeholder="Select a nationality"
          required={true}
          value={{
            label: selectedCountry,
            value: selectedCountry.toLowerCase(),
          }}
          onChange={(country: any) => {
            setSelectedCountry(country.label);
          }}
          styles={{
            menu: (defaultStyles) => ({
              ...defaultStyles,
              backgroundColor: "white",
              zIndex: 20,
            }),
            control: (defaultStyles) => ({
              ...defaultStyles,
              height: 50,
              boxShadow: "none",
              borderRadius: 0,
              backgroundColor: "transparent",
              borderColor: "#e5e5e5",
              borderWidth: 2,
              ":hover": {
                borderColor: "#adb5bd",
              },
            }),
          }}
        />
      </div>
    </div>
  );
}

export default Nationality;
