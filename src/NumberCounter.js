import React, { useState } from "react";

function NumberCounter() {
  const [no, setNo] = useState(0);

  const noIsEvenDiv =
    no % 2 == 0 ? (
      <>
        <hr />
        <sapn>짝수입니다.</sapn>
      </>
    ) : (
      <></>
    );

  return (
    <>
      숫자 : {no}
      <hr />
      <button onClick={() => setNo(no + 1)}>증가</button>
      {noIsEvenDiv}
      {no % 8 == 0 ? (
        <>
          <hr />
          <sapn>8의 배수입니다.</sapn>
        </>
      ) : (
        <></>
      )}
    </>
  );
}

export default NumberCounter;
