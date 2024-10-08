import { PrismaClient } from '@repo/db';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function POST(request: Request) {
  const { name, surname, age, email, gender } = await request.json();

  try {
    // Validate that all required fields are provided
    if (!name || !surname || !age || !email || !gender) {
      return NextResponse.json({ error: 'All fields (name, surname, age, email, gender) are required' }, { status: 400 });
    }

    // Insert new user into the database using Prisma
    const newUser = await prisma.user.create({
      data: {
        name,
        surname,
        age: parseInt(age, 10), // Ensure age is a number
        email,
        gender
      },
    });

    // Fetch all users from the "users" table after adding the new user
    const users = await prisma.user.findMany();

    // Return the new user and all users as JSON
    return NextResponse.json({ newUser, users }, { status: 201 });

  } catch (error) {
    console.error("Error adding user:", error);
    return NextResponse.json({ error: 'Failed to add user' }, { status: 500 });
  }
}

// import { sql } from '@vercel/postgres';
// import { NextResponse } from 'next/server';

// export async function POST(request: Request) {
//   const { name, surname, age, email, gender } = await request.json();

//   try {
//     // Validate that all required fields are provided
//     if (!name || !surname || !age || !email || !gender) {
//       throw new Error('All fields (name, surname, age, email, gender) are required');
//     }

//     // Insert the form data into the "users" table
//     await sql`
//       INSERT INTO users (name, surname, age, email, gender)
//       VALUES (${name}, ${surname}, ${age}, ${email}, ${gender});
//     `;

//   } catch (error) {
//     return NextResponse.json({ error }, { status: 500 });
//   }

//   // Fetch all users from the "users" table
//   const users = await sql`SELECT * FROM users;`;

//   return NextResponse.json({ users }, { status: 200 });
// }