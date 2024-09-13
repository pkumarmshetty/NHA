import { NextResponse } from "next/server";

export async function GET(){
    const data = {
        name: 'Bishal Shrestha',
        age: '27'
    }

    return NextResponse.json({data})
}

export async function POST(req,res){
    const data = await req.json();
    console.log('Request data:', data);

    // Define the external API endpoint
    const apiEndpoint = 'https://demofr1.dpgongcp.com/registry/api/v1/Insurance';

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
