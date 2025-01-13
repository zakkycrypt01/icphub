console.log(process.env.NEXT_PUBLIC_API_URL);

export const registerCompany = async (formData: any) => {
  console.log("company form submitted:", formData);
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/company/signup`, {
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