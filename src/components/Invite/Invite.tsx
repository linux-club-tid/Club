import { useDarkMode } from "../../hooks/useDarkMode";
import { SmartLink } from "../link/SmartLink";
import styles from './Invite.module.css'

export function Invite() {
  const isDarkMode = useDarkMode();

  return (
    <>
      <h2>Invite <span className="jp">/ 参加</span></h2>
      <p>参加はこちら</p>
      <div className={styles.invite_title}>
        <p>Dircord</p>
        <SmartLink href='https://discord.gg/Cx6FG4CtBF'>招待URL</SmartLink>
      </div>
      <div>
        <img src={isDarkMode ? '../public/images/qr_dark.webp' : '../public/images/qr.webp'}
          alt="discord invite qrcode"
        />
      </div>
    </>
  )
}
