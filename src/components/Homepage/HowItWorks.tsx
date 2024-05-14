import { Button } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function HowItWorks({
  packageRef,
}: {
  packageRef: React.RefObject<HTMLDivElement>;
}) {
  const howItWorks = [
    {
      heading: "Select a package",
      description:
        "Select from how curated packages what kind of package fits your needs best.",
      image: "/selection.svg",
    },

    {
      heading: "View your profile",
      description:
        "Enter your email to view/download your trip information. You can also make edits if you wish.",
      image: "/profile.svg",
    },

    {
      heading: "Make payment",
      description:
        "You can pay using credit cards, bank transfers or through a remittance application.",
      image: "/payments.svg",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="font-bold text-2xl relative after:absolute after:bg-[#fca311] after:w-full after:h-[7px] after:z-0 after:bottom-0 after:left-0 after:right-0">
        How It Works
      </h1>

      <div className="flex items-center gap-5 mt-4">
        {howItWorks.map((item, index) => (
          <div
            key={index}
            className="w-1/3 bg-white flex shadow flex-col justify-center items-center gap-3 p-8"
          >
            <div className="w-[100px] h-[100px] relative">
              <Image src={item.image} layout="fill" alt="" />
            </div>

            <div className="flex flex-col mt-2 items-center gap-2">
              <h1 className="font-medium text-lg">{item.heading}</h1>
              <p className="text-gray-600 text-sm text-center">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mx-auto mt-6 flex gap-3">
        <Button
          onClick={() => {
            packageRef.current?.scrollIntoView({ behavior: "smooth" });
          }}
          radius="none"
          color="primary"
          className="text-white"
          size="lg"
        >
          Select a package
        </Button>
        <Link href={`/verify-user-profile`}>
          <Button radius="none" color="primary" variant="bordered" size="lg">
            View your profile
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default HowItWorks;
