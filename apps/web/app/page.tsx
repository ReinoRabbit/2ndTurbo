"use client";

import Image from "next/image";
// import { Button } from "@repo/ui/button";
import styles from "./page.module.css";
import { Button } from "@repo/ui/components/ui/button";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from "@repo/ui/components/ui/navigation-menu";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import Link from "next/link";
import { Alert, AlertDescription, AlertTitle } from "@repo/ui/components/ui/alert";
import { useRouter } from 'next/router';

export default function Home() {

  // State variables for form fields
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
  
    const data = {
      name,
      surname,
      age,
      email,
      gender
    };
  
    try {
      const response = await fetch('/api/add-user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
  
      if (response.ok) {
        const result = await response.json();
        console.log('User added successfully:', result);
        alert('User added successfully');
      } else {
        const errorData = await response.json();
        console.error('Error:', errorData);
        alert('Error adding user');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An unexpected error occurred');
    }
  };

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

      {/*=======================================================*/}
      
      <main className={styles.main}>

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

        <form onSubmit={handleSubmit}>
          <table className={styles.table}>
            <tbody>
              <tr>
                <td className={styles.td}><b>Enter your Name:</b></td>
                <td className={styles.td}>
                  <input type="text" className={styles.inputField} value={name} onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)}/>
                </td>
              </tr>
              <tr>
                <td className={styles.td}><b>Enter your Surname:</b></td>
                <td className={styles.td}>
                  <input type="text" className={styles.inputField} value={surname} onChange={(e: ChangeEvent<HTMLInputElement>) => setSurname(e.target.value)}/>
                </td>
              </tr>
              <tr>
                <td className={styles.td}><b>Enter your Age:</b></td>
                <td className={styles.td}>
                  <input type="number" className={styles.inputField} value={age} onChange={(e: ChangeEvent<HTMLInputElement>) => setAge(e.target.value)}/>
                </td>
              </tr>
              <tr>
                <td className={styles.td}><b>Enter your Email:</b></td>
                <td className={styles.td}>
                  <input type="email" className={styles.inputField} value={email} onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}/>
                </td>
              </tr>
              <tr>
                <td className={styles.td}><b>Select your Gender:</b></td>
                <td className={styles.td}>
                  <select className={styles.optionsDrop} value={gender} onChange={(e: ChangeEvent<HTMLSelectElement>) => setGender(e.target.value)}>
                    <option className={styles.optionsDrop} value="N/A" defaultValue={"Select"}>Select</option>
                    <option className={styles.optionsDrop} value="Male">Male</option>
                    <option className={styles.optionsDrop} value="Female">Female</option>
                  </select>
                </td>
              </tr>
            </tbody>
          </table>
          <br />
          <Button className={styles.buttonClick} variant="default"><a href=""></a>Submit Form</Button>
          {/* http://localhost:3000/api/add-user?name=John&surname=Doe&age=30&email=johndoe@example.com&gender=Male */}
          {/* http://localhost:3000/api/add-user?name=Jane&surname=Smith&age=25&email=janesmith@example.com&gender=Female */}
          {/* http://localhost:3000/api/add-user?name=Reino&surname=Powell&age=23&email=rpowell@example.com&gender=Male */}
        </form>
        {/*=======================================================*/} 

        <br />
        
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
