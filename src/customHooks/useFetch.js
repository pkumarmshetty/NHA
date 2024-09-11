export async function fetchInsuranceData() {
    try {
      const response = await fetch('https://demofr1.dpgongcp.com/registry/api/v1/Insurance/search', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          offset: 0,
          limit: 5,
          filters: {},
        }),
        // This next option is crucial for SSR to work correctly
        cache: 'no-store'
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      return await response.json();
    } catch (error) {
      console.error('Failed to fetch insurance data:', error);
      return [];
    }
  }