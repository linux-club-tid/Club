import type React from "react";
import { Header } from "./Header/Header";
import { Footer } from "./Footer/Footer";
import styles from "./Layout.module.css";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.cont}>
      <Header />
      <main >
        <div className={styles.mainContent}>
          {children}
        </div>
      </main>
      <Footer />
    </div>
  )
}
