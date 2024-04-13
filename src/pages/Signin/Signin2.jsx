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

export default function Signin() {
  let nav = useNavigate();
  let [loading, setLoading] = useState(false);

  const validationSchema = yup.object().shape({
    email: yup
      .string()
      .email("Invalid email format")
      .required("Email is required"),
    password: yup
      .string()
      .required("Password is required")
      .min(8, "Please: length greater than 8"),
  });

  const handleSignup = async (values) => {
    setLoading(true);
    try {
      let { data } = await axios.post(
        "https://movies-api.routemisr.com/signin",
        values
      );
      if (data.message === "success") {
        toast.success("Login Successfully!", {
          icon: "👏",
          style: {
            borderRadius: "10px",
            background: "#1B0A26",
            color: "#F2C791",
          },
        });
        localStorage.setItem("token", data.BrearerToken);
        nav("/");
        setTimeout(() => {
          toast.dismiss();
        }, 5000);
      }
      else{
          console.log(data)
        toast.error(data.message, {
          style: {
            borderRadius: "10px",
            background: "#1B0A26",
            color: "#F2C791",
          },
      })
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
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: handleSignup,
  });

  return (
    <Container py={4}>
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
          Sign In
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
            <TextField
              name="email"
              label="Email"
              type="email"
              error={formik.errors.email && formik.touched.email !== undefined}
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
              sx={{ width: { xs: "90%", sm: "400px" } }}
            />
            <TextField
              name="password"
              label="Password"
              type="password"
              error={
                formik.errors.password && formik.touched.password !== undefined
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
              SIGN IN
            </LoadingButton>
            <Grid container sx={{ display: "flex", justifyContent: "center" }}>
              <Grid item>
                <Link to={"/signup"} component={RouterLink} variant="body2">
                  {"Don't have an account? Sign up"}
                </Link>
              </Grid>
            </Grid>
          </Stack>
        </Box>
      </Box>
    </Container>
  );
}
