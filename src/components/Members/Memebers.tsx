import { SmartLink } from "../link/SmartLink";
import styles from "./Memebers.module.css";

type Member = {
  name: string;
  github?: string;
  x?: string;
  site?: string;
  bio?: string;
};
export function Members() {

  const members: Member[] = [
    { name: "Uliboooo", github: "https://github.com/Uliboooo", x: "https://x.com/Uliboooo", site: "https://about.uliboooo.dev/" },
    { name: "八取來亜", github: "https://github.com/liar2357", x: "https://x.com/Raia_Hattori", site: "https://zenn.dev/raia_hattori" }
  ];

  return (
    <>
      <h2>Members <span className="jp">/ メンバー</span></h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {members.map((m) => (
          <li key={m.name}>
            <div className={styles.mem_content}>
              <p>{m.name}</p>
              {easyLinkGen("github", m.github)}
              {easyLinkGen("x", m.x)}
              {easyLinkGen("site", m.site)}
            </div>
          </li>
        ))}
      </ul>
    </>
  )
}

function easyLinkGen<K extends keyof Member>(
  key: K,
  value?: Member[K]
) {
  if (typeof value === "string" && value.trim()) {
    return <SmartLink href={value}>{key}</SmartLink>;
  }
}
