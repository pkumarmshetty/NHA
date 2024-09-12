// import React from 'react';
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box } from "@mui/material";
import { redirect } from "next/navigation";
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import Navbar from "@/components/Navbar";
import React from "react";
import LogoutButton from "./LogoutButton";
import InsuranceButton from "./InsuranceButton";
async function fetchData() {
  try {
    const response = await fetch(
      "https://demofr1.dpgongcp.com/registry/api/v1/Insurance/search",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          offset: 0,
          limit: 5,
          filters: {},
        }),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || "Error fetching data");
    }

    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return { error: error };
  }
}



async function page() {
  
  const data = await fetchData();
  if (data.error) {
    return <div>Error: {data.error}</div>;
  }
  const rows = Array.isArray(data) ? data : [];
  const session = await getServerSession(authOptions)
  if(!session){
    redirect('/');
  }
  console.warn(session?.user?.name)
  return (
    <div>
      <Navbar button={<LogoutButton />} name={session?.user?.name} />
      <Box style={{ margin: "20px" }}>
        {rows.length === 0 ? (
          <div>No data available</div>
        ) : (
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="insurance table">
              <TableHead>
              <TableRow>
              <TableCell colSpan={3} align="right">
              <InsuranceButton />
            </TableCell>
              </TableRow>
                <TableRow>
                  <TableCell align="left">Full Name</TableCell>
                  <TableCell align="left">OSID</TableCell>
                  <TableCell align="left">Date of Birth</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row, index) => (
                  <TableRow key={index}>
                    <TableCell align="left">{row.fullName}</TableCell>
                    <TableCell align="left">{row.osid}</TableCell>
                    <TableCell align="left">{row.dob}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}
      </Box>
    </div>
  );
}

export default page;
