// fetch usertype

interface UserTypes{
    usertype: string;
}
export const fetchUserType = async (telegramId: string): Promise<UserTypes | null> => {
    if (!telegramId) {
        console.error("Telegram ID is missing.");
        return null;
    }

    const fetchUserData = async (url: string): Promise<UserTypes | null> => {
        try {
            const response = await fetch(url);
            if (response.ok) {
                return await response.json();
            }
            if (response.status === 404) {
                return null; // Not found, continue checking other endpoints
            }
            throw new Error(`Error: ${response.status} - ${response.statusText}`);
        } catch (error) {
            console.error(`Error fetching from ${url}:`, error);
            return null;
        }
    };
    try {
        const [talentData, companyData] = await Promise.all([
            fetchUserData(`${process.env.NEXT_PUBLIC_API_URL}/api/talents/${telegramId}`),
            fetchUserData(`${process.env.NEXT_PUBLIC_API_URL}/api/companies/${telegramId}`)
        ]);
        return talentData || companyData || null; // Return the first valid result or null
    } catch (error) {
        console.error("Unexpected error during parallel requests:", error);
        return null;
    }
};
