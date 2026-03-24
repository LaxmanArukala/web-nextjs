"use client";

import { Stack, TextField, Typography } from "@mui/material";
import type { LawyerRegistrationDraft } from "../../../lib/store/lawyerRegistrationSlice";
import { textFieldSx } from "../content";

type Props = Readonly<{
  draft: LawyerRegistrationDraft;
  setField: (field: keyof LawyerRegistrationDraft, value: string | boolean) => void;
}>;

export default function AccountStepFields({ draft, setField }: Props) {
  return (
    <Stack spacing={2.5}>
      <Typography variant="subtitle2" color="primary" fontWeight={700} letterSpacing={0.3}>
        Account
      </Typography>
      <TextField
        label="Full name"
        value={draft.fullName}
        onChange={(e) => setField("fullName", e.target.value)}
        fullWidth
        required
        sx={textFieldSx}
      />
      <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
        <TextField
          label="Email"
          type="email"
          value={draft.email}
          onChange={(e) => setField("email", e.target.value)}
          fullWidth
          required
          sx={textFieldSx}
        />
        <TextField
          label="Phone"
          value={draft.phone}
          onChange={(e) => setField("phone", e.target.value)}
          fullWidth
          required
          sx={textFieldSx}
          slotProps={{ htmlInput: { inputMode: "numeric", maxLength: 10 } }}
        />
      </Stack>
      <TextField
        label="Password"
        type="password"
        value={draft.password}
        onChange={(e) => setField("password", e.target.value)}
        fullWidth
        required
        sx={textFieldSx}
        helperText="At least 6 characters. You’ll use this to manage your LegalHub lawyer account."
      />
    </Stack>
  );
}
