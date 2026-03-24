"use client";

import { Checkbox, Divider, FormControlLabel, Paper, Stack, TextField, Typography } from "@mui/material";
import type { LawyerRegistrationDraft } from "../../../lib/store/lawyerRegistrationSlice";
import { textFieldSx } from "../content";
import ReviewRow from "../ReviewRow";

type Props = Readonly<{
  draft: LawyerRegistrationDraft;
  setField: (field: keyof LawyerRegistrationDraft, value: string | boolean) => void;
}>;

export default function ReviewStepFields({ draft, setField }: Props) {
  return (
    <Stack spacing={2.5}>
      <Typography variant="subtitle2" color="primary" fontWeight={700} letterSpacing={0.3}>
        Review & publish
      </Typography>
      <Typography variant="body2" color="text.secondary">
        You’re about to go live on LegalHub. Double-check the essentials below, add an optional bio, and accept the
        terms.
      </Typography>
      <Paper
        variant="outlined"
        sx={{
          p: 2,
          borderRadius: 3,
          bgcolor: "rgba(241,245,249,0.6)",
          borderStyle: "dashed",
        }}
      >
        <Stack spacing={1} divider={<Divider flexItem />}>
          <ReviewRow label="Name" value={draft.fullName} />
          <ReviewRow label="Email" value={draft.email} />
          <ReviewRow label="Phone" value={draft.phone} />
          <ReviewRow label="Bar / enrollment" value={draft.barCouncilNumber} />
          <ReviewRow label="Specialization" value={draft.specialization} />
          <ReviewRow label="Experience (years)" value={draft.yearsOfExperience} />
          <ReviewRow label="Location" value={`${draft.city}, ${draft.state}`} />
        </Stack>
      </Paper>
      <TextField
        label="Professional bio (optional)"
        value={draft.bio}
        onChange={(e) => setField("bio", e.target.value)}
        fullWidth
        multiline
        minRows={4}
        sx={textFieldSx}
        helperText="A short paragraph helps clients understand how you can help."
      />
      <FormControlLabel
        control={
          <Checkbox checked={draft.acceptTerms} onChange={(e) => setField("acceptTerms", e.target.checked)} />
        }
        label="I accept the LegalHub Terms of Service and Privacy Policy"
      />
    </Stack>
  );
}
