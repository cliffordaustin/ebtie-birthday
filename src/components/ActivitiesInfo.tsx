import React from "react";

function ActivitiesInfo() {
  return (
    <>
      <h1 className="font-semibold text-gray-800 text-xl">Activities</h1>

      <div className="">
        <p className="mt-2">
          You&apos;ll see the activities list divided into two sections in your
          trip profile.
        </p>

        <p className="mt-2">
          1. Trip Activities (Prepaid, Per Person - added to your booking
          amount)
        </p>
        <div className="mt-1 ml-4 flex flex-col">
          <p>
            a. These activities need to be booked in advance and have set dates
            or times.
          </p>
          <p>
            b. We will book it for you in advance and you will receive an
            invoice and payment link closer to the trip date.
          </p>
        </div>

        <p className="mt-3">2. Trip Activities (Book Independently Below)</p>
        <div className="mt-1 flex flex-col ml-4">
          <p>
            a. These activities can be booked on your own or with a group
            interested in joining.
          </p>
          <p>
            b. They are flexible depending on your schedule and time in the
            location.
          </p>
          <p>
            c. You can also use WhatsApp to create a group in the community and
            coordinate logistics for an activity.
          </p>
        </div>
      </div>
    </>
  );
}

export default ActivitiesInfo;
