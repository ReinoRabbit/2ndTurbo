import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
    try {
      // Fetch all users from the "users" table
      const users = await sql`SELECT * FROM users;`;

      // Set cache-control headers to disable caching
      const headers = new Headers();
      headers.set("Cache-Control", "no-store, no-cache, must-revalidate, proxy-revalidate");

      // Ensure users are returned as an array in the response
      return NextResponse.json({ users: users.rows }, {
        status: 200,
        headers
      }); 
    } catch (error) {
      return NextResponse.json({ error: 'Failed to fetch users' }, { status: 500 });
    }
}
