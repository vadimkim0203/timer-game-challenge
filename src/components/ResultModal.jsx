import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";
const ResultModal = forwardRef(function ResultModal(
  { targetTime, remainingTime, onReset },
  ref
) {
  const dialog = useRef();

  const userLost = remainingTime <= 0;
  const formattedRemainingTime = (remainingTime / 1000).toFixed(2);
  const score = Math.round((1 - remainingTime / (targetTime * 1000)) * 100);

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });

  return createPortal(
    <dialog ref={dialog} className="result-modal">
      {/* conditionally render the game result message */}
      {userLost && <h2>졌습니다!</h2>}
      {!userLost && <h2>점수: {score}</h2>}
      <p>
        목표 시간은 <strong>{targetTime}초</strong>였습니다.
      </p>
      <p>
        타이머를 멈춘 시간은{" "}
        <strong>{formattedRemainingTime}초 남았습니다.</strong>
      </p>
      <form method="dialog" onSubmit={onReset} onClose={onReset}>
        <button>닫기</button>
      </form>
    </dialog>,
    document.getElementById("modal")
  );
});

export default ResultModal;
