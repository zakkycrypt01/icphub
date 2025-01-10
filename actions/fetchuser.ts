// import useTelegramData from "@/components/telegramData"


// console.log(process.env.NEXT_PUBLIC_API_URL);

// interface UserProfile {
//     firstname: string;
//     email: string;
//     telegram: string;
//     twitter: string;
// }

// export const fetchUserProfile = async (): Promise<UserProfile | null> => {
//     const telegramData = useTelegramData();
//     const telegamId = telegramData?.telegram_id?.toString();
//     const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/talents/:${telegamId}`);
//     if (response.ok) {
//         const data: UserProfile = await response.json();
//         return data;
//     } else {
//         return null;
//     }
// };
  
interface UserProfile {
    firstname: string;
    email: string;
    telegram: string;
    twitter: string;
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
