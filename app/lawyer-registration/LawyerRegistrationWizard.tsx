"use client";

import { useState } from "react";
import { Box } from "@mui/material";
import {
  nextStep,
  prevStep,
  resetLawyerRegistration,
  updateDraft,
} from "../../lib/store/lawyerRegistrationSlice";
import { useAppDispatch, useAppSelector } from "../../lib/store/hooks";
import type { LawyerRegistrationDraft } from "../../lib/store/lawyerRegistrationSlice";
import { SIDE_PANELS } from "./content";
import LawyerRegistrationFormPanel from "./LawyerRegistrationFormPanel";
import LawyerRegistrationSidePanel from "./LawyerRegistrationSidePanel";
import { step0Error, step1Error, step2Error } from "./validation";

export default function LawyerRegistrationWizard() {
  const dispatch = useAppDispatch();
  const { draft, activeStep } = useAppSelector((s) => s.lawyerRegistration);
  const [blockMessage, setBlockMessage] = useState<string | null>(null);

  const panel = SIDE_PANELS[activeStep] ?? SIDE_PANELS[0];

  const setField = (field: keyof LawyerRegistrationDraft, value: string | boolean) => {
    setBlockMessage(null);
    dispatch(updateDraft({ [field]: value } as Partial<LawyerRegistrationDraft>));
  };

  const handleNext = () => {
    if (activeStep === 0) {
      const err = step0Error(draft);
      if (err) {
        setBlockMessage(err);
        return;
      }
    }
    if (activeStep === 1) {
      const err = step1Error(draft);
      if (err) {
        setBlockMessage(err);
        return;
      }
    }
    setBlockMessage(null);
    dispatch(nextStep());
  };

  const handleBack = () => {
    setBlockMessage(null);
    dispatch(prevStep());
  };

  const handleCreateProfile = () => {
    const err = step2Error(draft);
    if (err) {
      setBlockMessage(err);
      return;
    }
    console.log("Lawyer profile payload (wire to API):", { ...draft });
    alert("Profile created (demo). Connect your API here.");
    dispatch(resetLawyerRegistration());
    setBlockMessage(null);
  };

  return (
    <Box
      sx={{
        minHeight: "calc(100dvh - 9rem)",
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        bgcolor: "#f8fafc",
      }}
    >
      <LawyerRegistrationSidePanel activeStep={activeStep} panel={panel} />
      <LawyerRegistrationFormPanel
        activeStep={activeStep}
        draft={draft}
        blockMessage={blockMessage}
        setField={setField}
        onBack={handleBack}
        onNext={handleNext}
        onCreateProfile={handleCreateProfile}
      />
    </Box>
  );
}
