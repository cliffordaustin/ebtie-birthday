import { TripAddOn } from "@prisma/client";
import React from "react";

function TripAddons({ tripAddons }: { tripAddons: TripAddOn[] | undefined }) {
  return (
    <div className="flex flex-col gap-2 mt-4 ml-2">
      {tripAddons?.map((addon) => (
        <div
          className="flex items-center justify-between text-sm"
          key={addon.id}
        >
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-gray-600"></div>
            <p className="text-sm text-gray-600">{addon.name}</p>
          </div>

          <p className="text-gray-600">${addon.price}</p>
        </div>
      ))}
    </div>
  );
}

export default TripAddons;
