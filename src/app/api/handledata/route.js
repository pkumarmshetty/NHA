import { NextResponse } from 'next/server';

export async function POST() {
  try {
    const response = await fetch("https://demofr2.dpgongcp.com/registry/api/v1/Vaccination/search", {
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

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || "Error fetching data");
    }

    // Control caching by setting appropriate headers
    const res = NextResponse.json(data);
    res.headers.set('Cache-Control', 'no-cache, no-store, must-revalidate'); // No caching
    res.headers.set('Pragma', 'no-cache'); // For HTTP 1.0 compatibility
    res.headers.set('Expires', '0'); // Prevent caching

    return res;
  } catch (error) {
    console.error("Error fetching data:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
