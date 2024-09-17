import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";
import Login from "../components/Login";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await getServerSession(authOptions);

  if (session) {
    // Redirect to /dashboard if the user is authenticated
    redirect('/dashboard');
  }
  return (
    <>
      <Login />
    </>
  );
}


