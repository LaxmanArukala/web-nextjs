"use client";

import { Stack, TextField, Typography } from "@mui/material";
import type { LawyerRegistrationDraft } from "../../../lib/store/lawyerRegistrationSlice";
import { textFieldSx } from "../content";

type Props = Readonly<{
  draft: LawyerRegistrationDraft;
  setField: (field: keyof LawyerRegistrationDraft, value: string | boolean) => void;
}>;

export default function PracticeStepFields({ draft, setField }: Props) {
  return (
    <Stack spacing={2.5}>
      <Typography variant="subtitle2" color="primary" fontWeight={700} letterSpacing={0.3}>
        Practice details
      </Typography>
      <TextField
        label="Bar council / enrollment number"
        value={draft.barCouncilNumber}
        onChange={(e) => setField("barCouncilNumber", e.target.value)}
        fullWidth
        required
        sx={textFieldSx}
      />
      <TextField
        label="Practice area / specialization"
        value={draft.specialization}
        onChange={(e) => setField("specialization", e.target.value)}
        fullWidth
        required
        sx={textFieldSx}
        helperText="Examples: Civil litigation, family law, startup compliance."
      />
      <TextField
        label="Years of experience"
        value={draft.yearsOfExperience}
        onChange={(e) => setField("yearsOfExperience", e.target.value)}
        fullWidth
        required
        sx={textFieldSx}
        slotProps={{ htmlInput: { inputMode: "decimal" } }}
      />
      <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
        <TextField
          label="City"
          value={draft.city}
          onChange={(e) => setField("city", e.target.value)}
          fullWidth
          required
          sx={textFieldSx}
        />
        <TextField
          label="State"
          value={draft.state}
          onChange={(e) => setField("state", e.target.value)}
          fullWidth
          required
          sx={textFieldSx}
        />
      </Stack>
    </Stack>
  );
}
