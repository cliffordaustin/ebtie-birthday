"use client";

import { Package, Property } from "@prisma/client";
import React, { useCallback } from "react";
import parse from "html-react-parser";
import { Button, Divider, Tooltip } from "@nextui-org/react";
import { Card } from "./ui/card";
import { RiEdit2Line } from "react-icons/ri";
import { usePathname, useSearchParams } from "next/navigation";
import { FaUser, FaUsers } from "react-icons/fa6";
import { HiUsers } from "react-icons/hi";
import { useRouter } from "next-nprogress-bar";

function UserPackage({
  packageType,
  isPDFView,
  others,
}: {
  packageType: ({ properties: Property[] } & Package) | null | undefined;
  isPDFView?: boolean;
  others?: string | null;
}) {
  const [displayParseHTML, setDisplayParseHTML] = React.useState(false);

  React.useEffect(() => {
    setDisplayParseHTML(true);
  }, []);
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );
  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <h1 className="font-semibold text-gray-800 text-xl">Package</h1>

        {!isPDFView && (
          <Button
            endContent={
              <RiEdit2Line size={20} className="cursor-pointer text-blue-500" />
            }
            onClick={() => {
              router.replace(
                pathname + "?" + createQueryString("edit", "package")
              );
            }}
            radius="none"
            variant="light"
            className="hover:!bg-gray-100"
          >
            Choose a package
          </Button>
        )}

        {isPDFView && <div></div>}
      </div>

      {!packageType && !others && (
        <div className="flex justify-between items-center">
          <p className="text-gray-500 text-sm text-center mt-3">
            No package created yet
          </p>
        </div>
      )}

      {others && !packageType && (
        <div className="mt-4 flex flex-col gap-4 text-sm">
          <h1 className="font-bold">Your requested trip plan</h1>

          <p className="text-gray-500">{others}</p>
        </div>
      )}

      {packageType && (
        <>
          <div className="flex justify-between mt-3 items-center">
            <h1 className="font-bold">Package Name</h1>

            <p className="text-gray-500">{packageType?.name}</p>
          </div>

          <div className="flex justify-between items-center">
            <h1 className="font-bold">Package Price</h1>

            <p className="text-gray-500">
              ${packageType?.price.toLocaleString()}
            </p>
          </div>

          <Divider className="my-3" />

          <div className="flex flex-col gap-1">
            <h1 className="font-bold mb-2">Package Description</h1>

            {displayParseHTML && (
              <div className="flex flex-col gap-1">
                {!isPDFView && (
                  <p className={"!font-normal text-gray-500 line-clamp-[12]"}>
                    {packageType?.description &&
                      parse(packageType?.description)}
                  </p>
                )}

                {isPDFView && (
                  <p className={"!font-normal text-gray-500"}>
                    {packageType?.description &&
                      parse(packageType?.description)}
                  </p>
                )}

                {!isPDFView && <Card actionText={true} item={packageType} />}
              </div>
            )}
          </div>

          <Divider className="my-3" />

          <div className="flex flex-col gap-1">
            <h1 className="font-bold mb-2">Package Properties</h1>

            <div className="flex flex-col gap-2">
              {packageType?.properties.map((property) => (
                <div className="ml-1" key={property.id}>
                  <h1 className="font-medium">{property.name}</h1>

                  <div className="flex items-center gap-1">
                    <p className="text-gray-500">{property.room}</p>

                    {property.capacity === 3 ? (
                      <FaUsers />
                    ) : property.capacity === 2 ? (
                      <HiUsers />
                    ) : property.capacity === 4 ? (
                      <div className="flex">
                        <FaUser size={10} />
                        <FaUser size={10} />
                        <FaUser size={10} />
                        <FaUser size={10} />
                      </div>
                    ) : property.capacity === 5 ? (
                      <div className="flex">
                        <FaUser size={10} />
                        <FaUser size={10} />
                        <FaUser size={10} />
                        <FaUser size={10} />
                        <FaUser size={10} />
                      </div>
                    ) : (
                      <FaUser size={10} />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default UserPackage;
