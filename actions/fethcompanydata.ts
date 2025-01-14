interface CompanyData {
    companyname: string;
}

//fetch company data from api using telegram id
export const fetchCompanyData = async (telegramId: string) => {
    console.log("fetching company data for telegram id:", telegramId);
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/companies/${telegramId}`, {
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