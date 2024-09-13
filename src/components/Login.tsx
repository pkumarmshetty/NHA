"use client";
// import { signIn } from "next-auth/react";
import NavBar from "@/components/Navbar";
import Banner from "@/components/Banner";
import About from "@/components/About";
import NhaCards from "@/components/NhaCards";
import Footer from "@/components/Footer";
import {  Button } from '@mui/material';
import { signIn } from "next-auth/react";
export default function Login() {
  let button = (<Button color="inherit" style={{background:'#b2f0a3'}} onClick={() => signIn("keycloak")}>
  Sign in
</Button> )
  return (
    <>
      <NavBar name={'Digital Certificate'} button={button} />
      <Banner />
      <About /> 
      <NhaCards/>
      <Footer />
    </>
  );
}
