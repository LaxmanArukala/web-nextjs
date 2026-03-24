"use client";

import { ArrowRight, Check } from "lucide-react";
import {
  Box,
  Button,
  FormHelperText,
  Stack,
  Typography,
} from "@mui/material";
import type { LawyerRegistrationDraft } from "../../lib/store/lawyerRegistrationSlice";
import { WIZARD_STEPS } from "./content";
import AccountStepFields from "./steps/AccountStepFields";
import PracticeStepFields from "./steps/PracticeStepFields";
import ReviewStepFields from "./steps/ReviewStepFields";

type Props = Readonly<{
  activeStep: number;
  draft: LawyerRegistrationDraft;
  blockMessage: string | null;
  setField: (field: keyof LawyerRegistrationDraft, value: string | boolean) => void;
  onBack: () => void;
  onNext: () => void;
  onCreateProfile: () => void;
}>;

function stepCircleSx(done: boolean, current: boolean) {
  if (done) {
    return {
      bgcolor: "success.main",
      color: "common.white",
      boxShadow: "0 8px 24px rgba(22, 163, 74, 0.35)",
    };
  }
  if (current) {
    return {
      bgcolor: "primary.main",
      color: "common.white",
      boxShadow: "0 10px 28px rgba(37, 99, 235, 0.4)",
      transform: "scale(1.06)",
    };
  }
  return {
    bgcolor: "grey.200",
    color: "text.secondary",
  };
}

export default function LawyerRegistrationFormPanel({
  activeStep,
  draft,
  blockMessage,
  setField,
  onBack,
  onNext,
  onCreateProfile,
}: Props) {
  return (
    <Box
      sx={{
        flex: 1,
        position: "relative",
        display: "flex",
        flexDirection: "column",
        minHeight: { md: "calc(100dvh - 9rem)" },
        overflow: "auto",
        background:
          "linear-gradient(165deg, #f8fafc 0%, #f1f5f9 35%, #eef2ff 70%, #f8fafc 100%)",
      }}
    >
      {/* Soft grid + glow (decorative) */}
      <Box
        aria-hidden
        sx={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          opacity: 0.55,
          backgroundImage: `
            radial-gradient(circle at 85% 15%, rgba(99, 102, 241, 0.12) 0%, transparent 42%),
            radial-gradient(circle at 10% 80%, rgba(59, 130, 246, 0.1) 0%, transparent 45%),
            linear-gradient(rgba(148, 163, 184, 0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(148, 163, 184, 0.08) 1px, transparent 1px)
          `,
          backgroundSize: "100% 100%, 100% 100%, 24px 24px, 24px 24px",
        }}
      />

      <Stack
        sx={{
          position: "relative",
          zIndex: 1,
          width: "100%",
          maxWidth: 640,
          mx: "auto",
          px: { xs: 2.5, sm: 4, md: 6 },
          py: { xs: 4, md: 6 },
          flex: 1,
        }}
      >
        {/* Title block — no card */}
        <Box sx={{ mb: { xs: 3, md: 4 } }}>
          <Typography
            variant="overline"
            sx={{
              letterSpacing: 2,
              fontWeight: 800,
              color: "primary.main",
              display: "block",
              mb: 1,
            }}
          >
            Lawyer onboarding
          </Typography>
          <Typography
            variant="h4"
            sx={{
              fontWeight: 800,
              letterSpacing: -0.5,
              background: "linear-gradient(120deg, #0f172a 0%, #334155 55%, #4f46e5 100%)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              color: "transparent",
            }}
          >
            Join LegalHub
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mt: 1.5, maxWidth: 520, lineHeight: 1.7 }}>
            Three quick steps. Your public profile is created only when you finish—everything before that stays in
            your session.
          </Typography>
        </Box>

        {/* Custom step rail — circles + connectors (no MUI Stepper box) */}
        <Stack direction="row" alignItems="flex-start" sx={{ mb: 4 }}>
          {WIZARD_STEPS.map((label, i) => {
            const done = i < activeStep;
            const current = i === activeStep;
            const segmentDone = i < activeStep;

            return (
              <Stack key={label} direction="row" alignItems="flex-start" sx={{ flex: 1, minWidth: 0 }}>
                <Stack alignItems="center" sx={{ width: "100%", maxWidth: 120, mx: "auto" }}>
                  <Box
                    sx={{
                      width: 44,
                      height: 44,
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontWeight: 800,
                      fontSize: "0.95rem",
                      transition: "transform 0.2s ease, box-shadow 0.2s ease",
                      ...stepCircleSx(done, current),
                    }}
                  >
                    {done ? <Check size={22} strokeWidth={2.5} aria-hidden /> : i + 1}
                  </Box>
                  <Typography
                    variant="caption"
                    sx={{
                      mt: 1,
                      textAlign: "center",
                      fontWeight: current ? 700 : 500,
                      color: current ? "primary.dark" : "text.secondary",
                      lineHeight: 1.3,
                      px: 0.5,
                    }}
                  >
                    {label}
                  </Typography>
                </Stack>
                {i < WIZARD_STEPS.length - 1 ? (
                  <Box
                    aria-hidden
                    sx={{
                      flex: 1,
                      height: 3,
                      mt: "22px",
                      mx: { xs: 0.25, sm: 1 },
                      borderRadius: 1,
                      minWidth: 8,
                      alignSelf: "flex-start",
                      background: segmentDone
                        ? "linear-gradient(90deg, #22c55e, #4ade80)"
                        : "linear-gradient(90deg, rgba(148,163,184,0.4), rgba(148,163,184,0.15))",
                    }}
                  />
                ) : null}
              </Stack>
            );
          })}
        </Stack>

        {/* Form body — gradient rail, no card */}
        <Box
          sx={{
            position: "relative",
            pl: { xs: 2, sm: 3 },
            ml: { xs: 0.5, sm: 1 },
            "&::before": {
              content: '""',
              position: "absolute",
              left: 0,
              top: 4,
              bottom: 4,
              width: 4,
              borderRadius: 2,
              background: "linear-gradient(180deg, #2563eb 0%, #6366f1 45%, #a855f7 100%)",
              boxShadow: "0 0 20px rgba(99, 102, 241, 0.35)",
            },
          }}
        >
          <Box sx={{ pb: 1 }}>
            {activeStep === 0 && <AccountStepFields draft={draft} setField={setField} />}
            {activeStep === 1 && <PracticeStepFields draft={draft} setField={setField} />}
            {activeStep === 2 && <ReviewStepFields draft={draft} setField={setField} />}
          </Box>
        </Box>

        {blockMessage ? (
          <FormHelperText
            error
            component="div"
            sx={{
              mx: 0,
              mt: 2,
              p: 1.5,
              borderRadius: 2,
              bgcolor: "rgba(254, 242, 242, 0.95)",
              border: "1px solid",
              borderColor: "error.light",
            }}
          >
            {blockMessage}
          </FormHelperText>
        ) : null}

        {/* Action bar — full-width strip */}
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          sx={{
            mt: 4,
            pt: 4,
            gap: 2,
            flexWrap: "wrap",
            borderTop: "1px solid",
            borderColor: "rgba(148, 163, 184, 0.35)",
          }}
        >
          <Button
            disabled={activeStep === 0}
            onClick={onBack}
            variant="text"
            size="large"
            sx={{ color: "text.secondary", fontWeight: 600 }}
          >
            Back
          </Button>
          {activeStep < 2 ? (
            <Button
              variant="contained"
              onClick={onNext}
              size="large"
              endIcon={<ArrowRight size={18} />}
              sx={{
                px: 3,
                borderRadius: 3,
                textTransform: "none",
                fontWeight: 700,
                boxShadow: "0 12px 32px rgba(37, 99, 235, 0.35)",
                background: "linear-gradient(135deg, #2563eb 0%, #4f46e5 100%)",
              }}
            >
              Continue
            </Button>
          ) : (
            <Button
              variant="contained"
              color="primary"
              onClick={onCreateProfile}
              size="large"
              sx={{
                px: 3,
                borderRadius: 3,
                textTransform: "none",
                fontWeight: 700,
                boxShadow: "0 12px 32px rgba(37, 99, 235, 0.35)",
                background: "linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)",
              }}
            >
              Create profile
            </Button>
          )}
        </Stack>
      </Stack>
    </Box>
  );
}
