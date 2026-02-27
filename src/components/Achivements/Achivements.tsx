import { SmartLink } from "../link";
import styles from "./Achivements.module.css"

type Status = "Plan" | "Doing" | "Done";
type Achivement = {
  title: string;
  status: Status;
  desc: string;
  url?: string;
};

export function Achivements() {
  const achivements: Achivement[] = [
    {
      title: "Linux documentation for begginners", status: "Doing", desc: "このサイトは「Linuxを始めたいけど何から始めればいいのか分からない！」というあなたをお手伝いするサイトです。", url: "https://github.com/linux-club-tid/linux-docs"
    },
    {
      title: "学園祭でのLinux体験会(仮)", status: "Plan", desc: "詳細未定"
    }
  ];
  return (
    <>
      <h2>Achivements <span className="jp">/ 実績</span></h2>

      <ul className={styles.achivement_list}>
        {achivements.map((a) => (
          <li key={a.title}>
            <div className={styles.achivement_el}>
              <p>{a.title} - Status: {a.status}     {easyLinkGen("url", a.url)} </p>

              <div className={styles.sub}>
                <p className={styles.desc}>{a.desc}</p>
              </div>
            </div>
          </li>
        ))}
      </ul >
    </>
  )
}

function easyLinkGen<K extends keyof Achivement>(
  key: K,
  value?: Achivement[K]
) {
  if (typeof value === "string" && value.trim()) {
    return <SmartLink href={value}>{key}</SmartLink>;
  }
}

