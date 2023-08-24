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
import { useState } from "react";

export default function Counter() {
  const count = useAppSelector((state) => state.counterReducer.value);
  const dispatch = useAppDispatch();
  const [amount, setAmount] = useState(0);

  return (
    <div className="w-screen h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full mx-auto py-16">
        <h1 className="text-5xl text-center font-bold mb-6">Counter</h1>

        <div className="px-6 py-4 my-3 w-3/4 mx-auto items-center">
          <div className="mb-4 flex justify-end">
            <span className="text-2xl mr-2 pt-0.5">AMOUNT</span>
            <div className="flex flex-row border h-10 w-24 rounded-lg border-gray-400 relative">
              <button
                className="font-semibold border-r bg-red-700 hover:bg-red-600 text-white border-gray-400 h-full w-20 flex rounded-l focus:outline-none cursor-pointer"
                onClick={() => (amount > 0 ? setAmount(amount - 1) : undefined)}
              >
                <span className="m-auto">-</span>
              </button>
              <input
                type="hidden"
                className="md:p-2 p-1 text-xs md:text-base border-gray-400 focus:outline-none text-center"
                readOnly
                name="custom-input-number"
              />
              <div className="bg-white w-24 text-xs md:text-base flex items-center justify-center cursor-default">
                <span>{amount}</span>
              </div>

              <button
                className="font-semibold border-l  bg-blue-700 hover:bg-blue-600 text-white border-gray-400 h-full w-20 flex rounded-r focus:outline-none cursor-pointer"
                onClick={() => setAmount(amount + 1)}
              >
                <span className="m-auto">+</span>
              </button>
            </div>
          </div>
          <div className="bg-white shadow rounded-md w-full text-center mx-auto">
            <div className="text-2xl">{count}</div>
          </div>
        </div>

        <div className="w-full text-center mx-auto">
          <button
            type="button"
            className="primary-button"
            onClick={() => dispatch(increment())}
          >
            increment
          </button>
          <button
            type="button"
            className="success-button"
            onClick={() => dispatch(decrement())}
          >
            decrement
          </button>
          <button
            type="button"
            className="error-button"
            onClick={() => dispatch(incrementByAmount(amount))}
          >
            incrementByAmount
          </button>
          <button
            type="button"
            className="warning-button"
            onClick={() => dispatch(decrementByAmount(amount))}
          >
            decrementByAmount
          </button>
          <button
            type="button"
            className="info-button"
            onClick={() => dispatch(reset())}
          >
            reset
          </button>
        </div>
      </div>
    </div>
  );
}
