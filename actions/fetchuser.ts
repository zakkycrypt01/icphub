
interface UserProfile {
    firstname: string;
    email: string;
    telegram: string;
    twitter: string;
    xp: number
    level: number
    profilePicture: string
}

export const fetchUserProfile = async (telegramId: string): Promise<UserProfile | null> => {
    if (!telegramId) {
        console.error("Telegram ID is missing.");
        return null;
    }

    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/talents/${telegramId}`);
        if (!response.ok) {
            throw new Error(`Error: ${response.status} - ${response.statusText}`);
        }
        const data: UserProfile = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching user profile:", error);
        return null;
    }
};
