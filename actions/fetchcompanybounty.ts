//fetch bounty by company name
export const fetchCompanyBounty = async (companyname: string) => {
    console.log("fetching company bounty for company name:", companyname);
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/bounties/company/${companyname}`, {
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