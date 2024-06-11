"use client";

import { cn } from "@/utils/cn";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { Package, Property, User, UserPackage } from "@prisma/client";
import { Card } from "./card";
import { FaUser } from "react-icons/fa6";
import { HiUsers } from "react-icons/hi";
import { FaUsers } from "react-icons/fa6";

import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Divider,
} from "@nextui-org/react";

import {
  ScrollShadow,
  Card as NextUiCard,
  CardFooter,
} from "@nextui-org/react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import parse from "html-react-parser";

export const HoverEffect = ({
  items,
  packageRef,
  className,
}: {
  items: ({
    properties: Property[];
    User: User[];
    UserPackage: UserPackage[];
  } & Package)[];
  packageRef: React.RefObject<HTMLDivElement>;
  className?: string;
}) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [selectedPackage, setSelectedPackage] = useState<
    (Package & ({ properties: Property[] } & Package)) | null | undefined
  >(null);

  const numberOfPackages = (
    item: {
      UserPackage: UserPackage[];
      properties: Property[];
      User: User[];
    } & Package
  ): number => {
    return item.UserPackage.reduce((acc, item) => acc + item.selectedNumber, 0);
  };

  return (
    <div
      ref={packageRef}
      className={cn(
        "flex w-full flex-wrap mt-4 justify-center lg:justify-start",
        className
      )}
    >
      {items.map((item, idx) => (
        <div
          key={item.id}
          className="w-full sm:w-[48%] lg:w-1/3 relative group block p-2 h-full"
        >
          <Card item={item}>
            {item.availableVolume - numberOfPackages(item) > 0 && (
              <p className="text-sm text-gray-500">
                {item.availableVolume - numberOfPackages(item)}{" "}
                {item.availableVolume - numberOfPackages(item) > 1
                  ? "slots"
                  : "slot"}{" "}
                left
              </p>
            )}

            {item.availableVolume - numberOfPackages(item) < 1 && (
              <p className="text-sm text-gray-500">No available slots left</p>
            )}
            <CardTitle>{item.name}</CardTitle>
            <h1 className="my-4 text-2xl font-extrabold">
              ${item.price.toLocaleString()}
            </h1>
            <div className="my-3">
              {item.availableVolume - numberOfPackages(item) > 0 && (
                <Button
                  color="primary"
                  radius="none"
                  className="w-full text-white"
                  onClick={() => {
                    setSelectedPackage(item);
                    onOpen();
                  }}
                >
                  See more
                </Button>
              )}

              {item.availableVolume - numberOfPackages(item) < 1 && (
                <Button radius="none" className="w-full text-gray-800" disabled>
                  Sold out
                </Button>
              )}
            </div>
            <div className="flex flex-col">
              <h1 className="text-sm font-bold">What&apos;s included?</h1>

              <div className="mt-4 flex flex-col gap-2">
                {item.properties.map((property) => (
                  <div
                    key={property.id}
                    className="flex gap-1.5 items-center text-sm"
                  >
                    <div className="flex items-center gap-1">
                      <p>
                        <span className="font-semibold">{property.name}</span> -{" "}
                        <span className="">{property.room}</span>
                      </p>

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
          </Card>
        </div>
      ))}

      <Modal
        backdrop="opaque"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        classNames={{
          backdrop:
            "bg-gradient-to-t from-zinc-900 to-zinc-900/10 backdrop-opacity-20",
        }}
        size="5xl"
        radius="none"
        scrollBehavior="inside"
        closeButton={
          <Button
            isIconOnly
            size="sm"
            variant="light"
            style={{
              zIndex: 20,
            }}
            onClick={onOpenChange}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </Button>
        }
      >
        <ModalContent className="h-[550px]">
          {(onClose) => (
            <ModalBody className="p-0 h-full">
              <div className="flex flex-col md:flex-row w-full h-full">
                <NextUiCard
                  radius="none"
                  className="border-none after:bg-black after:inset-0 after:absolute after:bg-opacity-30 w-full md:w-1/2 h-[100%] sticky left-0 !top-0 bottom-0"
                >
                  <Swiper
                    centeredSlides={true}
                    modules={[Navigation]}
                    slidesPerView={1}
                    navigation
                    className="h-full w-full"
                  >
                    {selectedPackage?.imageUrls?.map((imageUrl, index) => (
                      <SwiperSlide key={index}>
                        <Image
                          src={imageUrl}
                          layout="fill"
                          objectFit="cover"
                          alt=""
                        />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                  {/* {item?.imageUrl && (
                    <Image
                      alt=""
                      src={item.imageUrl}
                      layout="fill"
                      className=""
                      objectFit="cover"
                    />
                  )} */}

                  <CardFooter className="hidden md:flex bg-white/90 px-8 justify-between border-white/20 border-1 overflow-hidden py-1 absolute rounded-large bottom-3 w-[calc(100%_-_30px)] left-2/4 -translate-x-2/4 shadow-small ml-1 z-10">
                    <p className="text-sm font-bold text-slate-800/80">
                      ${selectedPackage?.price.toLocaleString()}
                    </p>
                    <Link
                      href={`/user-profile?edit=package&packageId=${selectedPackage?.id}`}
                      target="_blank"
                    >
                      <Button
                        className="text-sm font-medium text-white bg-black/80"
                        variant="flat"
                        color="default"
                        radius="md"
                        size="sm"
                      >
                        Add package
                      </Button>
                    </Link>
                  </CardFooter>
                </NextUiCard>
                <ScrollShadow className="w-full md:w-1/2 p-6">
                  <div className="overflow-y-scroll">
                    <h1 className="text-3xl font-extrabold mb-5">
                      {selectedPackage?.name}
                    </h1>
                    <div className="mt-4 flex flex-col gap-2">
                      {selectedPackage?.properties.map((property) => (
                        <div
                          key={property.id}
                          className="flex gap-1.5 items-center text-sm"
                        >
                          <div className="flex items-center gap-1">
                            <p>
                              <span className="font-semibold">
                                {property.name}
                              </span>{" "}
                              - <span className="">{property.room}</span>
                            </p>

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

                    <Divider className="my-4" />
                    <div className="px-4 mb-8 text-sm leading-6">
                      {selectedPackage?.description &&
                        parse(selectedPackage.description)}
                    </div>
                  </div>
                </ScrollShadow>

                <div className="flex items-center md:hidden bg-gray-100 px-8 justify-between border-white/20 border-1 overflow-hidden py-1 absolute rounded-large bottom-3 w-[calc(100%_-_30px)] left-2/4 -translate-x-2/4 shadow-small ml-1 z-10">
                  <p className="text-sm font-bold text-slate-800/80">
                    ${selectedPackage?.price.toLocaleString()}
                  </p>
                  <Link
                    href={`/user-profile?edit=package&packageId=${selectedPackage?.id}`}
                    target="_blank"
                  >
                    <Button
                      className="text-sm font-medium text-white bg-black/80"
                      variant="flat"
                      color="default"
                      radius="md"
                      size="sm"
                    >
                      Add package
                    </Button>
                  </Link>
                </div>
              </div>
            </ModalBody>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
};

export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4 className={cn("text-zinc-700 font-bold tracking-wide mt-1", className)}>
      {children}
    </h4>
  );
};
export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        "mt-4 text-zinc-600 tracking-wide leading-relaxed text-sm",
        className
      )}
    >
      {children}
    </p>
  );
};
