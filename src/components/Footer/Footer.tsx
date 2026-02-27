import { SmartLink } from "../link";
import styles from "./Footer.module.css"

export function Footer() {
  return (
    <header>
      <div className={styles.content}>
        <p>© 2026 Linux_club_tid.</p>
        <p><SmartLink href="https://github.com/linux-club-tid/Club">View Source</SmartLink></p>
      </div>
    </header>
  )
}
