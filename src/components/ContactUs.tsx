"use client";

import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Textarea,
  useDisclosure,
} from "@nextui-org/react";
import Link from "next/link";
import React, { useState } from "react";
import Cookies from "js-cookie";

function ContactUs() {
  const userEmail = Cookies.get("email");
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [description, setDescription] = useState("");
  const [email, setEmail] = useState(userEmail || "");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    const message = `Email:${email}\nMessage: ${description}`;

    const res = await fetch("/api/contact-us", {
      method: "POST",
      body: JSON.stringify({
        message,
        to: "+233555894688",
      }),
    });

    if (res.ok) {
      setLoading(false);
      setDescription("");
    } else {
      setLoading(false);
    }
  };

  return (
    <div className="px-8 py-2 border-b gap-1 flex justify-between items-center">
      <p className="">Looking for something different? Let us know.</p>

      <Button
        color="primary"
        radius="none"
        size="md"
        variant="bordered"
        className=""
        onClick={onOpen}
      >
        Contact Us
      </Button>

      <Modal
        radius="none"
        isOpen={isOpen}
        placement="top"
        size="lg"
        onOpenChange={onOpenChange}
        backdrop="opaque"
        classNames={{
          backdrop:
            "bg-gradient-to-t from-zinc-900 to-zinc-900/10 backdrop-opacity-20",
        }}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Contact Us
              </ModalHeader>
              <ModalBody>
                <Input
                  label="Email"
                  variant="bordered"
                  placeholder="Enter your email"
                  radius="none"
                  type="email"
                  className="w-full mb-2"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />

                <Textarea
                  radius="none"
                  label="Tell us what you're looking for"
                  placeholder="Enter your message here"
                  rows={6}
                  variant="bordered"
                  disableAutosize
                  className="w-full"
                  value={description}
                  onChange={(e) => {
                    setDescription(e.target.value);
                  }}
                />
              </ModalBody>
              <ModalFooter>
                <Button
                  disabled={!description}
                  isLoading={loading}
                  radius="none"
                  color="primary"
                  className="text-white w-full"
                  onClick={handleSubmit}
                >
                  Send message
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}

export default ContactUs;
