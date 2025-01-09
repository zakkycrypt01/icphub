console.log(process.env.NEXT_PUBLIC_API_URL);

export const registerTalent = async (formData: any) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/talent/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(formData)
  });
  const result = await response.json();
  console.log('result :>> ', result);
  return result;
}