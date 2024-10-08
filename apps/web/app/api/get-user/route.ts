import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function GET() {
  try {
    // Fetch all users from the "users" table using Prisma
    const users = await prisma.user.findMany();

    // Set cache-control headers to disable caching
    const headers = new Headers();
    headers.set("Cache-Control", "no-store, no-cache, must-revalidate, proxy-revalidate");

    // Return users as JSON
    return NextResponse.json({ users }, { status: 200, headers });

  } catch (error) {
    console.error("Error fetching users:", error);
    return NextResponse.json({ error: 'Failed to fetch users' }, { status: 500 });
  }
}

// export async function GET(request: Request) {
//     try {
//       // Fetch all users from the "users" table
//       const users = await sql`SELECT * FROM users;`;

//       // Set cache-control headers to disable caching
//       const headers = new Headers();
//       headers.set("Cache-Control", "no-store, no-cache, must-revalidate, proxy-revalidate");

//       // Ensure users are returned as an array in the response
//       return NextResponse.json({ users: users.rows }, {
//         status: 200,
//         headers
//       }); 
//     } catch (error) {
//       return NextResponse.json({ error: 'Failed to fetch users' }, { status: 500 });
//     }
// }
