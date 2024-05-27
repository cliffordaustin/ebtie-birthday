"use client";

import { Switch } from "@nextui-org/react";
import React from "react";
import Cookies from "js-cookie";
import { useRouter } from "next-nprogress-bar";
import { Package, Property, User } from "@prisma/client";

function ImportantInfo({
  user,
  isPDFView,
}: {
  user:
    | ({ package: ({ properties: Property[] } & Package) | null } & User)
    | null;
  isPDFView?: boolean;
}) {
  const [isSelected, setIsSelected] = React.useState(
    user?.yellow_fever_vaccine
  );
  const [isVisaReceived, setIsVisaReceived] = React.useState(
    user?.visa_received
  );

  const router = useRouter();

  const updateStatus = async (val: boolean) => {
    setIsSelected(val);

    const email = Cookies.get("email");
    if (!email) return;
    const res = await fetch("/api/important-info", {
      method: "POST",
      body: JSON.stringify({
        email: email.toString(),
        vaccineSelected: val,
        isVisaReceived,
      }),
    });

    if (res.ok) {
      router.refresh();
    } else {
      setIsSelected(!isSelected);
    }
  };

  const updateVisaStatus = async (val: boolean) => {
    setIsVisaReceived(val);

    const email = Cookies.get("email");
    if (!email) return;
    const res = await fetch("/api/important-info", {
      method: "POST",
      body: JSON.stringify({
        email: email.toString(),
        vaccineSelected: isSelected,
        isVisaReceived: val,
      }),
    });

    if (res.ok) {
      router.refresh();
    } else {
      setIsVisaReceived(!isVisaReceived);
    }
  };
  return (
    <div className="mt-4 flex flex-col gap-2">
      <div className="flex items-center justify-between">
        <span>Yellow fever vaccination</span>

        {!isPDFView && (
          <Switch
            isSelected={isSelected}
            onValueChange={(val) => {
              updateStatus(val);
            }}
          ></Switch>
        )}

        {isPDFView && (
          <span className="text-gray-500">{isSelected ? "Yes" : "No"}</span>
        )}
      </div>

      <div className="flex items-center justify-between">
        <span>Visa received</span>

        {!isPDFView && (
          <Switch
            isSelected={isVisaReceived}
            onValueChange={updateVisaStatus}
          ></Switch>
        )}

        {isPDFView && (
          <span className="text-gray-500">{isVisaReceived ? "Yes" : "No"}</span>
        )}
      </div>
    </div>
  );
}

export default ImportantInfo;
