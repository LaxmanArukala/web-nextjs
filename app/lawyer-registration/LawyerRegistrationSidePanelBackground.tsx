"use client";

import { Box } from "@mui/material";

/** Gradient mesh + blur orbs (purely decorative). */
export default function LawyerRegistrationSidePanelBackground() {
  return (
    <>
      <Box
        aria-hidden
        sx={{
          position: "absolute",
          inset: 0,
          opacity: 0.35,
          backgroundImage: `radial-gradient(circle at 20% 20%, rgba(255,255,255,0.12) 0, transparent 45%),
            radial-gradient(circle at 80% 10%, rgba(96,165,250,0.25) 0, transparent 40%),
            radial-gradient(circle at 60% 90%, rgba(167,139,250,0.2) 0, transparent 45%)`,
        }}
      />
      <Box
        aria-hidden
        sx={{
          position: "absolute",
          top: -60,
          right: -40,
          width: 220,
          height: 220,
          borderRadius: "50%",
          background: "rgba(255,255,255,0.06)",
          filter: "blur(32px)",
        }}
      />
      <Box
        aria-hidden
        sx={{
          position: "absolute",
          bottom: 40,
          left: -30,
          width: 180,
          height: 180,
          borderRadius: "50%",
          background: "rgba(59,130,246,0.15)",
          filter: "blur(28px)",
        }}
      />
    </>
  );
}
