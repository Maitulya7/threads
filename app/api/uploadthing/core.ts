// Import necessary modules
import { currentUser } from "@clerk/nextjs";
import { createUploadthing } from "uploadthing/next";

// Create an instance of UploadThing
const f = createUploadthing();

// Define a function to get the current user
const getUser = async () => await currentUser();

// Define the "media" file route
export const ourFileRouter = {
  media: f({
    image: { maxFileSize: "4MB", maxFileCount: 1 }
  })
    .middleware(async (req) => {
      // Check if the user is authorized
      const user = await getUser();
      if (!user) {
        throw new Error("Unauthorized");
      }
      
      // Return user metadata for use in onUploadComplete
      return { userId: user.id };
    })
    .onUploadComplete(async ({ metadata, file }) => {
      // Handle upload completion
      console.log("Upload complete for userId:", metadata.userId);
      console.log("File URL:", file.url);
    })
};

// Export the defined file route
export type OurFileRouter = typeof ourFileRouter;
