import React, { useEffect, useState } from "react";
import { subscribeMsgData } from "../../ros/toppic/msg_log";
import style from '../../css/content/access/cv_log.module.css'

export default function CvLog() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const unsubscribe = subscribeMsgData((msg) => {
      setMessages((prevMessages) => {
        const filtered = prevMessages.filter((m) => m !== msg);
        const updated = [msg, ...filtered];
        return updated.slice(0, 10); // ✅ แสดง 10 ข้อความ
      });
    });

    return () => unsubscribe();
  }, []);

  // แบ่งเป็น 2 กลุ่ม: ซ้ายขวา
  const leftColumn = messages.slice(0, 5);
  const rightColumn = messages.slice(5, 10);

  return (
    <div>
      <p className={style.head}>ข้อความจาก ROS</p>
      <div className={style.logContainer}>
        <div className={style.column}>
          {leftColumn.map((msg, index) => (
            <p className={style.text} key={`left-${index}`}>{msg}</p>
          ))}
        </div>
        <div className={style.column}>
          {rightColumn.map((msg, index) => (
            <p className={style.text} key={`right-${index}`}>{msg}</p>
          ))}
        </div>
      </div>
    </div>
  );
}
