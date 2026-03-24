import type { LawyerRegistrationDraft } from "../../lib/store/lawyerRegistrationSlice";

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function step0Error(d: LawyerRegistrationDraft): string | null {
  if (!d.fullName.trim()) return "Full name is required.";
  if (!d.email.trim() || !emailRe.test(d.email)) return "Valid email is required.";
  if (!/^[6-9]\d{9}$/.test(d.phone)) return "Enter a valid 10-digit phone number.";
  if (d.password.length < 6) return "Password must be at least 6 characters.";
  return null;
}

export function step1Error(d: LawyerRegistrationDraft): string | null {
  if (!d.barCouncilNumber.trim()) return "Bar council / enrollment number is required.";
  if (!d.specialization.trim()) return "Practice area / specialization is required.";
  if (
    !d.yearsOfExperience.trim() ||
    Number.isNaN(Number(d.yearsOfExperience)) ||
    Number(d.yearsOfExperience) < 0
  ) {
    return "Enter valid years of experience.";
  }
  if (!d.city.trim()) return "City is required.";
  if (!d.state.trim()) return "State is required.";
  return null;
}

export function step2Error(d: LawyerRegistrationDraft): string | null {
  if (!d.acceptTerms) return "You must accept the terms to create your profile.";
  return null;
}
