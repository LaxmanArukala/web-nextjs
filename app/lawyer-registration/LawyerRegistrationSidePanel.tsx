"use client";

import { Box, Button, Chip, Stack, Typography } from "@mui/material";
import { Scale } from "lucide-react";
import Link from "next/link";
import type { SidePanelCopy } from "./content";
import LawyerRegistrationSidePanelBackground from "./LawyerRegistrationSidePanelBackground";

type Props = Readonly<{
  activeStep: number;
  panel: SidePanelCopy;
}>;

export default function LawyerRegistrationSidePanel({ activeStep, panel }: Props) {
  return (
    <Box
      sx={{
        position: "relative",
        flex: { md: "0 0 42%" },
        maxWidth: { md: 520 },
        px: { xs: 3, sm: 4, md: 5 },
        py: { xs: 4, md: 6 },
        color: "#fff",
        overflow: "hidden",
        background: "linear-gradient(160deg, #0c1929 0%, #1e3a5f 38%, #3730a3 88%)",
      }}
    >
      <LawyerRegistrationSidePanelBackground />

      <Stack spacing={3} sx={{ position: "relative", zIndex: 1, height: "100%" }}>
        <Stack direction="row" alignItems="center" justifyContent="space-between" flexWrap="wrap" gap={1}>
          <Stack direction="row" alignItems="center" gap={1.25}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: 44,
                height: 44,
                borderRadius: 2,
                bgcolor: "rgba(255,255,255,0.12)",
                border: "1px solid rgba(255,255,255,0.2)",
              }}
            >
              <Scale size={22} aria-hidden />
            </Box>
            <Box>
              <Typography variant="caption" sx={{ letterSpacing: 1.2, opacity: 0.85, fontWeight: 600 }}>
                LEGALHUB
              </Typography>
              <Typography variant="body2" sx={{ opacity: 0.9, fontWeight: 500 }}>
                Lawyer onboarding
              </Typography>
            </Box>
          </Stack>
          <Button
            component={Link}
            href="/"
            size="small"
            sx={{
              color: "white",
              borderColor: "rgba(255,255,255,0.35)",
              "&:hover": { borderColor: "rgba(255,255,255,0.6)", bgcolor: "rgba(255,255,255,0.06)" },
            }}
            variant="outlined"
          >
            Home
          </Button>
        </Stack>

        <Chip
          label={`Step ${activeStep + 1} of 3`}
          size="small"
          sx={{
            alignSelf: "flex-start",
            bgcolor: "rgba(255,255,255,0.12)",
            color: "white",
            fontWeight: 600,
            border: "1px solid rgba(255,255,255,0.2)",
          }}
        />

        <Box>
          <Typography
            variant="overline"
            sx={{ color: "rgba(147,197,253,0.95)", fontWeight: 700, letterSpacing: 1 }}
          >
            {panel.eyebrow}
          </Typography>
          <Typography
            variant="h4"
            sx={{ mt: 1, fontWeight: 800, lineHeight: 1.2, fontSize: { xs: "1.65rem", md: "2rem" } }}
          >
            {panel.title}
          </Typography>
          <Typography
            variant="body1"
            sx={{ mt: 2, color: "rgba(226,232,240,0.95)", lineHeight: 1.7, fontSize: "0.95rem" }}
          >
            {panel.lede}
          </Typography>
        </Box>

        <Stack spacing={2}>
          {panel.bullets.map(({ Icon, text }) => (
            <Stack key={text} direction="row" spacing={1.5} alignItems="flex-start">
              <Box
                sx={{
                  mt: 0.25,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 36,
                  height: 36,
                  borderRadius: 2,
                  bgcolor: "rgba(255,255,255,0.08)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  flexShrink: 0,
                }}
              >
                <Icon size={18} strokeWidth={2} aria-hidden />
              </Box>
              <Typography variant="body2" sx={{ color: "rgba(241,245,249,0.95)", lineHeight: 1.65 }}>
                {text}
              </Typography>
            </Stack>
          ))}
        </Stack>

        <Box sx={{ mt: "auto", pt: 2 }}>
          <Typography variant="caption" sx={{ color: "rgba(148,163,184,0.95)", display: "block" }}>
            Progress is saved in your session until you finish—so you can complete this in one sitting or return after
            a break.
          </Typography>
        </Box>
      </Stack>
    </Box>
  );
}
