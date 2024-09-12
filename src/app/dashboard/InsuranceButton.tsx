"use client";

import { useRouter } from "next/navigation";
import React from "react";
import { Button } from "@mui/material";
function InsuranceButton() {
  const router = useRouter();
  return (
    <div>
      <Button
        onClick={() => router.push("/insurance/create")}
        color="inherit"
        variant="outlined"
      >
        Create Insurance
      </Button>
    </div>
  );
}

export default InsuranceButton;
