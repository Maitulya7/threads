import AccountProfile from "@/components/forms/AccountProfile";
import { currentUser } from "@clerk/nextjs";
import { userInfo } from "os";



async function Page() {
    const user = await currentUser();
    if (!user) return null; // to avoid typescript warnings

    const userInfo ={};

    const userDate = {
        id: user.id,
        objectId: userInfo?._id,
        username: userInfo ? userInfo?.username : user.username,
        name: userInfo ? userInfo?.name : user.firstName ?? "",
        bio: userInfo ? userInfo?.bio : "",
        image: userInfo ? userInfo?.image : user.imageUrl,
    }
    return(
        
        <main className="mx-auto flex max-w-3x1 flex-col justify-start px-10 py-20">
            <h1 className="head-text">
                onboarding
            </h1>
            <p className="mt-3 text-base-regular text-light-2">
                Complete you Profile now to use Threads
            </p>
            <section className="mt-9 bg-dark-2 p-10">
                <AccountProfile  user={userDate}
                btnTitle = "continue"
                />
            </section>
        </main>
    )
}

export default Page;