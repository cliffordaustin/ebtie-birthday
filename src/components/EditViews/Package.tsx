"use client";

import {
  Button,
  Card,
  CardHeader,
  Divider,
  Image,
  Select,
  SelectItem,
  Textarea,
} from "@nextui-org/react";
import { Package } from "@prisma/client";
import { usePathname, useSearchParams } from "next/navigation";
import React, { useCallback } from "react";
import parse from "html-react-parser";
import Cookies from "js-cookie";
import { useRouter } from "next-nprogress-bar";

function EditPackage({ dbPackages }: { dbPackages: Package[] }) {
  const [value, setValue] = React.useState<any>(new Set([]));

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [loading, setLoading] = React.useState(false);
  const [othersLoading, setOthersLoading] = React.useState(false);

  const updatePackage = async () => {
    setLoading(true);

    const email = Cookies.get("email");
    const packageId = searchParams.get("packageId");
    if (!email || !packageId) return;
    const res = await fetch("/api/packages", {
      method: "POST",
      body: JSON.stringify({
        email: email.toString(),
        packageId: packageId.toString(),
      }),
    });

    if (res.ok) {
      router.refresh();
      setLoading(false);
    } else {
      setLoading(false);
    }
  };

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  const [packages, setPackages] = React.useState<Package[]>(dbPackages);

  const [selectedPackage, setSelectedPackage] =
    React.useState<Package | null>();

  React.useEffect(() => {
    if (searchParams.has("packageId")) {
      const packageId = searchParams.get("packageId");

      const selectedPackage = packages.find((item) => item.id === packageId);

      setSelectedPackage(selectedPackage);
    }
  }, [searchParams, packages]);

  React.useEffect(() => {
    setPackages([
      ...packages,
      {
        id: "others",
        name: "Others",
        price: 0,
        description: "",
        imageUrl: "",
        availableVolume: 0,
      },
    ]);
  }, []);

  const [userPackage, setUserPackage] = React.useState("");

  const updatePackageToOthers = async () => {
    setOthersLoading(true);

    const email = Cookies.get("email");
    if (!email) return;

    const message = `Email:${email}\nTrip Plan: ${userPackage}`;

    try {
      await fetch("/api/packages", {
        method: "POST",
        body: JSON.stringify({
          email: email.toString(),
          packageId: "others",
          userPackage: userPackage,
        }),
      });

      await fetch("/api/contact-us", {
        method: "POST",
        body: JSON.stringify({
          message,
          to: "+233555894688",
        }),
      });

      router.refresh();
    } catch (error) {
      console.error(error);
    } finally {
      setOthersLoading(false);
    }
  };

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
            <SelectItem key={item.id} value={item.id}>
              {item.name}
            </SelectItem>
          ))}
        </Select>

        <Button
          radius="none"
          disabled={!searchParams.has("packageId")}
          isLoading={loading}
          onClick={updatePackage}
          color="primary"
          className="text-white px-4 !py-[27px]"
        >
          Update Package
        </Button>
      </div>

      {selectedPackage && selectedPackage.id !== "others" && (
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

      {selectedPackage && selectedPackage.id === "others" && (
        <div className="my-4 px-4">
          <Textarea
            label="Tell us what you want"
            placeholder="Enter your package detail here"
            rows={10}
            radius="none"
            value={userPackage}
            onChange={(e) => {
              setUserPackage(e.target.value);
            }}
            name="arrivalFlightInfo"
            disableAutosize
            className="w-full"
          />

          <div className="flex mt-3 justify-between items-center">
            <div></div>

            <Button
              isLoading={othersLoading}
              color="primary"
              type="submit"
              radius="none"
              className="text-white w-full"
              onClick={updatePackageToOthers}
            >
              Update
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

export default EditPackage;
