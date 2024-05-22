"use client";

import { Button, Select, SelectItem, Tooltip } from "@nextui-org/react";
import { PaymentPlan as PaymentPlanType } from "@prisma/client";
import React from "react";
import Cookies from "js-cookie";
import { useRouter } from "next-nprogress-bar";
import { FiDelete } from "react-icons/fi";

function PaymentPlan({
  paymentPlan,
  isPDFView,
}: {
  paymentPlan: PaymentPlanType | null | undefined;
  isPDFView?: boolean;
}) {
  const [plan, setPlan] = React.useState<any>();
  const [loading, setLoading] = React.useState(false);

  const router = useRouter();

  const plans: {
    id: PaymentPlanType;
    name: string;
  }[] = [
    { id: "MOJA_PLAN", name: "Moja Plan" },
    { id: "PACHA_PLAN", name: "Pacha Plan" },
    { id: "TATU_PLAN", name: "Tatu Plan" },
  ];

  const updatePlan = async () => {
    setLoading(true);
    const email = Cookies.get("email");
    if (!email) {
      setLoading(false);
      return;
    }

    const res = await fetch("/api/payment-plan", {
      method: "POST",
      body: JSON.stringify({
        email,
        paymentPlan: plan?.anchorKey,
      }),
    });

    if (res.ok) {
      setLoading(false);
      setPlan(new Set([]));
      router.refresh();
    } else {
      setLoading(false);
    }
  };

  const deletePlan = async () => {
    const email = Cookies.get("email");
    if (!email) return;
    const res = await fetch("/api/payment-plan", {
      method: "DELETE",
      body: JSON.stringify({
        email,
      }),
    });

    if (res.ok) {
      router.refresh();
    }
  };
  return (
    <>
      {!paymentPlan && (
        <div className="mt-2">
          <p className="text-gray-600 ml-3 lowercase">No payment plan found.</p>
        </div>
      )}

      {paymentPlan && (
        <div className="mt-2 flex items-center justify-between">
          <p className="text-gray-600 ml-3 lowercase">
            {paymentPlan.replace("_", " ")}
          </p>

          {!isPDFView && (
            <Tooltip showArrow placement="bottom" content="Delete">
              <Button
                className="text-lg"
                color="danger"
                size="sm"
                isIconOnly
                variant="light"
                onClick={() => deletePlan()}
              >
                <FiDelete />
              </Button>
            </Tooltip>
          )}
        </div>
      )}

      {!isPDFView && (
        <div className="flex items-center gap-2 sticky left-0 top-0 border-b bottom-0 bg-white z-20 py-4 px-3">
          <Select
            label="Payment plan"
            variant="bordered"
            placeholder="Select a payment plan"
            selectedKeys={plan}
            className="max-w-60"
            radius="none"
            onSelectionChange={(e: any) => {
              setPlan(e);
            }}
          >
            {plans.map((item) => (
              <SelectItem key={item.id} value={item.name}>
                {item.name}
              </SelectItem>
            ))}
          </Select>

          <Button
            radius="none"
            disabled={!plan}
            isLoading={loading}
            onClick={updatePlan}
            color={!plan ? "default" : "primary"}
            className="text-white px-4 !py-[27px]"
          >
            Update Plan
          </Button>
        </div>
      )}
    </>
  );
}

export default PaymentPlan;
