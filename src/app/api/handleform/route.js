import { NextResponse } from "next/server";

export async function GET(){
//   const data = await req.json();
//     // Define the external API endpoint
//     const apiEndpoint = 'https://demofr2.dpgongcp.com/registry/api/docs/Vaccination.json';
//     const response = await fetch(apiEndpoint, {
//       method: 'GET',
//       headers: {
//           'Content-Type': 'application/json',
//           'Accept': 'application/json',
//           'Access-Control-Allow-Origin': '*', // Add your own CORS policy here if needed  
//       },
//       body: JSON.stringify(data),
//   });
//   if (!response.ok) {
//     throw new Error(`Error: ${response.statusText}`);
// }

// Parse the response data from the external API
const responseData = await response.json();
console.log(responseData);
return NextResponse.json(responseData)

    // const schema = {
    //   "$schema": "http://json-schema.org/draft-07/schema",
    //   "type": "object",
    //   "properties": {
    //     "Vaccination": {
    //       "$ref": "#/definitions/Vaccination"
    //     }
    //   },
    //   "required": [
    //     "Vaccination"
    //   ],
    //   "title":"Vaccination",
    //   "definitions": {
    //     "Vaccination": {
    //       "$id": "#/properties/Vaccination",
    //       "type": "object",
    //       "title": "Vaccination",
    //       "required": [
    //         "hospitalId",
    //         "hospitalName",
    //         "patientId",
    //         "patientDoB",
    //         "vaccineName",
    //         "gender",
    //         "mobile",
    //         "email",
    //         "vaccineIssuedOn"
    //       ],
    //       "properties": {
    //         "hospitalId": {
    //           "type": "string"
    //         },
    //         "hospitalName": {
    //           "type": "string"
    //         },
    //         "patientId": {
    //           "type": "string"
    //         },
    //         "patientName": {
    //           "type": "string"
    //         },
    //         "patientDoB": {
    //           "type": "string",
    //           "format": "date"
    //         },
    //         "vaccineName": {
    //           "type": "string"
    //         },
    //         "gender": {
    //           "type": "string",
    //           "enum": [
    //             "Male",
    //             "Female",
    //             "Other"
    //           ]
    //         },
    //         "mobile": {
    //           "type": "string",
    //           "title": "Mobile number"
    //         },
    //         "email": {
    //           "type": "string",
    //           "title": "Email ID"
    //         },
    //         "vaccineIssuedOn": {
    //           "type": "string",
    //           "format": "date-time"
    //         }
    //       }
    //     }
    //   },
    //   "_osConfig": {
    //     "osComment": [],
    //     "privateFields": [],
    //     "signedFields": [],
    //     "indexFields": [],
    //     "uniqueIndexFields": [],
    //     "roles": ["anonymous"],
    //     "inviteRoles": ["anonymous"],
    //     "ownershipAttributes": []
    //   }
    // }

    // return NextResponse.json({schema})
}

export async function POST(req,res){
    const data = await req.json();
    console.log('Request data:', data);

    // Define the external API endpoint
    const apiEndpoint = 'https://demofr2.dpgongcp.com/registry/api/v1/Vaccination';

    // Make a POST request to the external API
    const response = await fetch(apiEndpoint, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Access-Control-Allow-Origin': '*', // Add your own CORS policy here if needed  
        },
        body: JSON.stringify(data),
    });

    // Check if the response is OK
    if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
    }

    // Parse the response data from the external API
    const responseData = await response.json();
   console.log(responseData);
    return NextResponse.json(responseData)
}
