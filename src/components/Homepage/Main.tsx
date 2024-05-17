"use client";

import React, { useRef } from "react";
import HowItWorks from "./HowItWorks";
import Itinerary from "./Itinerary";
import { HoverEffect } from "../ui/card-hover-effect";
import { Package, Property } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";

function Main({
  packages,
}: {
  packages: ({
    properties: Property[];
  } & Package)[];
}) {
  const packageRef = useRef<HTMLDivElement>(null);
  return (
    <>
      <div className="h-[28rem] md:h-[34rem] flex w-full relative after:bg-black after:inset-0 after:absolute after:bg-opacity-80">
        <div className="absolute z-20 top-2 md:top-4 right-4 md:right-8">
          <Link href={`/user-profile`}>
            <button className="px-8 py-2 backdrop-blur-sm border bg-yellow-300/10 border-yellow-500/20 text-white mx-auto text-center relative mt-4">
              <span>View your profile</span>
              <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-yellow-500 to-transparent" />
            </button>
          </Link>
        </div>

        <div className="w-1/3 h-full relative">
          <Image
            src="/homepage/image2.jpg"
            layout="fill"
            objectFit="cover"
            alt="hero"
          />
        </div>
        <div className="w-1/3 h-full relative">
          <Image
            src="/homepage/image3.jpg"
            layout="fill"
            objectFit="cover"
            alt="hero"
          />
        </div>
        <div className="w-1/3 h-full relative">
          <Image
            src="/homepage/image1.jpg"
            layout="fill"
            objectFit="cover"
            alt="hero"
          />
        </div>

        <div className="z-40 absolute bottom-24 md:bottom-32 left-2/4 -translate-x-2/4 flex flex-col justify-center items-center w-full">
          <p className="font-bold text-5xl md:text-6xl lg:text-8xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
            Ebitie&apos;s Birthday Trip.
          </p>
          <button
            onClick={() => {
              packageRef.current?.scrollIntoView({ behavior: "smooth" });
            }}
            className="px-8 py-2 backdrop-blur-sm border bg-yellow-300/10 border-yellow-500/20 text-white mx-auto text-center relative mt-4"
          >
            <span>Select a package →</span>
            <div className="absolute inset-x-0 h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-yellow-500 to-transparent" />
          </button>
        </div>
      </div>

      <div className="max-w-[1300px] w-full mx-auto">
        <div className="my-6 px-4 md:px-6">
          <HowItWorks packageRef={packageRef} />
        </div>

        <div className="my-6 px-4 md:px-6 w-full">
          <Itinerary />
        </div>

        <div className="p-2 md:p-8 flex flex-col items-center">
          <h1 className="text-center font-bold text-2xl relative after:absolute after:bg-[#fca311] after:w-full after:h-[7px] after:z-0 after:bottom-0 after:left-0 after:right-0">
            Select a Package to Continue
          </h1>
          <HoverEffect packageRef={packageRef} items={packages} />
        </div>
      </div>
    </>
  );
}

export default Main;
