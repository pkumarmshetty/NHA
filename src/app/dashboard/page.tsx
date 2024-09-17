// import React from 'react';
// import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
// import TableCell from "@mui/material/TableCell";
// import TableContainer from "@mui/material/TableContainer";
// import TableHead from "@mui/material/TableHead";
// import TableRow from "@mui/material/TableRow";
// import Paper from "@mui/material/Paper";
// import { Box } from "@mui/material";
// import { redirect } from "next/navigation";
// import { getServerSession } from 'next-auth';
// import { authOptions } from '@/app/api/auth/[...nextauth]/route';
// import Navbar from "@/components/Navbar";

// import LogoutButton from "./LogoutButton";
// import InsuranceButton from "./InsuranceButton";
// async function fetchData() {

//   try {
//     const response = await fetch(
//       "https://demofr2.dpgongcp.com/registry/api/v1/Vaccination/search",

//       {

//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Accept: "application/json",
//           'Cache-Control':'no-cache',
//         },
//         body: JSON.stringify({
//           offset: 0,
//           limit: 500,
//           filters: {},
//         }),
//       }
//     );

//     const data = await response.json();

//     if (!response.ok) {
//       throw new Error(data.error || "Error fetching data");
//     }

//     return data;
//   } catch (error) {
//     console.error("Error fetching data:", error);
//     return { error: error };
//   }
// }

// async function page() {

//    const data = await fetchData();

//   if (data.error) {
//     return <div>Error: {data.error}</div>;
//   }
//   const rows = Array.isArray(data) ? data : [];
// const session = await getServerSession(authOptions)
// if(!session){
//   redirect('/');
// }
// console.warn(session?.user?.name)

//   // useEffect(() => {},[])
//   return (
//     <div>
//       <Navbar button={<LogoutButton />} name={session?.user?.name} />
// <Box style={{ margin: "20px" }}>
//   {rows.length === 0 ? (
//     <div>No data available</div>
//   ) : (
//     <TableContainer component={Paper}>
//       <Table sx={{ minWidth: 650 }} aria-label="insurance table">
//         <TableHead>
//         <TableRow>
//         <TableCell colSpan={3} align="right">
//         <InsuranceButton />
//       </TableCell>
//         </TableRow>
//           <TableRow>
//             <TableCell align="left">Full Name</TableCell>
//             <TableCell align="left">OSID</TableCell>
//             <TableCell align="left">Date of Birth</TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {rows.map((row, index) => (
//             <TableRow key={index}>
//               <TableCell align="left">{row.patientName}</TableCell>
//               <TableCell align="left">{row.osid}</TableCell>
//               <TableCell align="left">{row.patientDoB}</TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </TableContainer>
//   )}
// </Box>
//     </div>
//   );
// }

// export default page;
// src/app/dashboard/page.tsx

// Add this directive at the very top to indicate this is a client component
"use client";

import React, { useEffect, useState } from "react";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box } from "@mui/material";
import Navbar from "@/components/Navbar";
import LogoutButton from "./LogoutButton";
import InsuranceButton from "./InsuranceButton";
function Page() {
  const [record, setrecord] = useState([]);
  const [details, setdetails] = useState({});
 
  useEffect(() => {
    // Define an async function inside the useEffect
    // Function to fetch hospital data
    const fetchHospital = async () => {
      try {
        const response = await fetch(
          "https://demofr2.dpgongcp.com/registry/api/v1/Hospital",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
          }
        );

        if (!response.ok) {
          throw new Error(`Network response was not ok: ${response.statusText}`);
        }

        const data = await response.json();
        setdetails(data[0]); // Store fetched data
      } catch (error) {
        console.error("Error fetching hospital data:", error);
      }
    };
    fetchHospital();
    const fetchData = async () => {
      try {
        const response = await fetch("/api/handledata", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            offset: 0,
            limit: 500,
            filters: {},
          }),
        });

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        setrecord(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    // Call the async function
    fetchData();
  }, [setrecord, setdetails]); // Empty dependency array means this runs once on mount
  console.log(record);
  console.log(details);

  return (
    <div>
      <Navbar button={<LogoutButton />} name={details?.hospitalName || ""}  data ={details}/>
      <Box style={{ margin: "20px" }}>
        {record.length === 0 ? (
          <div>Loading...........</div>
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
                {record.map((row, index) => (
                  <TableRow key={index}>
                    <TableCell align="left">{row.patientName}</TableCell>
                    <TableCell align="left">{row.osid}</TableCell>
                    <TableCell align="left">{row.patientDoB}</TableCell>
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

export default Page;
