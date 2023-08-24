import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

// 객체의 타입의 이름을 지정
interface CounterState {
  value: number;
}

// defaultState
const initialState: CounterState = {
  value: 0
};

export const counterSlice = createSlice({
  name: "counter", // string 을 넣어 prefix 로 사용
  initialState, // defaultState 가 들어감
  // reducer 함수는 액션에 따라 상태를 변경하는 역할
  reducers: {
    reset: () => initialState,
    increment: (state: CounterState) => {
      state.value += 1;
    },
    decrement: (state: CounterState) => {
      state.value -= 1;
    },
    incrementByAmount: (state: CounterState, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
    decrementByAmount: (state: CounterState, action: PayloadAction<number>) => {
      state.value -= action.payload;
    }
  }
});

export const {
  increment,
  incrementByAmount,
  decrement,
  decrementByAmount,
  reset
} = counterSlice.actions;

export default counterSlice.reducer;
