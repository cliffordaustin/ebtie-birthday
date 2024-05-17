"use client";

import { ScrollShadow } from "@nextui-org/react";
import Image from "next/image";
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

// import required modules
import { Autoplay } from "swiper/modules";
import Steps from "rc-steps";

function Itinerary() {
  const itinerary = [
    {
      heading: "✈️ Fri, October 18th - Sat, 19th",
      description:
        "Fly into Nairobi and spend the night there. If you arrive earlier in the day, you can explore the city - visit the Elephant Orphanage, giraffe center and have lunch or dinner at Jiko hotel at the tribe hotel or at harvest restaurant nearby.",
      subDescription: "Overnight Trademark Hotel, 1 Night",
    },

    {
      heading: "🏨 Sat, October 19th - Mon, 21st",
      description:
        "You’ll be driven out to the Maasai Mara at 7 am. The drive is 5 hours. Arrive at the Maasai Mara, check in to the lodge, relax and settle in. Have lunch then head out for your first safari. Spend the afternoon out spotting the famous Big five animals of the Mara. Stop by at a picturesque location for some sundowner drinks in the Bush. Get back to the lodge. Spend the next two days on exhilarating safaris across the Maasai Mara. You will also go on a Maasai cultural visit as well as visit some of Enkewa’s community projects. You will get to go to the waterfalls which is an experience that is unique to this property.",
      subDescription: "Overnight Enkewa Camp, 2 Nights",
    },

    {
      heading: "🚘 Mon, October 21st - Tue, 22nd",
      description:
        "You’ll be driven back to Nairobi after breakfast. Spend the night there. Explore more of Nairobi. Checkout the alchemist or have dinner at ankole restaurant.",
      subDescription: "Overnight Trademark Hotel, 1 Night",
    },

    {
      heading: "🚊 Tue, October 22nd - Thur, 24th",
      description:
        "Early morning rise, head out to the Syokimau train station to catch your 8 am train to Mombasa. Arrive at 2 pm. You’ll be transferred by taxi to your hotel. Spend the next couple of days exploring Diani. See the list of activities below.",
      subDescription: "Overnight Swahili Beach Resort, 2 Nights",
    },

    {
      heading: "🏨 Thur, October 24th - Sat, 26th",
      description:
        "Take the train back to Nairobi. Check in to the hotel. Explore some more. Next day (your birthday), you can pick one of the activities below to do then have dinner at Cultiva.",
      subDescription: "Overnight Trademark Hotel, 2 Nights",
    },
  ];
  return (
    <div className="flex flex-col items-center w-full justify-center">
      <h1 className="font-bold text-2xl relative after:absolute after:bg-[#fca311] after:w-full after:h-[7px] after:z-0 after:bottom-0 after:left-0 after:right-0">
        Trip Overview
      </h1>

      {/* <Steps
        size="default"
        direction="vertical"
        className="h-[60px] w-full"
        current={0}
      >
        <Steps.Step
          title="first"
          className="w-full"
          subTitle="Hello world"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem id sit doloribus aspernatur pariatur, omnis ea architecto dicta quo eius cupiditate necessitatibus natus sunt, aliquid earum at illo minima sint."
        />
        <Steps.Step
          title="second"
          subTitle="Hello world!!"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem id sit doloribus aspernatur pariatur, omnis ea architecto dicta quo eius cupiditate necessitatibus natus sunt, aliquid earum at illo minima sint."
        />
        <Steps.Step
          title="third"
          subTitle="Hello world!!!"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem id sit doloribus aspernatur pariatur, omnis ea architecto dicta quo eius cupiditate necessitatibus natus sunt, aliquid earum at illo minima sint."
        />
      </Steps> */}

      <div className="w-full bg-white flex md:shadow md:h-[400px] mt-5 md:overflow-y-scroll">
        <div className="w-full md:w-[60%]">
          <ScrollShadow>
            <div className="md:px-6 py-4 flex flex-col gap-4">
              {itinerary.map((item, index) => (
                <div key={index} className="flex flex-col gap-2">
                  <h1 className="font-bold text-xl">{item.heading}</h1>
                  <p className="text-gray-600 text-sm mt-3">
                    {item.description}
                  </p>
                  <p className="text-gray-600 text-sm mt-6">
                    {item.subDescription}
                  </p>
                </div>
              ))}
            </div>
          </ScrollShadow>
        </div>
        <div className="hidden md:block w-[40%] sticky top-0 right-0 h-full after:bg-black after:inset-0 after:absolute after:bg-opacity-30 after:z-20">
          <Swiper
            centeredSlides={true}
            autoplay={{
              delay: 3200,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            className="h-full w-full"
          >
            <SwiperSlide>
              <Image
                src="/homepage/image3.jpg"
                layout="fill"
                objectFit="cover"
                alt=""
              />
            </SwiperSlide>

            <SwiperSlide>
              <Image
                src="/homepage/image2.jpg"
                layout="fill"
                objectFit="cover"
                alt=""
              />
            </SwiperSlide>

            <SwiperSlide>
              <Image
                src="/homepage/image1.jpg"
                layout="fill"
                objectFit="cover"
                alt=""
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default Itinerary;
