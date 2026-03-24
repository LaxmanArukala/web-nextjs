import { configureStore } from "@reduxjs/toolkit";
import lawyerRegistrationReducer from "./lawyerRegistrationSlice";

export function makeStore() {
  return configureStore({
    reducer: {
      lawyerRegistration: lawyerRegistrationReducer,
    },
  });
}

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
