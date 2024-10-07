import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const { name, surname, age, email, gender } = await request.json();

  try {
    // Validate that all required fields are provided
    if (!name || !surname || !age || !email || !gender) {
      throw new Error('All fields (name, surname, age, email, gender) are required');
    }

    // Insert the form data into the "users" table
    await sql`
      INSERT INTO users (name, surname, age, email, gender)
      VALUES (${name}, ${surname}, ${age}, ${email}, ${gender});
    `;

  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }

  // Fetch all users from the "users" table
  const users = await sql`SELECT * FROM users;`;

  return NextResponse.json({ users }, { status: 200 });
}

// export async function GET(request: Request) {
//   try {
//     // Fetch all users from the "users" table
//     const users = await sql`SELECT * FROM users;`;

//     // Ensure users are returned as an array in the response
//     return NextResponse.json({ users: users.rows }, { status: 200 }); 
//   } catch (error) {
//     return NextResponse.json({ error: 'Failed to fetch users' }, { status: 500 });
//   }
// }