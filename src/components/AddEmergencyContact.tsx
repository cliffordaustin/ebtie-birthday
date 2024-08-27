"use client";

import { EmergencyContact } from "@prisma/client";
import React from "react";
import EmergencyContactComponent from "./EmergencyContacts";
import { Button, Input } from "@nextui-org/react";
import { IoAdd, IoClose } from "react-icons/io5";
import PhoneInput from "react-phone-number-input";
import CustomPhoneNumber from "../components/ui/phone-number";
import Cookies from "js-cookie";
import { useRouter } from "next-nprogress-bar";

function AddEmergencyContact({
  userId,
  contacts,
  isPDFView,
}: {
  userId?: string | null;
  contacts?: EmergencyContact[];
  isPDFView?: boolean;
}) {
  const [addAnotherContact, setAddAnotherContact] = React.useState(false);

  const [name, setName] = React.useState("");

  const [phone, setPhone] = React.useState<any>("");

  const [email, setEmail] = React.useState("");

  const [relationship, setRelationship] = React.useState("");

  const [loading, setLoading] = React.useState(false);

  const router = useRouter();

  const reset = () => {
    setName("");
    setPhone("");
    setEmail("");
    setRelationship("");
  };

  const addEmergencyContactInfo = async () => {
    setLoading(true);
    const email = Cookies.get("email");
    if (!email) return;

    try {
      const res = await fetch("/api/add-emergency-contact", {
        method: "POST",
        body: JSON.stringify({
          userId: userId,
          name: name,
          phone: phone,
          email: email,
          relationship: relationship,
        }),
      });
      setLoading(false);
      setAddAnotherContact(false);
      reset();
      router.refresh();
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <div className="mt-8">
      <div className="flex items-center justify-between mb-2">
        <h1 className="font-bold text-xl">Emergency Contacts</h1>

        {!isPDFView && contacts && contacts.length > 0 && (
          <Button
            endContent={
              addAnotherContact ? (
                <IoClose size={20} className="cursor-pointer text-blue-500" />
              ) : (
                <IoAdd size={20} className="cursor-pointer text-blue-500" />
              )
            }
            onClick={() => {
              setAddAnotherContact(!addAnotherContact);
            }}
            radius="none"
            variant="light"
            className="hover:!bg-gray-100 !px-0 md:!px-3 !min-w-fit"
          >
            {addAnotherContact ? "Cancel" : "Add another emergency contact"}
          </Button>
        )}
      </div>

      {contacts?.map((contact) => (
        <div key={contact.id} className="py-4 border-t">
          <EmergencyContactComponent
            contactInfo={contact}
            isPDFView={isPDFView}
          ></EmergencyContactComponent>
        </div>
      ))}

      {((contacts && contacts.length === 0) || addAnotherContact) &&
        !isPDFView && (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              addEmergencyContactInfo();
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

              {contacts && contacts.length > 0 && (
                <Button
                  endContent={
                    <IoClose
                      size={20}
                      className="cursor-pointer text-blue-500"
                    />
                  }
                  onClick={() => {
                    setAddAnotherContact(false);
                  }}
                  radius="none"
                  variant="light"
                  className="hover:!bg-gray-100 !px-0 md:!px-3 !min-w-fit"
                >
                  Cancel
                </Button>
              )}
            </div>
          </form>
        )}

      {contacts && contacts.length === 0 && isPDFView && (
        <p className="font-medium">
          No emergency contacts have been added yet.
        </p>
      )}
    </div>
  );
}

export default AddEmergencyContact;
