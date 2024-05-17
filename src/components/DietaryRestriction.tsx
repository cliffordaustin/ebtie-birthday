"use client";

import { Button, Input, Tooltip } from "@nextui-org/react";
import { DietryRestriction } from "@prisma/client";
import React from "react";
import { FaPlus } from "react-icons/fa6";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { MdDelete } from "react-icons/md";
import { FiDelete } from "react-icons/fi";

function DietaryRestriction({
  dietaryRestrictions,
  userId,
  isPDFView,
}: {
  dietaryRestrictions: DietryRestriction[] | undefined;
  userId: string | undefined;
  isPDFView?: boolean;
}) {
  const [dietaryRestriction, setDietaryRestriction] = React.useState("");
  const [showDietaryRestriction, setShowDietaryRestriction] =
    React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const router = useRouter();

  const updateDietaryRestriction = async () => {
    setLoading(true);

    const email = Cookies.get("email");
    if (!email) return;
    const res = await fetch("/api/dietary-restriction", {
      method: "POST",
      body: JSON.stringify({
        userId: userId,
        name: dietaryRestriction,
      }),
    });

    if (res.ok) {
      router.refresh();
      setShowDietaryRestriction(false);
      setDietaryRestriction("");
      setLoading(false);
    } else {
      setLoading(false);
    }
  };

  const deleteDietaryRestriction = async (id: string) => {
    const email = Cookies.get("email");
    if (!email) return;
    const res = await fetch("/api/dietary-restriction", {
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
      {dietaryRestrictions?.map((dietaryRestriction) => (
        <div
          className="flex items-center justify-between text-sm"
          key={dietaryRestriction.id}
        >
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-gray-600"></div>
            <p className="text-gray-600">{dietaryRestriction.name}</p>
          </div>
          {!isPDFView && (
            <Tooltip showArrow placement="bottom" content="Delete">
              <Button
                className="text-lg"
                color="danger"
                size="sm"
                isIconOnly
                variant="light"
                onClick={() => deleteDietaryRestriction(dietaryRestriction.id)}
              >
                <FiDelete />
              </Button>
            </Tooltip>
          )}
        </div>
      ))}

      {showDietaryRestriction && !isPDFView && (
        <div className="flex mt-2 items-center">
          <Input
            label="Add dietary restriction"
            variant="bordered"
            placeholder="Add dietary restriction"
            radius="none"
            type="text"
            className="w-[300px]"
            value={dietaryRestriction}
            onChange={(e) => {
              setDietaryRestriction(e.target.value);
            }}
          />

          <Button
            className="text-white ml-1 py-[27.5px]"
            color="primary"
            radius="none"
            onClick={updateDietaryRestriction}
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
          onClick={() => setShowDietaryRestriction(!showDietaryRestriction)}
          endContent={<FaPlus />}
        >
          Add dietary restriction
        </Button>
      )}
    </div>
  );
}

export default DietaryRestriction;
