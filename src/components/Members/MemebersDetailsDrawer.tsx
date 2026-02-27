import styles from './MemebersDetailsDrawer.module.css';

export const MemberDetailDrawer = ({ member, onClose }: { member: any, onClose: () => void }) => {
  return (
    <>
      <div
        className={`${styles.overlay} ${member ? styles.active : ''}`}
        onClick={onClose}
      />

      {/* 右からのスライドパネル */}
      <div className={`${styles.drawer} ${member ? styles.open : ''}`}>
        <button className={styles.close_btn} onClick={onClose}>×</button>

        {member && (
          <div className={styles.content}>
            <h3>{member.name}</h3>
            <p className={styles.role}>{member.role || "Member"}</p>
            <div className={styles.bio}>
              {member.bio || "詳細情報はまだ登録されていません。"}
            </div>
            {/* ここにSNSリンクの再掲などがあっても良い */}
          </div>
        )}
      </div>
    </>
  );
};
