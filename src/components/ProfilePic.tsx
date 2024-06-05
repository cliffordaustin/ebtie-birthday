"use client";

import React from "react";
import { put, PutBlobResult } from "@vercel/blob";
import { revalidatePath } from "next/cache";
import Cookies from "js-cookie";
import { useRouter } from "next-nprogress-bar";
import { Spinner } from "@nextui-org/react";

function ProfilePic() {
  const router = useRouter();
  const [loading, setLoading] = React.useState(false);

  const uploadImage = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoading(true);
    const file = e.target.files?.[0];
    if (!file) return;
    try {
      const response = await fetch(`/api/avatar/upload?filename=${file.name}`, {
        method: "POST",
        body: file,
      });

      const newBlob = (await response.json()) as PutBlobResult;

      await fetch(`/api/update-profile-image`, {
        method: "POST",
        body: JSON.stringify({
          email: Cookies.get("email"),
          url: newBlob.url,
        }),
      });

      router.refresh();
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log("error", error);
    }
  };
  return (
    <>
      <input
        onChange={(e) => {
          uploadImage(e);
        }}
        className="hidden"
        id="file-upload"
        type="file"
        accept="image/*"
      />
      <div className="flex items-center gap-1">
        <label
          htmlFor="file-upload"
          className="text-blue-600 hover:underline cursor-pointer"
        >
          Update profile pic
        </label>
        {loading && <Spinner size="sm" />}
      </div>
    </>
  );
}

export default ProfilePic;
