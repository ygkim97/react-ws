/*
 * useDispatch, useSelect hooks 의 typed versions 생성
 * 잠재적인 circular import dependency 문제 방지 및 앱 전체에서 hooks 를 더 쉽게 사용 가능
 */

import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "./store";

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
