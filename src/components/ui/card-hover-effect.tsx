"use client";

import { cn } from "@/utils/cn";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { Package, Property } from "@prisma/client";
import { Card } from "./card";
import { Button } from "@nextui-org/react";
import { FaUser } from "react-icons/fa6";
import { HiUsers } from "react-icons/hi";
import { FaUsers } from "react-icons/fa6";

export const HoverEffect = ({
  items,
  packageRef,
  className,
}: {
  items: ({
    properties: Property[];
  } & Package)[];
  packageRef: React.RefObject<HTMLDivElement>;
  className?: string;
}) => {
  return (
    <div
      ref={packageRef}
      className={cn("flex w-full flex-wrap justify-center mt-4", className)}
    >
      {items.map((item, idx) => (
        <div
          key={item.id}
          className="w-full sm:w-[48%] lg:w-1/3 relative group cursor-pointer block p-2 h-full"
        >
          <Card item={item}>
            <p className="text-sm text-gray-500">
              {item.availableVolume}{" "}
              {item.availableVolume > 1 ? "slots" : "slot"} left
            </p>
            <CardTitle>{item.name}</CardTitle>
            <h1 className="my-4 text-2xl font-extrabold">
              ${item.price.toLocaleString()}
            </h1>
            <div className="my-3">
              <Link href={`/user-profile?edit=package&packageId=${item.id}`}>
                <Button
                  color="primary"
                  radius="none"
                  className="w-full text-white"
                >
                  Select package
                </Button>
              </Link>
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
