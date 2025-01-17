'use client'

import { useState, useEffect } from 'react'
import { Header } from "@/components/header"
import { ProfileForm } from "@/components/profile-form"
import { CompanyDashboard } from "@/components/company-dashboard"
import useTelegramData from "@/components/telegramData"
import { fetchUserType } from "@/actions/fetchUserType"
type UserType = 'talent' | 'company' | null

export default function ProfilePage() {
  const [userType, setUserType] = useState<UserType>(null)
  const telegramData = useTelegramData();
  const telegramId = telegramData?.telegram_id;

  const loadUserType = async () => {
    if (!telegramId) {
      console.log('Telegram ID is missing.');
      return;
    }
    const fetchedUserType = await fetchUserType(telegramId.toString());
    console.log(fetchedUserType);
    if (fetchedUserType) {
      setUserType(fetchedUserType.usertype as UserType);
    }
  }
  console.log(userType);

  //set user type
  useEffect(() => {
    loadUserType();
  }, [telegramId]);

  if (userType === null) {
    return <div>Loading...</div>
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">
          {userType === 'talent' ? 'Your Profile' : 'Company Dashboard'}
        </h1>
        {userType === 'talent' ? <ProfileForm /> : <CompanyDashboard />}
      </main>
    </div>
  )
}

