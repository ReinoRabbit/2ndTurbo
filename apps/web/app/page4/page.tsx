"use client";

import { Button } from "@repo/ui/components/ui/button";
import styles from "../page.module.css";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from "@repo/ui/components/ui/navigation-menu";
import Link from "next/link";
import Image from "next/image";

const Page4 =()=> {
  return (
    <div className={styles.page}>
        <nav>
        <NavigationMenu>
          <NavigationMenuList>
            
          <NavigationMenuItem className = {styles.navbar}>
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Form Page
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem className = {styles.navbar}>
              <Link href="/page2" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Fetch Data
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem className = {styles.navbar}>
              <Link href="/page3" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Display user data
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem className = {styles.navbar}>
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
        <h1 className={styles.heading}>This is page 4</h1>



      </main>
      <footer className={styles.footer}>
        <p>Footer Section</p>




      </footer>
    </div>
  );
}

export default Page4;