//fetch bounties
export const fetchBounties = async () => {
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
    return result;
}