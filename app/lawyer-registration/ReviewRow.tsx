"use client";

import { Stack, Typography } from "@mui/material";

export default function ReviewRow({ label, value }: Readonly<{ label: string; value: string }>) {
  return (
    <Stack direction={{ xs: "column", sm: "row" }} spacing={1}>
      <Typography variant="caption" color="text.secondary" sx={{ minWidth: 140 }}>
        {label}
      </Typography>
      <Typography variant="body2" fontWeight={600}>
        {value || "—"}
      </Typography>
    </Stack>
  );
}
