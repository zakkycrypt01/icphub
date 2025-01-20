'useClient'

import {useState, useEffect} from 'react';
import {retrieveLaunchParams} from '@telegram-apps/sdk';





const useTelegramData = () => {
    interface TelegramUser {
        reffered_by: number | null;
        username: string;
        first_name: string;
        last_name: string;
        telegram_id: number | undefined;
    }

    const [telegramData, setTelegramData] = useState<TelegramUser | null>(null);
    const isInProduction = process.env.NODE_ENV === 'production';

    const fetchTelegramData = async () => {
        if (isInProduction) {
            const {initData} = retrieveLaunchParams();
            
            if (initData) {

                const user = {
                    reffered_by: initData?.startParam? Number(initData?.startParam) : null,
                    username: initData?.user?.username || "",
                    first_name: initData?.user?.firstName || "",
                    last_name: initData?.user?.lastName || "",
                    telegram_id: initData?.user?.id,
                };
                setTelegramData(user);
            }
        } else {
            // mock data for development
            setTelegramData({
                reffered_by: 123,
                username: "test",
                first_name: "test",
                last_name: "test",
                telegram_id: 6852776151,
            });
        }
    }; useEffect(() => {
        fetchTelegramData();
    }, [isInProduction]);
    return telegramData;
}

export default useTelegramData;