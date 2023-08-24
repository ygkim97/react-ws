/*
 * Next.js 13 에서는 모든 컴포넌트가 server-side component 이므로,
 * client-side 에 있는 custom provider component 를 생성해 이를 자식 노드에 감싸는 것이 필요
 */

"use client";

import { store } from "./store";
import { Provider } from "react-redux";
import React from "react";

export function Providers({ children }: { children: React.ReactNode }) {
  return <Provider store={store}>{children}</Provider>;
}
