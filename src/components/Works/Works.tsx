import { SmartLink } from "../link";
import styles from "./Works.module.css"

type Status = "Plan" | "Doing" | "Done";
type Works = {
  title: string;
  status: Status;
  desc: string;
  url?: string[];
};

export function Works() {
  const works: Works[] = [
    {
      title: "Linux documentation for begginners",
      status: "Doing",
      desc: "このサイトは「Linuxを始めたいけど何から始めればいいのか分からない！」というあなたをお手伝いするサイトです。",
      url: ["https://github.com/linux-club-tid/linux-docs-next", "https://linux-docs-next.pages.dev/"]
    },
    {
      title: "学園祭でのLinux体験会(仮)", status: "Plan", desc: "詳細未定"
    }
  ];
  return (
    <>
      <h2>Works <span className="jp">/ 実績</span></h2>

      <ul className={styles.achivement_list}>
        {works.map((a) => (
          <li key={a.title}>
            <div className={styles.achivement_el}>
              <p className={styles.work_title}>{a.title}</p>
              <p className={styles.work_status}>Status: {a.status}</p>
              <p>{a.url && <LinkGen urls={a.url} />}</p>


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

function LinkGen({ urls }: { urls: string[] }) {
  const get_domain = (url: string): string => {
    const host = new URL(url).hostname;
    return host;
  };

  return (
    <>
      {urls.map((url, index) => (
        // mapの中では一意のkeyが必要です
        <SmartLink href={url} key={index}>
          {get_domain(url)}
        </SmartLink>
      ))}
    </>
  );
}

