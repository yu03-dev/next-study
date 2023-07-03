"use client";

import { useCallback, useEffect, useState } from "react";
import { Header } from "../_components/Header";
import { Etc } from "../_components/Etc";
import styles from "../page.module.css";

export default function Todo() {
  return (
    <main className={styles.main}>
      <Header />
      <Etc />
    </main>
  );
}
