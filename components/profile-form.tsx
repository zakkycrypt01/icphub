'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { fetchUserProfile } from '@/actions/fetchuser';
import useTelegramData from '@/components/telegramData';

type UserProfile = {
  firstname: string;
  email: string;
  telegram: string;
  twitter: string;
};

type BountySubmission = {
  id: number;
  title: string;
  status: 'pending' | 'approved' | 'rejected';
  submittedAt: string;
};

const bountySubmissions: BountySubmission[] = [
  { id: 1, title: 'DeFi Dashboard', status: 'approved', submittedAt: '2024-03-10' },
  { id: 2, title: 'Smart Contract Auditing Tool', status: 'pending', submittedAt: '2024-03-15' },
];

export function ProfileForm() {
  const [profile, setProfile] = useState<UserProfile>({
    firstname: '',
    email: '',
    telegram: '',
    twitter: '',
  });
  const [isEditing, setIsEditing] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const telegramData = useTelegramData();
  const telegramId = telegramData?.telegram_id;

  // Fetch the profile on component mount
  useEffect(() => {
    const loadUserProfile = async () => {
      if (!telegramId) {
        console.log('Telegram ID is missing.');
        setIsLoading(false);
        return;
      }
      const fetchedProfile = await fetchUserProfile(telegramId.toString());
      if (fetchedProfile) {
        setProfile(fetchedProfile);
      }
      setIsLoading(false);
    };
    loadUserProfile();
  }, [telegramId]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Profile updated:', profile);
    setIsEditing(false);
    // Send updated profile to backend
    alert('Profile updated successfully!');
  };

  if (isLoading) {
    return <p>Loading profile...</p>;
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>User Profile</CardTitle>
        </CardHeader>
        <CardContent>
          {isEditing ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="firstname">Name</Label>
                <Input
                  id="firstname"
                  name="firstname"
                  value={profile.firstname}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={profile.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <Label htmlFor="telegram">Telegram Handle</Label>
                <Input
                  id="telegram"
                  name="telegram"
                  value={profile.telegram}
                  onChange={handleChange}
                />
              </div>
              <div>
                <Label htmlFor="twitter">Twitter Handle</Label>
                <Input
                  id="twitter"
                  name="twitter"
                  value={profile.twitter}
                  onChange={handleChange}
                />
              </div>
              <Button
                type="submit"
                className="bg-transparent hover:bg-gray-700 text-white border-2 border-[#A5B9D0]"
              >
                Save Changes
              </Button>
            </form>
          ) : (
            <div className="space-y-4">
              <p>
                <strong>Name:</strong> {profile.firstname}
              </p>
              <p>
                <strong>Email:</strong> {profile.email}
              </p>
              <p>
                <strong>Telegram:</strong> {profile.telegram}
              </p>
              <p>
                <strong>Twitter:</strong> {profile.twitter}
              </p>
              <Button
                className="bg-transparent hover:bg-gray-700 text-white border-2 border-[#A5B9D0]"
                onClick={() => setIsEditing(true)}
              >
                Edit Profile
              </Button>
            </div>
          )}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Bounty Submissions</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-4">
            {bountySubmissions.map((submission) => (
              <li key={submission.id} className="flex justify-between items-center">
                <span>{submission.title}</span>
                <div>
                  <Badge
                    variant={
                      submission.status === 'approved'
                        ? 'default'
                        : submission.status === 'rejected'
                        ? 'destructive'
                        : 'secondary'
                    }
                  >
                    {submission.status}
                  </Badge>
                  <span className="ml-2 text-sm text-muted-foreground">{submission.submittedAt}</span>
                </div>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
