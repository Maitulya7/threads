import AccountProfile from "@/components/forms/AccountProfile";
import { currentUser } from "@clerk/nextjs";

interface UserInfo {
  _id: string;
  username: string;
  name: string;
  bio: string;
  image: string;
  // Add other properties if needed...
}

async function Page() {
  const user = await currentUser();
  if (!user) return null;

  // Assuming you retrieve user info from the database here
  const userInfo: UserInfo = await fetchUserInfoFromDatabase(); // Replace with actual fetching logic

  const userDate = {
    id: user.id,
    objectId: userInfo._id,
    username: userInfo.username || user.username,
    name: userInfo.name || user.firstName || "",
    bio: userInfo.bio || "",
    image: userInfo.image || user.imageUrl,
  };

  return (
    <main className="mx-auto flex max-w-3x1 flex-col justify-start px-10 py-20">
      <h1 className="head-text">onboarding</h1>
      <p className="mt-3 text-base-regular text-light-2">
        Complete your Profile now to use Threads
      </p>
      <section className="mt-9 bg-dark-2 p-10">
        <AccountProfile user={userDate} btnTitle="continue" />
      </section>
    </main>
  );
}

export default Page;

// Replace this with actual database fetching logic
async function fetchUserInfoFromDatabase(): Promise<UserInfo> {
  // Simulate fetching user info from the database
  return {
    _id: "user_id_from_db",
    username: "username_from_db",
    name: "Name from DB",
    bio: "Bio from DB",
    image: "image_url_from_db",
  };
}
