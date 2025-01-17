export const fetchBountyById = async (bountyid: string) => {
    console.log("fetching bounty for id:", bountyid);
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/bounties/${bountyid}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    });
    console.log('response :>> ', response);
    const result = await response.json();
    console.log('result :>> ', result);
    
    // If the result is an array, return the first item, assuming there's only one bounty
    const bounty = Array.isArray(result) ? result[0] : result;
    
    const sanitizedBounty = {
        ...bounty,
        skills: Array.isArray(bounty.skills) ? bounty.skills : [],
    };
    
    return sanitizedBounty;
}
