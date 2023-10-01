// import { Webhook, WebhookRequiredHeaders } from "svix";
// import { headers } from "next/headers";
// import { IncomingHttpHeaders } from "http";

// type EventType =
//   | "organization.created"
//   | "organizationInvitation.created"
//   | "organizationMembership.created"
//   | "organizationMembership.deleted"
//   | "organization.updated"
//   | "organization.deleted";

// type Event = {
//   data: Record<string, string | number | Record<string, string>[]>;
//   object: "event";
//   type: EventType;
// };

// export default async (request: Request): Promise<Response> => {
//   const payload = await request.json();
//   const header = headers();

//   const heads = {
//     "svix-id": header.get("svix-id"),
//     "svix-timestamp": header.get("svix-timestamp"),
//     "svix-signature": header.get("svix-signature"),
//   };

//   const wh = new Webhook(process.env.NEXT_CLERK_WEBHOOK_SECRET || "");

//   let evnt: Event | null = null;

//   try {
//     evnt = wh.verify(
//       JSON.stringify(payload),
//       heads as IncomingHttpHeaders & WebhookRequiredHeaders
//     ) as Event;
//   } catch (err) {
//     return new Response(JSON.stringify({ message: err }), { status: 400, headers: { 'Content-Type': 'application/json' } });
//   }

//   const eventType: EventType = evnt?.type!;

//   if (eventType === "organization.created") {
//     const { id, name, slug, logo_url, image_url, created_by } = evnt?.data ?? {};

//     try {
//       // Handle the organization creation event
//       // ...
//       return new Response(JSON.stringify({ message: "User created" }), { status: 201, headers: { 'Content-Type': 'application/json' } });
//     } catch (err) {
//       console.log(err);
//       return new Response(JSON.stringify({ message: "Internal Server Error" }), { status: 500, headers: { 'Content-Type': 'application/json' } });
//     }
//   }

//   // Handle other webhook event types similarly...

//   // For unknown event types, return a 400 Bad Request response
//   return new Response(JSON.stringify({ message: "Unknown Event Type" }), { status: 400, headers: { 'Content-Type': 'application/json' } });
// };
