// "use client";

// import React, { useState, useEffect } from "react";
// import Form from "@rjsf/material-ui"; // Ensure this is the correct package for your Material-UI version
// import validator from "@rjsf/validator-ajv6";
// import { Box } from "@mui/material";
// import { useRouter } from "next/navigation";
// import Navbar from "@/components/Navbar";
// // Define the schema for the form
// // const schema = {
// //   title: "Schema Form",
// //   type: "object",
// //   properties: {
// //     name: {
// //       type: "string",
// //       title: "Name"
// //     },
// //     description: {
// //       type: "string",
// //       title: "Description"
// //     },
// //     schema: {
// //       type: "string",
// //       title: "Schema"
// //     },
// //     status: {
// //       type: "string",
// //       enum: ["DRAFT", "PUBLISHED"],
// //       title: "Status",
// //       default: "DRAFT"
// //     }
// //   }
// // };

// // // Define the UI schema for customizing the form presentation
// // const uiSchema = {
// //   name: {
// //     "ui:widget": "text"  // Use text input for name
// //   },
// //   description: {
// //     "ui:widget": "textarea"  // Use textarea for description for better readability of long texts
// //   },
// //   schema: {
// //     "ui:widget": "textarea"  // Use textarea for schema field
// //   },
// //   status: {
// //     "ui:widget": "select",  // Dropdown for status enum values
// //     "ui:options": {
// //       enumOptions: [
// //         { value: "DRAFT", label: "Draft" },
// //         { value: "PUBLISHED", label: "Published" }
// //       ]
// //     }
// //   }
// // };
// // Schema with date-time format
// const schema = {
//   title: "Insurance Form",
//   type: "object",
//   required: [
//     "policyNumber",
//     "policyName",
//     "policyExpiresOn",
//     "policyIssuedOn",
//     "fullName",
//     "dob",
//   ],
//   properties: {
//     policyNumber: {
//       type: "string",
//       title: "Policy Number",
//     },
//     policyName: {
//       type: "string",
//       title: "Policy Name",
//     },
//     policyExpiresOn: {
//       type: "string",
//       format: "date-time",
//       title: "Policy Expires On",
//     },
//     policyIssuedOn: {
//       type: "string",
//       format: "date-time",
//       title: "Policy Issued On",
//     },
//     benefits: {
//       type: "array",
//       items: {
//         type: "string",
//       },
//       title: "Benefits",
//     },
//     fullName: {
//       type: "string",
//       title: "Full Name",
//     },
//     dob: {
//       type: "string",
//       format: "date",
//       title: "Date of Birth",
//     },
//     gender: {
//       type: "string",
//       enum: ["Male", "Female", "Other"],
//       title: "Gender",
//     },
//     mobile: {
//       type: "string",
//       title: "Mobile Number",
//     },
//     email: {
//       type: "string",
//       title: "Email ID",
//     },
//   },
// };

// // UI Schema with 'date' widget for date-time fields
// const uiSchema = {
//   policyNumber: {
//     "ui:widget": "text",
//   },
//   policyName: {
//     "ui:widget": "text",
//   },
//   policyExpiresOn: {
//     "ui:widget": "datetime", // Use a standard date input with time handling
//   },
//   policyIssuedOn: {
//     "ui:widget": "datetime", // Use a standard date input with time handling
//   },
//   benefits: {
//     "ui:options": {
//       orderable: true,
//     },
//     items: {
//       "ui:widget": "text", // Use text inputs for array items
//     },
//   },
//   fullName: {
//     "ui:widget": "text",
//   },
//   dob: {
//     "ui:widget": "date", // Use standard date input
//   },
//   gender: {
//     "ui:widget": "select", // Dropdown for enum values
//     "ui:options": {
//       enumOptions: [
//         { value: "Male", label: "Male" },
//         { value: "Female", label: "Female" },
//         { value: "Other", label: "Other" },
//       ],
//     },
//   },
//   mobile: {
//     "ui:widget": "text",
//   },
//   email: {
//     "ui:widget": "text",
//   },
// };

// function page() {
//   const [records, setRecords] = useState([]);
//   console.log(records);
//   useEffect(() => {
//     async function getData() {
//       try {
//         const res = await fetch("/api/handleform", {
//           method: "GET",
//         });
//         if (res.ok) {
//           const data = await res.json();
//           console.log("Fetched schema:", data); // Check the structure in the console
//           setRecords(data);
//         } else {
//           console.error("Oops! Something is wrong.");
//         }
//       } catch (error) {
//         console.error("Fetch error:", error);
//       }
//     }
//     getData();
//   }, []);

//   // Function to handle form submission
//   const router = useRouter();
//   const handleSubmit = async ({ formData }) => {
//     try {
//       const res = await fetch("/api/handleform", {
//         method: "POST",
//         body: JSON.stringify(formData),
//         headers: {
//           "content-type": "application/json",
//         },
//       });
//       console.log(res);
//       if (res.ok) {
//         router.push("/dashboard");
//       } else {
//         console.log("Oops! Something is wrong.");
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   return (
//     <>
//       <div>
//         {/* <div style={{backgroundColor:'#4caf50',padding:'15px'}}>
//         <h6>Form</h6>
//       </div> */}
//         <Navbar name="Form" button={<></>} />

//         <Box
//           style={{
//             marginTop: "40px",
//             marginLeft: "20%",
//             marginRight: "20%",
//             marginBottom: "80px",
//             border: "2px solid #ccc",
//             padding: "20px",
//             borderRadius: "8px",
//           }}
//         >
//           {/* <Form
//             schema={schema}
//             uiSchema={uiSchema}
//             onSubmit={handleSubmit}
//             validator={validator}
//           /> */}
//           {records && records.schema ? (
//             <Form
//               schema={records.schema}
//               uiSchema={uiSchema}
//               onSubmit={handleSubmit}
//               validator={validator}
//             />
//           ) : (
//             <div>Loading...</div>
//           )}
//         </Box>
//       </div>
//     </>
//   );
// }

// export default page;
// "use client";

// import React, { useState, useEffect } from "react";
// import Form from "@rjsf/material-ui"; // Ensure this is the correct package for your Material-UI version
// import validator from "@rjsf/validator-ajv6";
// import { Box } from "@mui/material";
// import { useRouter } from "next/navigation";
// import Navbar from "@/components/Navbar";

// function Page() {
//   const [records, setRecords] = useState(null); // Initialize as null for better conditional checks
//   const [uiSchema, setUISchema] = useState({}); // State for uiSchema
//   const router = useRouter();

//   useEffect(() => {
//     async function getData() {
//       try {
//         const res = await fetch("https://demofr2.dpgongcp.com/registry/api/docs/Vaccination.json", {
//           method: "GET",
//         });
//         if (res.ok) {
//           const data = await res.json();
//           console.log("Fetched schema:", data); // Check the structure in the console
//           setRecords(data);

//           // Function to dynamically generate uiSchema
//           function generateUISchema(schema) {
//             const uiSchema = {};
            
//             Object.keys(schema.properties).forEach(key => {
//               const property = schema.properties[key];
              
//               switch (property.type) {
//                 case 'string':
//                   if (property.format === 'date-time') {
//                     uiSchema[key] = { 'ui:widget': 'datetime' };
//                   } else if (property.format === 'date') {
//                     uiSchema[key] = { 'ui:widget': 'date' };
//                   } else if (property.format === 'email') {
//                     uiSchema[key] = { 'ui:widget': 'email' };
//                   } else {
//                     uiSchema[key] = { 'ui:widget': 'text' };
//                   }
//                   break;
              
//                 case 'number':
//                   uiSchema[key] = { 'ui:widget': 'updown' };
//                   break;
                
//                 case 'boolean':
//                   uiSchema[key] = { 'ui:widget': 'select' };
//                   break;
                
//                 case 'array':
//                   uiSchema[key] = {
//                     'items': { 'ui:widget': 'text' },
//                     'ui:options': {
//                       'addButtonText': 'Add Item'
//                     }
//                   };
//                   break;
                
//                 default:
//                   uiSchema[key] = { 'ui:widget': 'text' };
//               }
//             });
            
//             // Handle `enum` type for dropdowns
//             Object.keys(schema.properties).forEach(key => {
//               const property = schema.properties[key];
//               if (property.enum) {
//                 uiSchema[key] = {
//                   'ui:widget': 'select',
//                   'ui:options': {
//                     enumOptions: property.enum.map(value => ({ value, label: value }))
//                   }
//                 };
//               }
//             });
            
//             return uiSchema;
//           }

//           const generatedUISchema = generateUISchema(data.schema);
//           setUISchema(generatedUISchema);
//         } else {
//           console.error("Oops! Something is wrong.");
//         }
//       } catch (error) {
//         console.error("Fetch error:", error);
//       }
//     }
//     getData();
//   }, []);

//   const handleSubmit = async ({ formData }) => {
//     console.log("Form data submitted:", formData); // Print form data to console
//     try {
//       const res = await fetch("/api/handleform", {
//         method: "POST",
//         body: JSON.stringify(formData),
//         headers: {
//           "Content-Type": "application/json",
//         },
//       });
//       if (res.ok) {
//         router.push("/dashboard");
//       } else {
//         console.error("Oops! Something is wrong.");
//       }
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <>
//       <Navbar name="Form" button={<></>} />
//       <Box
//         style={{
//           marginTop: "40px",
//           marginLeft: "20%",
//           marginRight: "20%",
//           marginBottom: "80px",
//           border: "2px solid #ccc",
//           padding: "20px",
//           borderRadius: "8px",
//         }}
//       >
//         {records && records.schema ? (
//           <Form
//             schema={records.schema}
//             uiSchema={uiSchema}
//             onSubmit={handleSubmit}
//             validator={validator}
//           />
//         ) : (
//           <div>Loading...</div>
//         )}
//       </Box>
//     </>
//   );
// }

// export default Page;

"use client";

import React, { useState, useEffect } from "react";
import Form from "@rjsf/material-ui";
import validator from "@rjsf/validator-ajv6";
import { Box } from "@mui/material";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";

function Page() {
  const [records, setRecords] = useState(null); // Initialize as null for better conditional checks
  const [uiSchema, setUISchema] = useState({}); // State for uiSchema
  const router = useRouter();

  useEffect(() => {
    async function getData() {
      try {
        const res = await fetch("https://demofr2.dpgongcp.com/registry/api/docs/Vaccination.json", {
          method: "GET",
        });
        if (res.ok) {
          const data = await res.json();
          console.log("Fetched schema:", data); // Check the structure in the console
          
          // Extract the schema from the nested `Vaccination` key
          const schema = data.Vaccination;

          // Set the schema
          setRecords({ schema });

          // Function to dynamically generate uiSchema
          function generateUISchema(schema) {
            const uiSchema = {};
            
            Object.keys(schema.properties).forEach(key => {
              const property = schema.properties[key];
              
              switch (property.type) {
                case 'string':
                  if (property.format === 'date-time') {
                    uiSchema[key] = { 'ui:widget': 'datetime' };
                  } else if (property.format === 'date') {
                    uiSchema[key] = { 'ui:widget': 'date' };
                  } else if (property.format === 'email') {
                    uiSchema[key] = { 'ui:widget': 'email' };
                  } else {
                    uiSchema[key] = { 'ui:widget': 'text' };
                  }
                  break;
              
                case 'number':
                  uiSchema[key] = { 'ui:widget': 'updown' };
                  break;
                
                case 'boolean':
                  uiSchema[key] = { 'ui:widget': 'select' };
                  break;
                
                case 'array':
                  uiSchema[key] = {
                    'items': { 'ui:widget': 'text' },
                    'ui:options': {
                      'addButtonText': 'Add Item'
                    }
                  };
                  break;
                
                default:
                  uiSchema[key] = { 'ui:widget': 'text' };
              }
            });
            
            // Handle `enum` type for dropdowns
            Object.keys(schema.properties).forEach(key => {
              const property = schema.properties[key];
              if (property.enum) {
                uiSchema[key] = {
                  'ui:widget': 'select',
                  'ui:options': {
                    enumOptions: property.enum.map(value => ({ value, label: value }))
                  }
                };
              }
            });
            
            return uiSchema;
          }

          const generatedUISchema = generateUISchema(schema);
          setUISchema(generatedUISchema);
        } else {
          console.error("Oops! Something is wrong.");
        }
      } catch (error) {
        console.error("Fetch error:", error);
      }
    }
    getData();
  }, []);

  const handleSubmit = async ({ formData }) => {
    console.log("Form data submitted:", formData); // Print form data to console
    try {
      const res = await fetch("/api/handleform", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (res.ok) {
        router.push("/dashboard");
      } else {
        console.error("Oops! Something is wrong.");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Navbar name="Form" button={<></>} />
      <Box
        style={{
          marginTop: "40px",
          marginLeft: "20%",
          marginRight: "20%",
          marginBottom: "80px",
          border: "2px solid #ccc",
          padding: "20px",
          borderRadius: "8px",
        }}
      >
        {records && records.schema ? (
          <Form
            schema={records.schema}
            uiSchema={uiSchema}
            onSubmit={handleSubmit}
            validator={validator}
          />
        ) : (
          <div>Loading...</div>
        )}
      </Box>
    </>
  );
}

export default Page;
