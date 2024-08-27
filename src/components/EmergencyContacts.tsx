"use client";

import { Button, DatePicker, DateValue, Input } from "@nextui-org/react";
import {
  EmergencyContact,
  OtherPassportInfo,
  Package,
  Property,
  User,
} from "@prisma/client";
import React from "react";
import { IoClose } from "react-icons/io5";
import { RiEdit2Line } from "react-icons/ri";
import { parseDate, getLocalTimeZone } from "@internationalized/date";
import Nationality from "./Nationality";
import Cookies from "js-cookie";
import { useDateFormatter } from "@react-aria/i18n";
import moment from "moment";
import { useRouter } from "next-nprogress-bar";
import { MdDelete } from "react-icons/md";
import PhoneInput from "react-phone-number-input";
import CustomPhoneNumber from "../components/ui/phone-number";

function EmergencyContactComponent({
  contactInfo,
  isPDFView,
}: {
  contactInfo?: EmergencyContact | null;
  isPDFView?: boolean;
}) {
  const router = useRouter();

  const [showEdit, setShowEdit] = React.useState(false);

  const [name, setName] = React.useState(contactInfo?.name || "");

  const [phone, setPhone] = React.useState<any>(contactInfo?.phone || "");

  const [email, setEmail] = React.useState(contactInfo?.email || "");

  const [relationship, setRelationship] = React.useState(
    contactInfo?.relationship || ""
  );

  const [loading, setLoading] = React.useState(false);

  const [deleteLoading, setDeleteLoading] = React.useState(false);

  const updateEmergencyContactInfo = async () => {
    setLoading(true);
    const userEmail = Cookies.get("email");
    if (!userEmail) return;

    try {
      const res = await fetch("/api/emergency-contact-update", {
        method: "POST",
        body: JSON.stringify({
          id: contactInfo?.id,
          name: name,
          phone: phone,
          email: email,
          relationship: relationship,
        }),
      });
      setLoading(false);
      setShowEdit(false);
      router.refresh();
    } catch (error) {
      console.log("error", error);
    }
  };

  const deleteEmergencyContactInfo = async () => {
    setDeleteLoading(true);
    const email = Cookies.get("email");
    if (!email) return;

    try {
      const res = await fetch(`/api/emergency-contact-update`, {
        method: "DELETE",
        body: JSON.stringify({ id: contactInfo?.id }),
      });
      setDeleteLoading(false);
      router.refresh();
    } catch (error) {
      console.log("error", error);
    }
  };

  let formatter = useDateFormatter({ dateStyle: "medium" });
  return (
    <div>
      {showEdit && !isPDFView && (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            updateEmergencyContactInfo();
          }}
          className="flex flex-col gap-3"
        >
          <Input
            label="Full Name"
            variant="bordered"
            placeholder="Full Name"
            radius="none"
            type="text"
            className="max-w-[384px]"
            value={name}
            onChange={(e: any) => {
              setName(e.target.value);
            }}
            isRequired
          />

          <Input
            label="Relation to the person"
            variant="bordered"
            placeholder="Relationship"
            radius="none"
            type="text"
            className="max-w-[384px]"
            value={relationship}
            onChange={(e: any) => {
              setRelationship(e.target.value);
            }}
          />

          <div className="max-w-[384px]">
            <PhoneInput
              placeholder="Enter phone number"
              value={phone}
              onChange={setPhone}
              defaultCountry="US"
              focusInputOnCountrySelection={false}
              inputComponent={CustomPhoneNumber}
            />
          </div>

          <Input
            label="Email Address"
            variant="bordered"
            placeholder="Email Address"
            radius="none"
            type="email"
            className="max-w-[384px]"
            value={email}
            onChange={(e: any) => {
              setEmail(e.target.value);
            }}
          />

          <div className="flex items-center gap-2 mt-2">
            <Button
              radius="none"
              color="primary"
              isLoading={loading}
              size="md"
              className="w-fit text-white"
              type="submit"
            >
              Save
            </Button>

            <Button
              endContent={
                <IoClose size={20} className="cursor-pointer text-blue-500" />
              }
              onClick={() => {
                setShowEdit(false);
              }}
              radius="none"
              variant="light"
              className="hover:!bg-gray-100 !px-0 md:!px-3 !min-w-fit"
            >
              Close edit
            </Button>
          </div>
        </form>
      )}
      {(!showEdit || isPDFView) && (
        <>
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-1">
              <span className="font-medium">Full name: </span>
              <span className="">{name}</span>
            </div>

            <span>
              <span className="font-medium">Relation to you:{"  "}</span>
              {contactInfo?.relationship || "No data"}
            </span>

            <span>
              <span className="font-medium">Phone number:{"  "}</span>
              {contactInfo?.phone || "No data"}
            </span>

            <span>
              <span className="font-medium">Email:{"  "}</span>
              {contactInfo?.email || "No data"}
            </span>
          </div>

          {!isPDFView && (
            <div className="mt-2 flex gap-2">
              <Button
                endContent={
                  <RiEdit2Line
                    size={20}
                    className="cursor-pointer text-blue-500"
                  />
                }
                onClick={() => {
                  setShowEdit(true);
                }}
                radius="none"
                variant="light"
                className="!bg-gray-100 !px-3 !min-w-fit"
              >
                Edit
              </Button>
              <Button
                endContent={
                  <MdDelete size={20} className="cursor-pointer text-white" />
                }
                onClick={() => {
                  deleteEmergencyContactInfo();
                }}
                isLoading={deleteLoading}
                radius="none"
                className="!px-3 !bg-red-500 !text-white !min-w-fit"
              >
                Delete
              </Button>
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default EmergencyContactComponent;
