"use client";

import Image from "next/image";
// import { Button } from "@repo/ui/button";
import styles from "./page.module.css";
import { Button } from "@repo/ui/components/ui/button";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from "@repo/ui/components/ui/navigation-menu";
import { ChangeEvent, FormEvent, useEffect } from "react";
import Link from "next/link";
import { Alert, AlertDescription, AlertTitle } from "@repo/ui/components/ui/alert";
import { useRouter } from 'next/router';

export default function Home() {

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    alert("Form has been submitted");
  }


  return (
    <div className={styles.page}>
      {/* navigation goes here */}
      {/*=======================================================*/}

      {/* <NavigationMenu /> */}
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
                  Page 3
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

      {/*=======================================================*/}
      
      <main className={styles.main}>
        {/* <ul>
          <li><a href="/page2">page 2</a></li>
        </ul> */} 
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />

        {/*=======================================================*/}
        <h1 className={styles.heading}>Please fill in this form</h1>
        {/* <form>
          <label><b>Enter your Name :</b>&nbsp;&nbsp; 
            <input type="text" className={styles.inputField}/>
          </label> <br />
          <label><b>Enter your Surname :</b>&nbsp;&nbsp;
            <input type="text" className={styles.inputField}/>
          </label> <br />
          <label><b>Enter your Age :</b>&nbsp;&nbsp;
            <input type="number" className={styles.inputField}/>
          </label> <br />
          <label><b>Enter your Email  :</b>&nbsp;&nbsp;
            <input type="email" className={styles.inputField}/>
          </label> <br />
          <label><b>Select your Gender  :</b>&nbsp;&nbsp;
            <select className={styles.optionsDrop}>
              <option className={styles.optionsDrop} value="N/A" defaultValue={"Select"}>Select</option>
              <option className={styles.optionsDrop} value="Male">Male</option>
              <option className={styles.optionsDrop} value="Femaile">Female</option>
            </select>
          </label>
        </form> */}
        <form onSubmit={handleSubmit}>
          <table className={styles.table}>
            <tbody>
              <tr>
                <td className={styles.td}><b>Enter your Name:</b></td>
                <td className={styles.td}>
                  <input type="text" className={styles.inputField} />
                </td>
              </tr>
              <tr>
                <td className={styles.td}><b>Enter your Surname:</b></td>
                <td className={styles.td}>
                  <input type="text" className={styles.inputField} />
                </td>
              </tr>
              <tr>
                <td className={styles.td}><b>Enter your Age:</b></td>
                <td className={styles.td}>
                  <input type="number" className={styles.inputField} />
                </td>
              </tr>
              <tr>
                <td className={styles.td}><b>Enter your Email:</b></td>
                <td className={styles.td}>
                  <input type="email" className={styles.inputField} />
                </td>
              </tr>
              <tr>
                <td className={styles.td}><b>Select your Gender:</b></td>
                <td className={styles.td}>
                  <select className={styles.optionsDrop}>
                    <option className={styles.optionsDrop} value="N/A" defaultValue={"Select"}>Select</option>
                    <option className={styles.optionsDrop} value="Male">Male</option>
                    <option className={styles.optionsDrop} value="Female">Female</option>
                  </select>
                </td>
              </tr>
            </tbody>
          </table>
          <br />
          <Button className={styles.buttonClick} variant="default">Submit Form</Button>
        </form>
        {/*=======================================================*/} 

        <br />

        {/* <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <ol>
          <li>
            Get started by editing <code>app/page.tsx</code>
          </li>
          <li>Save and see your changes instantly.</li>
        </ol>

        <div className={styles.ctas}>
          <a
            className={styles.primary}
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className={styles.logo}
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Deploy now
          </a>
          <a
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.secondary}
          >
            Read our docs
          </a>
        </div> */}
        {/* <Button appName="web" className={styles.secondary}>
          Open alert
        </Button> */}
        
      </main>

      <footer className={styles.footer}>
        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file-text.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learns
        </a>
        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>

    </div>
  );
}
