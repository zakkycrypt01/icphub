//update bounty status
export const updateBountyStatus = async (bountyid: string, status: string) => {
    console.log("updating bounty status:", bountyid);
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/bounties/${bountyid}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ status })
    });
    console.log('response :>> ', response);
    const result = await response.json();
        console.log('result :>> ', result);
    };