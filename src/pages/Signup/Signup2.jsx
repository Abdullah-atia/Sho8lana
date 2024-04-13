import React, { useState } from "react";
import { useNavigate, Link as RouterLink } from "react-router-dom";
import * as yup from "yup";
import { useFormik } from "formik";
import axios from "axios";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import { Container, Grid, Link, Typography, Stack } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import toast from "react-hot-toast";

export default function Signup() {
  let nav = useNavigate();
  let [loading, setLoading] = useState(false);

  const validationSchema = yup.object().shape({
    first_name: yup.string().required("FirstName is required"),
    last_name: yup.string().required("LastName is required"),
    email: yup
      .string()
      .email("Invalid email format")
      .required("Email is required"),
    password: yup
      .string()
      .required("Password is required")
      .min(8, "Please: length greater than 8"),
    repassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords must match")
      .required("Confirm password is required"),
  });

  const handleSignup = async (values) => {
    setLoading(true);
    try {
      let { data } = await axios.post(
        "https://movies-api.routemisr.com/signup",
        values
      );
      console.log(data);
      if (data.message === "success") {
        toast.success("Successfully! Please check your Email", {
          icon: "👏",
          style: {
            borderRadius: "10px",
            background: "#1B0A26",
            color: "#F2C791",
          },
        });
        nav("/signin");
        setTimeout(() => {
            toast.dismiss();
          }, 5000);
      } else {
        toast.error(`invaild data  = ${data.message}`);
      }
    } catch (err) {
      toast.error(err.response.data.message, {
        style: {
          borderRadius: "10px",
          background: "#1B0A26",
          color: "#F2C791",
        },
      });
    }
    setLoading(false);
  };

  const formik = useFormik({
    initialValues: {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      repassword: "",
    },
    validationSchema,
    onSubmit: handleSignup,
  });

  return (
    <Container py={4} maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5" my={2}>
          Sign up
        </Typography>
        <Typography
          component="h3"
          variant="p"
          my={2}
          sx={{ color: "#888888", fontSize: "14px" }}
        >
          Welcome
        </Typography>
        <Box
          component="form"
          onSubmit={formik.handleSubmit}
          noValidate
          sx={{ mt: 1 }}
        >
          <Stack
            spacing={2}
            padding={"4px"}
            direction="column"
            alignItems="center"
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  name="first_name"
                  label="First Name"
                  type="text"
                  error={
                    formik.errors.first_name &&
                    formik.touched.first_name !== undefined
                  }
                  helperText={
                    formik.errors.first_name && formik.touched.first_name
                      ? formik.errors.first_name
                      : ""
                  }
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.first_name}
                  autoComplete="first-name"
                  variant="outlined"
                  size="small"
                  sx={{ width: "90%" }} // Adjust width calculation as needed
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  name="last_name"
                  label="Last Name"
                  type="text"
                  error={
                    formik.errors.last_name &&
                    formik.touched.last_name !== undefined
                  }
                  helperText={
                    formik.errors.last_name && formik.touched.last_name
                      ? formik.errors.last_name
                      : ""
                  }
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.last_name}
                  autoComplete="last-name"
                  variant="outlined"
                  size="small"
                  sx={{ width: "90%" }}
                  //   sx={{ width: 'calc(100% - 20px)' }} // Adjust width calculation as needed
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  name="email"
                  label="Email"
                  type="email"
                  error={
                    formik.errors.email && formik.touched.email !== undefined
                  }
                  placeholder={
                    formik.errors.email && formik.touched.email
                      ? formik.errors.email
                      : ""
                  }
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                  autoComplete="email"
                  variant="outlined"
                  size="small"
                  sx={{ width: { xs: "100%", sm: "400px" } }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  name="password"
                  label="Password"
                  type="password"
                  error={
                    formik.errors.password &&
                    formik.touched.password !== undefined
                  }
                  helperText={
                    formik.errors.password && formik.touched.password
                      ? formik.errors.password
                      : ""
                  }
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
                  autoComplete="current-password"
                  variant="outlined"
                  size="small"
                  sx={{ width: { xs: "90%", sm: "400px" } }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  name="repassword"
                  label="Confirm Password"
                  type="password"
                  error={
                    formik.errors.repassword &&
                    formik.touched.repassword !== undefined
                  }
                  helperText={
                    formik.errors.repassword && formik.touched.repassword
                      ? formik.errors.repassword
                      : ""
                  }
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.repassword}
                  autoComplete="new-password"
                  variant="outlined"
                  size="small"
                  sx={{ width: { xs: "90%", sm: "400px" } }}
                />
              </Grid>
            </Grid>
            <LoadingButton
              variant="contained"
              type="submit"
              size="small"
              loading={loading}
              sx={{
                width: "100%",
                borderRadius: "10px",
                fontSize: "18px",
                marginBottom: "15px",
              }}
            >
              SIGN UP
            </LoadingButton>
            <Grid container sx={{ display: "flex", justifyContent: "center" }}>
              <Grid item>
                <Link to={"/signin"} component={RouterLink} variant="body2">
                  {"Aleardy have an account? Sign in"}
                </Link>
              </Grid>
            </Grid>
          </Stack>
        </Box>
      </Box>
    </Container>
  );
}
