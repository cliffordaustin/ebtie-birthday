"use client";

import { Button, Input, Tooltip } from "@nextui-org/react";
import { TripAddOn } from "@prisma/client";
import { useRouter } from "next/navigation";
import React from "react";
import { FaPlus } from "react-icons/fa6";
import { FiDelete } from "react-icons/fi";
import Cookies from "js-cookie";

function TripAddons({
  tripAddons,
  userId,
  isPDFView,
}: {
  tripAddons: TripAddOn[] | undefined;
  userId: string | undefined;
  isPDFView?: boolean;
}) {
  const [addon, setAddon] = React.useState("");
  const [showAddOn, setShowAddOn] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const router = useRouter();

  const updateAddon = async () => {
    setLoading(true);

    const email = Cookies.get("email");
    if (!email) return;
    const res = await fetch("/api/addon", {
      method: "POST",
      body: JSON.stringify({
        userId: userId,
        name: addon,
      }),
    });

    if (res.ok) {
      router.refresh();
      setShowAddOn(false);
      setAddon("");
      setLoading(false);
    } else {
      setLoading(false);
    }
  };

  const deleteAddon = async (id: string) => {
    const email = Cookies.get("email");
    if (!email) return;
    const res = await fetch("/api/addon", {
      method: "DELETE",
      body: JSON.stringify({
        id: id,
      }),
    });

    if (res.ok) {
      router.refresh();
    } else {
    }
  };

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

          {/* <p className="text-gray-600">${addon.price}</p> */}
          {!isPDFView && (
            <Tooltip showArrow placement="bottom" content="Delete">
              <Button
                className="text-lg"
                color="danger"
                size="sm"
                isIconOnly
                variant="light"
                onClick={() => deleteAddon(addon.id)}
              >
                <FiDelete />
              </Button>
            </Tooltip>
          )}
        </div>
      ))}

      {showAddOn && !isPDFView && (
        <div className="flex mt-2 items-center">
          <Input
            label="What else do you need?"
            variant="bordered"
            placeholder="Add an addon"
            radius="none"
            type="text"
            className="w-[300px]"
            value={addon}
            onChange={(e) => {
              setAddon(e.target.value);
            }}
          />

          <Button
            className="text-white ml-1 py-[27.5px]"
            color="primary"
            radius="none"
            onClick={updateAddon}
            isLoading={loading}
          >
            Update
          </Button>
        </div>
      )}

      {!isPDFView && (
        <Button
          className="text-blue-600 mt-2 w-fit"
          variant="light"
          radius="none"
          onClick={() => setShowAddOn(!showAddOn)}
          endContent={<FaPlus />}
        >
          Add an addon
        </Button>
      )}
    </div>
  );
}

export default TripAddons;
