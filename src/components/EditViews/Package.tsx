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
import { Package, User } from "@prisma/client";
import { usePathname, useSearchParams } from "next/navigation";
import React, { useCallback } from "react";
import parse from "html-react-parser";
import Cookies from "js-cookie";
import { useRouter } from "next-nprogress-bar";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import toast, { Toaster } from "react-hot-toast";
import "swiper/css";
import "swiper/css/navigation";

function EditPackage({
  dbPackages,
}: {
  dbPackages: ({ User: User[] } & { userPackages: User[] } & Package)[];
}) {
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

    if (!email || !packageId) {
      setLoading(false);
      return;
    }

    const packageRes = await fetch(
      `/api/packages?packageId=${packageId.toString()}`,
      {
        method: "GET",
      }
    );

    if (packageRes.ok) {
      const {
        packageUnique,
      }: {
        packageUnique: { User: User[] } & { userPackages: User[] } & Package;
      } = await packageRes.json();

      if (packageUnique.userPackages.length === packageUnique.availableVolume) {
        toast.error("Sorry, Package is not available");
        setLoading(false);
        setValue(new Set([]));
        router.refresh();
        return;
      }
    }

    const res = await fetch("/api/packages", {
      method: "POST",
      body: JSON.stringify({
        email: email.toString(),
        packageId: packageId.toString(),
      }),
    });

    if (res.ok) {
      router.refresh();
      setValue(new Set([]));
      setLoading(false);
    } else {
      setValue(new Set([]));
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

  const [packages, setPackages] =
    React.useState<({ User: User[] } & { userPackages: User[] } & Package)[]>(
      dbPackages
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

  React.useEffect(() => {
    const filteredPackages = packages.filter(
      (item) => item.availableVolume - item.userPackages.length > 0
    );
    setPackages([
      ...filteredPackages,
      {
        id: "others",
        name: "Others",
        price: 0,
        description: "",
        imageUrl: "",
        availableVolume: 0,
        imageUrls: [],
        User: [],
        userPackages: [],
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
          to: "+254757629101",
        }),
      });

      router.refresh();
    } catch (error) {
      console.error(error);
      setOthersLoading(false);
    } finally {
      setOthersLoading(false);
    }
  };

  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="flex flex-col relative">
      <div className="items-center justify-between px-3 mt-3 md:flex hidden">
        <h1 className="font-semibold text-gray-800 text-xl">Package</h1>
      </div>

      <div className="flex items-center gap-2 sticky left-0 top-0 border-b bottom-0 bg-white z-20 py-4 px-3">
        <Select
          label="Package"
          variant="bordered"
          placeholder="Select a package"
          selectedKeys={value}
          classNames={{
            popoverContent: "w-fit",
          }}
          className="md:max-w-40 lg:max-w-60"
          radius="none"
          onSelectionChange={(e: any) => {
            setValue(e);

            router.replace(
              pathname + "?" + createQueryString("packageId", e.anchorKey || "")
            );
          }}
        >
          {packages.map((item) => (
            <SelectItem className="w-[250px]" key={item.id} value={item.id}>
              {item.name}
            </SelectItem>
          ))}
        </Select>

        <Button
          radius="none"
          disabled={
            !searchParams.has("packageId") ||
            searchParams.get("packageId") === ""
          }
          isLoading={loading}
          onClick={updatePackage}
          color={
            !searchParams.has("packageId") ||
            searchParams.get("packageId") === ""
              ? "default"
              : "primary"
          }
          className="text-white px-4 !py-[27px]"
        >
          <span className="hidden md:block">Update Package</span>
          <span className="md:hidden">Update</span>
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
            <Swiper
              centeredSlides={true}
              modules={[Navigation]}
              slidesPerView={1}
              navigation
              className="h-full w-full"
            >
              {selectedPackage.imageUrls?.map((imageUrl, index) => (
                <SwiperSlide key={index}>
                  <Image
                    removeWrapper
                    src={imageUrl}
                    alt=""
                    radius="none"
                    className="z-0 w-full h-full object-cover"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
            {/* {selectedPackage.imageUrl && (
              <Image
                removeWrapper
                alt=""
                radius="none"
                className="z-0 w-full h-full object-cover"
                src={selectedPackage.imageUrl}
              />
            )} */}
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

      <Toaster />
    </div>
  );
}

export default EditPackage;
