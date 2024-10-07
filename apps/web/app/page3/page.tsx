"use client";

import { Button } from "@repo/ui/components/ui/button";
import styles from "../page.module.css";
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, navigationMenuTriggerStyle } from "@repo/ui/components/ui/navigation-menu";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

interface User {
  id: number;
  name: string;
  surname: string;
  age: number;
  email: string;
  gender: string;
}

const Page3 = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/get-user");
        const data = await response.json();
        
        console.log("API Response:", data);  // Debug the structure of the response
        if (Array.isArray(data.users)) {
          setUsers(data.users); // Only set users if it's an array
        } else {
          console.error("Users is not an array");
          setUsers([]); // Set to empty array if the response is not as expected
        }
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };
  
    fetchData();
  }, []);

  return (
    <div className={styles.page}>
      <nav>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem className={styles.navbar}>
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Form Page
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem className={styles.navbar}>
              <Link href="/page2" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Fetch Data
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem className={styles.navbar}>
              <Link href="/page3" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Display user data
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem className={styles.navbar}>
              <Link href="/page4" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Page 4
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </nav>

      <main className={styles.main}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <h1 className={styles.heading}>User List</h1>

        {users.length === 0 ? (
          <p>No users available</p>
        ) : (
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Name</th>
                <th>Surname</th>
                <th>Age</th>
                <th>Email</th>
                <th>Gender</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td>{user.name}</td>
                  <td>{user.surname}</td>
                  <td>{user.age}</td>
                  <td>{user.email}</td>
                  <td>{user.gender}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </main>

      <footer className={styles.footer}>
        <p>Footer Section</p>
      </footer>
    </div>
  );
};

export default Page3;
