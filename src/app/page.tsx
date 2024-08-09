"use client"

import Link from "next/link";
import styles from "./page.module.css";
import React, { useState } from 'react'

export default function Home (){



  return (
    <div className={styles.main}>
      <Link rel="stylesheet" href="/login" > <h1>Login to your dashboard</h1> </Link>
 </div>
  );
}


