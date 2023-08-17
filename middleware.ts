import { authMiddleware } from "@clerk/nextjs";

// This example protects all routes including api/trpc routes
// Please edit this to allow other routes to be public as needed.
// See https://clerk.com/docs/nextjs/middleware for more information about configuring your middleware

export default authMiddleware({ publicRoutes: ['/', '/api/webhook/clerk', '/chat/40503c02-038b-40ad-8fa8-843a24052abb','/chat/8ad02d54-fc3e-4bd7-96ab-a91e4cc8a1b3','/api/stripe' ], ignoredRoutes: ['/api/webhook/clerk','/chat/40503c02-038b-40ad-8fa8-843a24052abb', '/chat/8ad02d54-fc3e-4bd7-96ab-a91e4cc8a1b3','/api/stripe'], });

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
