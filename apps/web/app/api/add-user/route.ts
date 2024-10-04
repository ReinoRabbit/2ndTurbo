import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const name = searchParams.get('name');
  const surname = searchParams.get('surname');
  const age = searchParams.get('age');
  const email = searchParams.get('email');
  const gender = searchParams.get('gender');

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
