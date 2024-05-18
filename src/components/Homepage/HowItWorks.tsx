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

      <div className="flex flex-wrap items-center mt-4 gap-4 lg:gap-0 justify-between">
        {howItWorks.map((item, index) => (
          <div
            key={index}
            className="w-full md:w-[48%] lg:w-[32%] bg-white flex shadow flex-col justify-center items-center gap-3 p-8"
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
        {/* <Button
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
        <Link href={`/user-profile`}>
          <Button radius="none" color="primary" variant="bordered" size="lg">
            View your profile
          </Button>
        </Link> */}

        <p className="text-gray-700">
          Welcome to Ebitie’s Birthday Trip! This page outlines the different
          packages available to you. Please note that the packages are based on
          the level of the room in each property plus whether you’re sharing or
          in a single. The current packages are limited in number mainly because
          of Nomad hotel in Diani. The rooms in this property are fixed as you
          will be staying in their luxury villas which have 3 room types -
          standard, superior (with a terrace) and luxury (with a terrace and
          ocean view). Pick the package as it is, or feel free to reach out
          incase you’d like to change a room level which is only possible in
          Trademark and Enkewa. This page also contains your user profiles. You
          can access these by logging in with the email you used to respond to
          the initial trip questionnaire. Your user section will have all the
          information you’ve filled out so far. It will also include the payment
          instructions for your installments. If you’d like to pay by card, we
          will add your unique payment links to your profile based on the
          payment plan you chose. Looking forward to hosting you all!
        </p>
      </div>
    </div>
  );
}

export default HowItWorks;
