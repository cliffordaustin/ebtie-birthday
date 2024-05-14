"use client";

import {
  Button,
  Card,
  CardHeader,
  Divider,
  Image,
  Select,
  SelectItem,
} from "@nextui-org/react";
import { Package } from "@prisma/client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useCallback } from "react";
import parse from "html-react-parser";

function EditPackage({ packages }: { packages: Package[] }) {
  const [value, setValue] = React.useState<any>(new Set([]));

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

  const [selectedPackage, setSelectedPackage] =
    React.useState<Package | null>();

  React.useEffect(() => {
    if (searchParams.has("packageId")) {
      const packageId = searchParams.get("packageId");

      const selectedPackage = packages.find((item) => item.id === packageId);

      setSelectedPackage(selectedPackage);
    }
  }, [searchParams, packages]);

  return (
    <div className="flex flex-col relative">
      <div className="flex items-center justify-between px-3 mt-3">
        <h1 className="font-semibold text-gray-800 text-xl">Package</h1>
      </div>

      <div className="flex items-center gap-2 sticky left-0 top-0 border-b bottom-0 bg-white z-20 py-4 px-3">
        <Select
          label="Package"
          variant="bordered"
          placeholder="Select a package"
          selectedKeys={value}
          className="max-w-60"
          radius="none"
          onSelectionChange={(e: any) => {
            setValue(e);

            router.replace(
              pathname + "?" + createQueryString("packageId", e.anchorKey || "")
            );
          }}
        >
          {packages.map((item) => (
            <SelectItem
              //   onClick={(item) => {
              //     console.log("item", item);
              //   }}
              key={item.id}
              value={item.id}
            >
              {item.name}
            </SelectItem>
          ))}
        </Select>

        <Button
          radius="none"
          // size="lg"
          color="primary"
          className="text-white px-4 !py-[27px]"
        >
          Update Package
        </Button>
      </div>

      {selectedPackage && (
        <div className="mt-4">
          <Card
            radius="none"
            className="w-full h-[300px] border-none after:bg-black after:inset-0 after:absolute after:bg-opacity-30"
          >
            <CardHeader className="absolute z-10 bottom-1 flex-col !items-start">
              <p className="text-sm text-white/80 uppercase font-bold">
                ${selectedPackage.price.toLocaleString()}
              </p>
              <h4 className="text-white font-medium text-large">
                {selectedPackage.name}
              </h4>
            </CardHeader>
            {selectedPackage.imageUrl && (
              <Image
                removeWrapper
                alt=""
                radius="none"
                className="z-0 w-full h-full object-cover"
                src={selectedPackage.imageUrl}
              />
            )}
          </Card>

          <div className="mb-8 px-8 mt-6 text-sm leading-6">
            {selectedPackage?.description && parse(selectedPackage.description)}
          </div>
        </div>
      )}
    </div>
  );
}

export default EditPackage;
