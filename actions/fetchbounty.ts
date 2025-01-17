export const fetchBounties = async (): Promise<any> => {
    console.log("fetching bounties");
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/bounties`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    });
    console.log('response :>> ', response);
    const result = await response.json();
    console.log('result :>> ', result);

    // Ensure every item has a `skills` array
    const sanitizedResult = result.map((item: any) => ({
        ...item,
        skills: Array.isArray(item.skills) ? item.skills : [],
    }));
    return sanitizedResult;
};
