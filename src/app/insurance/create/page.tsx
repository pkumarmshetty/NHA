

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
