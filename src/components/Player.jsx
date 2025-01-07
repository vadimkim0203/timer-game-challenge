import { useState, useRef } from "react";

export default function Player() {
  const newPlayerName = useRef();
  const [playerName, setPlayerName] = useState("");

  function handleClick() {
    setPlayerName(newPlayerName.current.value);
  }
  return (
    <section id="player">
      <h2>환영합니다 {playerName ? `${playerName}님` : "알 수 없는 존재"}</h2>
      <p>
        <input ref={newPlayerName} type="text" />
        <button onClick={handleClick}>이름 설정</button>
      </p>
    </section>
  );
}
