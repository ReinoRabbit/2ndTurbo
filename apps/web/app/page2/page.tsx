"use client";

import { Button } from "@repo/ui/components/ui/button";
import styles from "../page.module.css";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from "@repo/ui/components/ui/navigation-menu";
import Link from "next/link";
import Image from "next/image";
import React from "react";

const Page2 = () => {
  // const [date, setDate] = React.useState<Date | undefined>(new Date());
  const [data, setData] = React.useState<any>(null);
  const [loading, setLoading] = React.useState(false);

  const handleFetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts"); //api for json placeholder data
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.page}>
      <nav>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem className={styles.navbar}>
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>Form Page</NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem className={styles.navbar}>
              <Link href="/page2" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>Fetch Data</NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem className={styles.navbar}>
              <Link href="/page3" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>Page 3</NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem className={styles.navbar}>
              <Link href="/page4" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>Page 4</NavigationMenuLink>
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
        <h1 className={styles.heading}>Fetching Posts from JSON Placeholder</h1>

        <Button onClick={handleFetchData}>Fetch Data</Button>

        {loading && <p>Loading data...</p>}

        {data && (
          <div>
            <h2>Data:</h2>
            <pre>{JSON.stringify(data, null, 2)}</pre>
          </div>
        )}
      </main>

      <footer className={styles.footer}>
        <p>Footer Section</p>
      </footer>
    </div>
  );
};

export default Page2;
