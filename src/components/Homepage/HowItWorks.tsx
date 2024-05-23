import { Button } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import ContactUs from "../ContactUs";

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
    <div className="flex flex-col justify-center">
      <span className="font-bold text-3xl md:text-4xl lg:text-5xl text-center">
        Welcome to Ebitie’s Birthday Trip!
      </span>

      <div className="text-base md:text-lg mt-6 md:px-6">
        <p className="mb-2">This page has 3 functions:</p>

        <ul className="list-decimal ml-8 md:ml-12">
          <li>
            You can see the overall <span className="font-bold">itinerary</span>
            .
          </li>

          <li>
            You can see the available{" "}
            <span className="font-bold">packages</span> which you can choose
            from based on the room standard and whether you’re sharing or
            single.
          </li>

          <li>
            You can access your <span className="font-bold">user profile</span>{" "}
            where you manage all your details including dietary preferences,
            arrival and departure dates etc.
          </li>
        </ul>
      </div>

      <div className="flex items-center mt-4 gap-3 flex-col text-base md:text-lg">
        <p className="text-center">
          Please note: The property at the Coast has been upgraded to the Nomad
          Hotel in Diani where you will be staying in private villas. The
          package categories below are limited by the number of rooms available
          at this hotel. You can choose a package as is or contact us to change
          the room level, which is only possible at Trademark and Enkewa (on a
          sharing/non-sharing basis only).
        </p>

        <p className="text-wrap text-center">
          To access your user profile, put in the email you used in the response
          form sent by Ebitie and you should be able to access your account. If
          it doesn’t work, <ContactUs isTextOnly={true}></ContactUs> and we’ll
          help you log in.
        </p>

        <p>
          For those participating in only a portion of the trip, please contact
          us to get a custom quote.
        </p>

        <p>Looking forward to hosting you all!</p>
      </div>

      {/* <div className="flex flex-wrap items-center mt-4 gap-4 lg:gap-0 justify-between">
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
      </div> */}

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
      </div>
    </div>
  );
}

export default HowItWorks;
