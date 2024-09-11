"use client";
import React from "react";
import federatedLogout from "@/utils/federatedLogout";
import { Button } from "@mui/material";
function LogoutButton() {
  return (
    <div>
      <Button
        onClick={() => federatedLogout()}
        color="inherit"
        variant="outlined"
      >
        Sign out of Keycloak
      </Button>
    </div>
  );
}

export default LogoutButton;
