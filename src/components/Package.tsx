"use client";

import {
  Package,
  Property,
  User,
  UserPackage as UserPackageType,
} from "@prisma/client";
import React, { useCallback } from "react";
import parse from "html-react-parser";
import {
  Accordion,
  AccordionItem,
  Button,
  Divider,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  Textarea,
  Tooltip,
  useDisclosure,
} from "@nextui-org/react";
import { Card } from "./ui/card";
import { RiEdit2Line } from "react-icons/ri";
import { usePathname, useSearchParams } from "next/navigation";
import { FaUser, FaUsers } from "react-icons/fa6";
import { HiUsers } from "react-icons/hi";
import { useRouter } from "next-nprogress-bar";
import { FiDelete } from "react-icons/fi";
import Cookies from "js-cookie";
import EditPackage from "./EditViews/Package";
import RequestedTrip from "./EditViews/RequestedTrip";
import { IoClose } from "react-icons/io5";

function UserPackage({
  packageType,
  isPDFView,
  others,
  userId,
  packageDescription,
  dbPackages,
}: {
  packageType:
    | ({ package: { properties: Property[] } & Package } & UserPackageType)[]
    | null
    | undefined;
  isPDFView?: boolean;
  others?: string | null;
  userId: string | undefined;
  packageDescription: string | undefined | null;
  dbPackages?: ({ User: User[] } & { UserPackage: UserPackageType[] } & {
    properties: Property[];
  } & Package)[];
}) {
  const [displayParseHTML, setDisplayParseHTML] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

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

  async function removePackage(packageId: string) {
    const email = Cookies.get("email");
    if (!email) return;
    const res = await fetch("/api/packages", {
      method: "DELETE",
      body: JSON.stringify({
        userId,
        packageId,
      }),
    });

    if (res.ok) {
      router.refresh();
    } else {
    }
  }

  const [doubleRoomDescription, setDoubleRoomDescription] = React.useState(
    packageDescription || ""
  );

  const updatePackageDescription = async () => {
    setLoading(true);
    const email = Cookies.get("email");
    if (!email) {
      setLoading(false);
      return;
    }
    const res = await fetch("/api/package-description", {
      method: "POST",
      body: JSON.stringify({
        email,
        doubleRoomDescription,
      }),
    });

    if (res.ok) {
      setLoading(false);
      router.refresh();
    } else {
      setLoading(false);
    }
  };

  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const itemClasses = {
    base: "py-0 w-full",
    title: "font-normal text-medium",
    trigger:
      "py-0 data-[hover=true]:bg-default-50 rounded-lg h-14 flex items-center",
    indicator: "text-medium",
    content: "text-small",
  };

  const {
    isOpen: isOpenRequestedTripInfo,
    onOpen: onOpenRequestedTripInfo,
    onOpenChange: onOpenChangeRequestedTripInfo,
  } = useDisclosure();

  return (
    <div className="flex flex-col gap-3 px-2 py-2">
      <div className="flex items-center justify-between">
        <h1 className="font-semibold text-gray-800 text-xl">Package</h1>

        {!isPDFView && (
          <div className="flex gap-1 items-center">
            <Button
              endContent={
                <RiEdit2Line
                  size={20}
                  className="cursor-pointer text-blue-500"
                />
              }
              onClick={() => {
                router.replace(
                  pathname + "?" + createQueryString("edit", "package")
                );
              }}
              radius="none"
              variant="light"
              className="hover:!bg-gray-100 hidden md:flex"
            >
              Add a package
            </Button>

            <Button
              endContent={
                <RiEdit2Line
                  size={20}
                  className="cursor-pointer text-blue-500"
                />
              }
              onClick={() => {
                router.replace(
                  pathname + "?" + createQueryString("edit", "package")
                );
                onOpen();
              }}
              radius="none"
              variant="light"
              className="hover:!bg-gray-100 md:hidden"
            >
              Choose a package
            </Button>
          </div>
        )}

        {isPDFView && <div></div>}
      </div>

      {isOpen && (
        <div
          onClick={() => {
            onOpenChange();
          }}
          className="fixed inset-0 bg-black bg-opacity-20 z-[99]"
        >
          <div
            onClick={(e) => {
              e.stopPropagation();
            }}
            className="absolute overflow-y-scroll bottom-1 p-4 bg-white -translate-x-0 w-full z-20 max-h-[500px]"
          >
            <h1 className="font-bold text-xl my-3">Update package</h1>

            {dbPackages && (
              <EditPackage
                others={others}
                dbPackages={dbPackages}
                userId={userId}
              ></EditPackage>
            )}

            <div
              onClick={() => {
                onOpenChange();
              }}
              className="cursor-pointer w-[30px] h-[30px] rounded-full flex items-center justify-center bg-gray-100 absolute top-2 right-2"
            >
              <IoClose></IoClose>
            </div>
          </div>
        </div>
      )}

      {/* <Modal
        radius="none"
        isOpen={isOpen}
        size="5xl"
        // scrollBehavior="outside"
        onOpenChange={onOpenChange}
      >
        <ModalContent className="h-[500px] overflow-y-scroll">
          {(onClose) => (
            <>
              <ModalHeader className="flex border-b flex-col gap-1">
                Update package
              </ModalHeader>
              <ModalBody className="!p-0">
                {dbPackages && (
                  <EditPackage
                    others={others}
                    dbPackages={dbPackages}
                    userId={userId}
                  ></EditPackage>
                )}
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal> */}

      {(!packageType || packageType.length === 0) && (
        <div className="flex justify-between items-center">
          <p className="text-gray-500 text-sm text-center">
            No package created yet
          </p>
        </div>
      )}

      {packageType && !isPDFView && (
        <Accordion
          itemClasses={itemClasses}
          defaultExpandedKeys={["0"]}
          className="flex flex-col gap-1 w-full rounded-none px-0"
          variant="light"
        >
          {packageType.map((packageType, index) => (
            <AccordionItem
              key={`${index}`}
              aria-label={packageType.package.name}
              title={
                <div>
                  {packageType.package.name}{" "}
                  {packageType.selectedNumber > 1 && (
                    <span className="text-gray-500 text-sm ml-1">
                      {" "}
                      x
                      <span className="text-base text-gray-500">
                        {packageType.selectedNumber}
                      </span>
                    </span>
                  )}
                </div>
              }
              subtitle={`$${packageType.package.price.toLocaleString()}`}
              classNames={{
                title: "font-medium text-base",
                subtitle: "text-gray-500",
              }}
              indicator={
                packageType && (
                  <Tooltip
                    showArrow
                    placement="bottom"
                    content="Remove this package"
                  >
                    <div
                      className="text-lg text-pink-500 p-2 rounded-md hover:bg-pink-500/15"
                      onClick={() => removePackage(packageType.id)}
                    >
                      <FiDelete />
                    </div>
                  </Tooltip>
                )
              }
              disableIndicatorAnimation
            >
              <div className="flex flex-col gap-1">
                <h1 className="font-bold mb-2">Package Description</h1>

                {displayParseHTML && (
                  <div className="flex flex-col gap-1">
                    {!isPDFView && (
                      <p
                        className={"!font-normal text-gray-500 line-clamp-[12]"}
                      >
                        {packageType?.package.description &&
                          parse(packageType?.package.description)}
                      </p>
                    )}

                    {isPDFView && (
                      <p className={"!font-normal text-gray-500"}>
                        {packageType?.package.description &&
                          parse(packageType?.package.description)}
                      </p>
                    )}

                    {!isPDFView && (
                      <Card actionText={true} item={packageType.package} />
                    )}
                  </div>
                )}
              </div>

              <Divider className="my-3" />

              <div className="flex flex-col gap-1">
                <h1 className="font-bold mb-2">Package Properties</h1>

                {!isPDFView && (
                  <div className="my-2">
                    <Textarea
                      radius="none"
                      label="If sharing please indicate whether you want split beds or a single bed to share"
                      placeholder="Enter your description here"
                      rows={6}
                      variant="bordered"
                      disableAutosize
                      className="w-full"
                      value={doubleRoomDescription}
                      onChange={(e) => {
                        setDoubleRoomDescription(e.target.value);
                      }}
                    />
                  </div>
                )}

                {!isPDFView && (
                  <div className="flex justify-between mb-2">
                    <div></div>

                    <Button
                      onClick={() => {
                        updatePackageDescription();
                      }}
                      radius="none"
                      className="text-white"
                      isLoading={loading}
                      disabled={
                        loading ||
                        !doubleRoomDescription ||
                        doubleRoomDescription === packageDescription
                      }
                      color={
                        loading ||
                        !doubleRoomDescription ||
                        doubleRoomDescription === packageDescription
                          ? "default"
                          : "primary"
                      }
                    >
                      Update
                    </Button>
                  </div>
                )}

                <div className="flex flex-col gap-2">
                  {packageType?.package.properties.map((property) => (
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

                {isPDFView && packageDescription && (
                  <p className="mt-2 text-sm text-gray-600">
                    <span className="font-bold">Extra note: </span>
                    <span>{doubleRoomDescription}</span>
                  </p>
                )}
              </div>
            </AccordionItem>
          ))}
        </Accordion>
      )}

      {isPDFView &&
        packageType &&
        packageType.map((packageType) => (
          <>
            <div className="flex justify-between mt-3 items-center">
              <h1 className="font-bold">Package Name</h1>

              <p className="text-gray-500">{packageType?.package.name}</p>
            </div>

            <div className="flex justify-between items-center">
              <h1 className="font-bold">Package Price</h1>

              <p className="text-gray-500">
                ${packageType?.package.price.toLocaleString()}
              </p>
            </div>

            <Divider className="my-3" />

            <div className="flex flex-col gap-1">
              <h1 className="font-bold mb-2">Package Description</h1>

              {displayParseHTML && (
                <div className="flex flex-col gap-1">
                  {!isPDFView && (
                    <p className={"!font-normal text-gray-500 line-clamp-[12]"}>
                      {packageType?.package.description &&
                        parse(packageType?.package.description)}
                    </p>
                  )}

                  {isPDFView && (
                    <p className={"!font-normal text-gray-500"}>
                      {packageType?.package.description &&
                        parse(packageType?.package.description)}
                    </p>
                  )}

                  {!isPDFView && (
                    <Card actionText={true} item={packageType.package} />
                  )}
                </div>
              )}
            </div>

            <Divider className="my-3" />

            <div className="flex flex-col gap-1">
              <h1 className="font-bold mb-2">Package Properties</h1>

              {!isPDFView && (
                <div className="my-2">
                  <Textarea
                    radius="none"
                    label="If sharing please indicate whether you want split beds or a single bed to share"
                    placeholder="Enter your description here"
                    rows={6}
                    variant="bordered"
                    disableAutosize
                    className="w-full"
                    value={doubleRoomDescription}
                    onChange={(e) => {
                      setDoubleRoomDescription(e.target.value);
                    }}
                  />
                </div>
              )}

              {!isPDFView && (
                <div className="flex justify-between mb-2">
                  <div></div>

                  <Button
                    onClick={() => {
                      updatePackageDescription();
                    }}
                    radius="none"
                    className="text-white"
                    isLoading={loading}
                    disabled={
                      loading ||
                      !doubleRoomDescription ||
                      doubleRoomDescription === packageDescription
                    }
                    color={
                      loading ||
                      !doubleRoomDescription ||
                      doubleRoomDescription === packageDescription
                        ? "default"
                        : "primary"
                    }
                  >
                    Update
                  </Button>
                </div>
              )}

              <div className="flex flex-col gap-2">
                {packageType?.package.properties.map((property) => (
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

              {isPDFView && packageDescription && (
                <p className="mt-2 text-sm text-gray-600">
                  <span className="font-bold">Extra note: </span>
                  <span>{doubleRoomDescription}</span>
                </p>
              )}
            </div>
          </>
        ))}

      {packageType && packageType.length > 0 && <Divider className="my-2" />}

      {others && (
        <div className="flex flex-col gap-4 text-base">
          <div className="flex items-center justify-between">
            <h1 className="font-bold">Your requested trip plan</h1>

            <Button
              onClick={() => {
                router.replace(
                  pathname + "?" + createQueryString("edit", "others")
                );
              }}
              radius="none"
              variant="light"
              className="hover:!bg-gray-100 hidden md:flex !px-0 md:!px-4 !min-w-fit"
              endContent={
                <RiEdit2Line
                  size={20}
                  className="cursor-pointer text-blue-500"
                ></RiEdit2Line>
              }
            >
              Edit
            </Button>

            <Button
              onClick={() => {
                onOpenRequestedTripInfo();
                router.replace(
                  pathname + "?" + createQueryString("edit", "others")
                );
              }}
              radius="none"
              variant="light"
              className="hover:!bg-gray-100 md:hidden !px-0 md:!px-4 !min-w-fit"
              endContent={
                <RiEdit2Line
                  size={20}
                  className="cursor-pointer text-blue-500"
                ></RiEdit2Line>
              }
            >
              Edit
            </Button>
          </div>

          <p className="text-gray-500 whitespace-pre-line">{others}</p>

          {isOpenRequestedTripInfo && (
            <div
              onClick={() => {
                onOpenChangeRequestedTripInfo();
              }}
              className="fixed inset-0 bg-black bg-opacity-20 z-20"
            >
              <div
                onClick={(e) => {
                  e.stopPropagation();
                }}
                className="absolute bottom-1 p-4 bg-white -translate-x-0 w-full z-20 h-[400px]"
              >
                <h1 className="font-bold text-xl my-3">
                  Update your requested trip plan
                </h1>
                <RequestedTrip info={others} />
                <div
                  onClick={() => {
                    onOpenChangeRequestedTripInfo();
                  }}
                  className="cursor-pointer w-[30px] h-[30px] rounded-full flex items-center justify-center bg-gray-100 absolute top-2 right-2"
                >
                  <IoClose></IoClose>
                </div>
              </div>
            </div>
          )}

          {/* <Modal
            isOpen={isOpenRequestedTripInfo}
            placement="bottom"
            onOpenChange={onOpenChangeRequestedTripInfo}
            radius="none"
          >
            <ModalContent>
              {(onClose) => (
                <>
                  <ModalHeader className="flex flex-col gap-1">
                    Update your requested trip plan
                  </ModalHeader>
                  <ModalBody>
                    <RequestedTrip info={others} />
                  </ModalBody>
                </>
              )}
            </ModalContent>
          </Modal> */}
        </div>
      )}
    </div>
  );
}

export default UserPackage;
