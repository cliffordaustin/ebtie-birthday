"use client";

import { cn } from "@/utils/cn";
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
import { Package, Property } from "@prisma/client";
import {
  ScrollShadow,
  Card as NextUiCard,
  CardFooter,
} from "@nextui-org/react";
import Image from "next/image";
import parse from "html-react-parser";
import Link from "next/link";
import { FaUser, FaUsers } from "react-icons/fa6";
import { HiUsers } from "react-icons/hi";
export const Card = ({
  className,
  children,
  item,
  actionText,
}: {
  className?: string;
  children?: React.ReactNode;
  item: (Package & ({ properties: Property[] } & Package)) | null | undefined;
  actionText?: boolean;
}) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <>
      {!actionText && (
        <div
          className={cn(
            "h-full w-full shadow p-2 overflow-hidden bg-white border border-transparent dark:border-white/[0.2] group-hover:border-slate-300 relative z-20",
            className
          )}
          onClick={onOpen}
        >
          <div className="relative z-50">
            <div className="p-4">{children}</div>
          </div>
        </div>
      )}

      {actionText && (
        <p
          onClick={onOpen}
          className="text-blue-600 hover:underline cursor-pointer"
        >
          View more
        </p>
      )}

      <Modal
        backdrop="opaque"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        classNames={{
          backdrop:
            "bg-gradient-to-t from-zinc-900 to-zinc-900/10 backdrop-opacity-20",
        }}
        size="5xl"
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
              <div className="flex w-full h-full">
                <NextUiCard
                  radius="none"
                  className="border-none rounded-tl-xl rounded-bl-xl after:bg-black after:inset-0 after:absolute after:bg-opacity-30 w-1/2 h-[100%] sticky left-0 !top-0 bottom-0"
                >
                  {item?.imageUrl && (
                    <Image
                      alt=""
                      src={item.imageUrl}
                      layout="fill"
                      className=""
                      objectFit="cover"
                    />
                  )}
                  {!actionText && (
                    <CardFooter className="flex bg-white/90 px-8 justify-between border-white/20 border-1 overflow-hidden py-1 absolute rounded-large bottom-3 w-[calc(100%_-_30px)] left-2/4 -translate-x-2/4 shadow-small ml-1 z-10">
                      <p className="text-sm font-bold text-slate-800/80">
                        ${item?.price.toLocaleString()}
                      </p>
                      <Link href={`/verify-user-profile`}>
                        <Button
                          className="text-sm font-medium text-white bg-black/80"
                          variant="flat"
                          color="default"
                          radius="md"
                          size="sm"
                        >
                          Select this package
                        </Button>
                      </Link>
                    </CardFooter>
                  )}
                </NextUiCard>
                <ScrollShadow className="w-1/2 p-6">
                  <div className="overflow-y-scroll">
                    <h1 className="text-3xl font-extrabold mb-5">
                      {item?.name}
                    </h1>
                    <div className="mt-4 flex flex-col gap-2">
                      {item?.properties.map((property) => (
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
                      {item?.description && parse(item.description)}
                    </div>
                  </div>
                </ScrollShadow>
              </div>
            </ModalBody>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};
