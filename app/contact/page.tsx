
"use client";
import {
  Box,
  
  TextField,
  Button,
  Typography,
  Paper,
} from "@mui/material";
import Grid from '@mui/material/Grid';
import { useFormik } from "formik";
import * as Yup from "yup";

interface ContactFormValues {
  name: string;
  email: string;
  phone: string;
  query: string;
  message: string;
}

export default function Contact(){
const formik = useFormik<ContactFormValues>({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      query: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      phone: Yup.string().required("Phone number is required"),
      query: Yup.string().required("Query is required"),
      message: Yup.string().required("Message is required"),
    }),
    onSubmit: (values: ContactFormValues) => {
      console.log("Form Data:", values);
    },
  });
    return (
  <Box className="px-4 sm:px-6 lg:px-8 py-12">
      <Grid container spacing={4}>
        {/* LEFT SIDE */}
        <Grid size={{ xs: 12, md: 6 }} display={{ xs: "none", md: "flex" }} alignItems="center">
          <Box>
            <Typography variant="h4" fontWeight="bold" className="text-4xl" gutterBottom>
              Get in Touch
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Have questions? Send us your query and we’ll get back to you shortly.
            </Typography>
          </Box>
        </Grid>

        {/* RIGHT SIDE FORM */}
        <Grid size={{ xs: 12, md: 6 }}>
          <Box className="shadow shadow-2xl bg-white rounded-2xl p-6">
          <Typography
            variant="h5"
            fontWeight="600"
            textAlign="center"
            mb={3}
          >
            Contact us
          </Typography>

          <form onSubmit={formik.handleSubmit}>
            <Grid container spacing={3}>
              
              {/* Name */}
              <Grid size={12}>
                <TextField
                  fullWidth
                  label="Name"
                  name="name"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.name && Boolean(formik.errors.name)}
                  helperText={formik.touched.name && formik.errors.name}
                />
              </Grid>

              {/* Email */}
              <Grid size={{ xs: 12, md: 6 }}>
                <TextField
                  fullWidth
                  label="Email"
                  name="email"
                  type="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  helperText={formik.touched.email && formik.errors.email}
                />
              </Grid>

              {/* Phone */}
              <Grid size={{ xs: 12, md: 6 }}>
                <TextField
                  fullWidth
                  label="Phone Number"
                  name="phone"
                  value={formik.values.phone}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.phone && Boolean(formik.errors.phone)}
                  helperText={formik.touched.phone && formik.errors.phone}
                />
              </Grid>

              {/* Query */}
              <Grid size={12}>
                <TextField
                  fullWidth
                  label="Query"
                  name="query"
                  value={formik.values.query}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.query && Boolean(formik.errors.query)}
                  helperText={formik.touched.query && formik.errors.query}
                />
              </Grid>

              {/* Message */}
              <Grid size={12}>
                <TextField
                  fullWidth
                  multiline
                  rows={4}
                  label="Message"
                  name="message"
                  value={formik.values.message}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.message && Boolean(formik.errors.message)}
                  helperText={formik.touched.message && formik.errors.message}
                />
              </Grid>
               <Grid size={12}>
                <Typography>By submitting this form, you agree to our Privacy Policy and Terms of Service.</Typography>
               </Grid>

              {/* Submit */}
              <Grid size={4}>
                <Button
                  type="submit"
                  variant="contained"
                  size="large"
                  fullWidth
                  sx={{
                    py: 1.5,
                    borderRadius: 2,
                    textTransform: "none",
                    fontSize: "16px",
                  }}
                >
                  Submit
                </Button>
              </Grid>
            </Grid>
          </form>
          </Box>
        </Grid>
      </Grid>
   
  </Box>
);
}