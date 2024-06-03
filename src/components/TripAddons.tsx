"use client";

import { Button, Input, Select, SelectItem, Tooltip } from "@nextui-org/react";
import { TripAddOn } from "@prisma/client";
import { useRouter } from "next-nprogress-bar";
import React from "react";
import { FaPlus } from "react-icons/fa6";
import { FiDelete } from "react-icons/fi";
import Cookies from "js-cookie";
import Link from "next/link";
import { add } from "date-fns";

function TripAddons({
  tripAddons,
  userId,
  isPDFView,
  allTripAddons,
  isOnSite,
}: {
  tripAddons: TripAddOn[] | undefined;
  userId: string | undefined;
  isPDFView?: boolean;
  allTripAddons?: TripAddOn[] | undefined;
  isOnSite?: boolean;
}) {
  const [addon, setAddon] = React.useState<any>(new Set([]));
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
        userId,
        id: addon.anchorKey,
        isOnSite,
      }),
    });

    if (res.ok) {
      router.refresh();
      setShowAddOn(false);
      setAddon(new Set([]));
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
        id,
        userId,
        isOnSite,
      }),
    });

    if (res.ok) {
      router.refresh();
    } else {
    }
  };

  const [isOpen, setIsOpen] = React.useState(false);

  // get allTripAddons except the ones already in tripAddons
  const tripAddonsIds = tripAddons?.map((addon) => addon.id);

  const filteredAddons = allTripAddons?.filter(
    (addon) => !tripAddonsIds?.includes(addon.id)
  );

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

          <div className="flex items-center gap-1">
            {addon.price && !isOnSite ? (
              <p className="text-gray-600">${addon.price}</p>
            ) : null}
            {isOnSite && !isPDFView && addon.link && (
              <Link href={addon.link} target="_blank">
                <Button
                  className="text-white text-sm"
                  color="primary"
                  size="sm"
                  radius="none"
                  onClick={() => {}}
                >
                  Book now - ${addon.price ? addon.price : 0}
                </Button>
              </Link>
            )}
            {isOnSite && !isPDFView && !addon.link && (
              <p className="text-gray-600">${addon.price ? addon.price : 0}</p>
            )}
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
        </div>
      ))}

      {!isPDFView && (
        <div className="flex mt-2 items-center">
          {/* <Input
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
          /> */}

          {tripAddons && (
            <Select
              label="Addons"
              variant="bordered"
              placeholder="Select an addon"
              selectedKeys={addon}
              className="max-w-60"
              classNames={{
                popoverContent: "w-fit",
              }}
              radius="none"
              onSelectionChange={(e: any) => {
                setAddon(e);
              }}
              items={filteredAddons}
              renderValue={(items) => {
                return items.map((item) => (
                  <span key={item.key} className="">
                    {item.data?.name}
                  </span>
                ));
              }}
            >
              {(item) => (
                <SelectItem
                  className="w-[450px]"
                  key={item.id}
                  textValue={item.name}
                >
                  <div className="flex items-center w-full justify-between">
                    <span
                      className={
                        "text-ellipsis overflow-hidden " +
                        (item.price ? "w-[80%]" : "w-full")
                      }
                    >
                      {item.name}
                    </span>
                    {item.price && (
                      <span className="self-end">${item.price}</span>
                    )}
                  </div>
                </SelectItem>
              )}
            </Select>
          )}

          <Button
            className="text-white ml-1 py-[27.5px]"
            color={addon.size === 0 ? "default" : "primary"}
            radius="none"
            onClick={updateAddon}
            isLoading={loading}
            disabled={addon.size === 0}
          >
            Update
          </Button>
        </div>
      )}
    </div>
  );
}

export default TripAddons;
