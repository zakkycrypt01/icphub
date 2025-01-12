import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import useTelegramData from "@/components/telegramData";
import { registerTalent } from "@/actions/registertalent";
console.log(process.env.NEXT_PUBLIC_API_URL);

export function TalentSignupForm() {
  const telegramData = useTelegramData();

  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phonenum: "",
    telegram: "",
    twitter: "",
    PoF: "",
    role: "",
    telegramId: "",
    state: "",
  });

  const [error, setError] = useState({
    email: "",
    phonenum: "",
  });

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (telegramData) {
      setFormData((prevData) => ({
        ...prevData,
        telegramId: telegramData?.telegram_id?.toString() || "",
        telegram: telegramData?.username?.toString() || "",
        firstname: telegramData?.first_name?.toString() || "",
        lastname: telegramData?.last_name?.toString() || "",
      }));
    }
  }, [telegramData]);

  const validateForm = () => {
    const errors: { email: string; phonenum: string } = { email: "", phonenum: "" };
    if (!/\S+@\S+\.\S+/.test(formData.email)) errors.email = "Invalid email address";
    if (!/^\d{10,15}$/.test(formData.phonenum)) errors.phonenum = "Invalid phone number";
    setError(errors);
    return Object.keys(errors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    try {
      const result = await registerTalent(formData);
      if (result.data) {
        console.log("Talent form submitted:", result.data);
      } else {
        alert(result.msg || "Something went wrong, please try again.");
      }
    } catch (error) {
      console.error("Submission error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label htmlFor="firstname">First Name</Label>
          <Input
            id="firstname"
            name="firstname"
            value={formData.firstname}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <Label htmlFor="lastname">Last Name</Label>
          <Input
            id="lastname"
            name="lastname"
            value={formData.lastname}
            onChange={handleChange}
            required
          />
        </div>
      </div>
      <div>
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          required
          className={error.email ? "border-red-500" : ""}
        />
        {error.email && <p className="text-red-500 text-sm">{error.email}</p>}
      </div>
      <div>
        <Label htmlFor="phonenum">Phone Number</Label>
        <Input
          id="phonenum"
          name="phonenum"
          value={formData.phonenum}
          onChange={handleChange}
          required
          className={error.phonenum ? "border-red-500" : ""}
        />
        {error.phonenum && <p className="text-red-500 text-sm">{error.phonenum}</p>}
      </div>
      <div>
        <Label htmlFor="telegramHandle">Telegram Handle</Label>
        <Input
          id="telegramHandle"
          name="telegram"
          value={formData.telegram}
          onChange={handleChange}
          required
          readOnly
        />
      </div>
      <div>
        <Label htmlFor="twitterProfile">Twitter Profile Handle</Label>
        <Input
          id="twitterProfile"
          name="twitter"
          value={formData.twitter}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <Label htmlFor="proofOfWork">Proof of Work</Label>
        <Textarea
          id="proofOfWork"
          name="PoF"
          value={formData.PoF}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <Label htmlFor="telegram_Id">Telegram ID</Label>
        <Input
          id="telegramID"
          name="telegramId"
          value={formData.telegramId}
          onChange={handleChange}
          required
          readOnly
        />
      </div>
      <div>
        <Label>Role</Label>
        <RadioGroup
          onValueChange={(value: string) => setFormData({ ...formData, role: value })}
          required
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="developer" id="developer" />
            <Label htmlFor="developer">Developer/Engineer</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="videoCreator" id="videoCreator" />
            <Label htmlFor="videoCreator">Video Creator</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="contentWriter" id="contentWriter" />
            <Label htmlFor="contentWriter">Content Writer</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="graphicDesigner" id="graphicDesigner" />
            <Label htmlFor="graphicDesigner">Graphic Designer</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="nftArtist" id="nftArtist" />
            <Label htmlFor="nftArtist">NFT/Digital Artist</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="founder" id="founder" />
            <Label htmlFor="founder">Founder</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="communityMod" id="communityMod" />
            <Label htmlFor="communityMod">Community Moderator</Label>
          </div>
        </RadioGroup>
      </div>
      <div>
        <Label>State</Label>
        <RadioGroup
          onValueChange={(value: string) => setFormData({ ...formData, state: value })}
          required
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="lagos" id="lagos" />
            <Label htmlFor="lagos">Lagos</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="abuja" id="abuja" />
            <Label htmlFor="abuja">Abuja</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="portharcourt" id="portharcourt" />
            <Label htmlFor="portharcourt">Port Harcourt</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="ibadan" id="ibadan" />
            <Label htmlFor="ibadan">Ibadan</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="others" id="others" />
            <Label htmlFor="others">Others</Label>
          </div>
        </RadioGroup>
      </div>
      <Button
        className="bg-transparent hover:bg-gray-700 text-white border-2 border-[#A5B9D0]"
        type="submit"
        disabled={loading}
      >
        {loading ? "Submitting..." : "Submit Application"}
      </Button>
    </form>
  );
}
