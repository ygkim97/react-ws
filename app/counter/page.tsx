/*
 * "use client" 지시문은 server 와 client component 모듈 그래프 사이의 경계를 선언하는 규칙
 * Next.js 13 에서는 모든 컴포넌트가 server-side component 이므로, client-side component 로 작성하기 위해서는 해당 지시문 import 전에 파일의 최상단에 정의
 * 모든 파일에 정의할 필요가 없이 클라이언트 모듈 경계는 한번만 진입점에서 정의해주면 그안으로 import 된 모든 모듈이 client-side component 로 간주
 */

"use client";

import {
  decrement,
  decrementByAmount,
  increment,
  incrementByAmount,
  reset
} from "@/redux/features/counterSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";

export default function Home() {
  const count = useAppSelector((state) => state.counterReducer.value);
  const dispatch = useAppDispatch();

  return (
    <main style={{ maxWidth: 1200, marginInline: "auto", padding: 20 }}>
      <div
        style={{
          marginBottom: "4rem",
          textAlign: "center"
        }}
      >
        <h4 style={{ marginBottom: 16 }}>{count}</h4>
        <div
          style={{
            margin: "0px 200px",
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr",
            columnGap: "10px"
          }}
        >
          <button onClick={() => dispatch(increment())}>increment</button>
          <button onClick={() => dispatch(decrement())}>decrement</button>
          <button onClick={() => dispatch(incrementByAmount(2))}>
            incrementByAmount
          </button>
          <button onClick={() => dispatch(decrementByAmount(2))}>
            decrementByAmount
          </button>
          <button onClick={() => dispatch(reset())}>reset</button>
        </div>
      </div>
    </main>
  );
}
