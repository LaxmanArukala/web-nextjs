import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export interface LawyerRegistrationDraft {
  fullName: string;
  email: string;
  phone: string;
  password: string;
  barCouncilNumber: string;
  specialization: string;
  yearsOfExperience: string;
  city: string;
  state: string;
  bio: string;
  acceptTerms: boolean;
}

const initialDraft: LawyerRegistrationDraft = {
  fullName: "",
  email: "",
  phone: "",
  password: "",
  barCouncilNumber: "",
  specialization: "",
  yearsOfExperience: "",
  city: "",
  state: "",
  bio: "",
  acceptTerms: false,
};

export interface LawyerRegistrationState {
  draft: LawyerRegistrationDraft;
  activeStep: number;
}

const initialState: LawyerRegistrationState = {
  draft: initialDraft,
  activeStep: 0,
};

const lawyerRegistrationSlice = createSlice({
  name: "lawyerRegistration",
  initialState,
  reducers: {
    updateDraft(state, action: PayloadAction<Partial<LawyerRegistrationDraft>>) {
      state.draft = { ...state.draft, ...action.payload };
    },
    setActiveStep(state, action: PayloadAction<number>) {
      state.activeStep = Math.min(Math.max(action.payload, 0), 2);
    },
    nextStep(state) {
      state.activeStep = Math.min(state.activeStep + 1, 2);
    },
    prevStep(state) {
      state.activeStep = Math.max(state.activeStep - 1, 0);
    },
    resetLawyerRegistration(state) {
      state.draft = { ...initialDraft };
      state.activeStep = 0;
    },
  },
});

export const { updateDraft, setActiveStep, nextStep, prevStep, resetLawyerRegistration } =
  lawyerRegistrationSlice.actions;

export default lawyerRegistrationSlice.reducer;
