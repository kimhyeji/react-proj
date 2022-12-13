import React, { useState } from "react";

function StopWatch() {
  const [num, setNum] = useState(0);

  const timeoutId = setTimeout(() => setNum(num + 1), 1000);

  const pause = () => {
    console.log("일시정지");
    clearTimeout(timeoutId);
  };

  const resume = () => {
    console.log("재개");
    setTimeout(() => setNum(num + 1), 1000);
  };

  return (
    <>
      숫자 : {num}
      <hr />
      <button onClick={pause}>일시정지</button>
      <hr />
      <button onClick={resume}>재개</button>
    </>
  );
}

export default StopWatch;
