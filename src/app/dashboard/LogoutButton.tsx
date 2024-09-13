"use client";
import React from "react";
import federatedLogout from "@/utils/federatedLogout";
import { Button } from "@mui/material";
function LogoutButton() {
  return (
    <div>
      <Button
        onClick={() => federatedLogout()}
        style={{background:'#b2f0a3'}}
        
      >
        Sign out 
      </Button>
    </div>
  );
}

export default LogoutButton;
