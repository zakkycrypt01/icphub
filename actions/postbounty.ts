//post bounty
export const postBounty = async (formData: any) => {
    console.log("Bounty form submitted:", formData);
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/postbounty`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    });
    console.log('response :>> ', response);
    const result = await response.json();
    console.log('result :>> ', result);
    return result;
}