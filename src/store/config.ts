import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { createLogger } from "redux-logger"; // 리덕스 상태 콘솔로그 확인 용이

import counterSlice from "./slices/counterSlice";
import todoSlice from "./slices/todoSlice";
import userSlice from "./slices/userSlice";

const logger = createLogger();

const rootReducer = combineReducers({
  conuter: counterSlice.reducer,
  todo: todoSlice.reducer,
  user: userSlice.reducer,
});

const initialState = {};

export const store = configureStore({
  reducer: rootReducer, //리덕스 스토어 설정
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger), //미들웨어 설정 getDefaultMiddleware 미들웨어 설정 X
  devTools: process.env.NODE_ENV !== "production",
  preloadedState: initialState, // 리덕스 스토어 초기값
  enhancers: (defaultEnhancers) => [...defaultEnhancers], // 사용자 정의 미들웨어 설정
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;
