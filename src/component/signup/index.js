import { Box } from "@mui/system";
import React from "react";
import "../../component/signup/signup.scss";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Link from "@mui/material/Link";
import logo from "../../assest/images/logo.svg";
import facebook from "../../assest/images/facebook.svg";
import apple from "../../assest/images/apple.svg";
import google from "../../assest/images/google.svg";
import { Button, Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import IconButton from "@material-ui/core/IconButton";
import Visibility from "@material-ui/icons/Visibility";
import InputAdornment from "@material-ui/core/InputAdornment";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Input from "@material-ui/core/Input";
import Checkbox from "@mui/material/Checkbox";

const preventDefault = (event) => event.preventDefault();

const label = { inputProps: { "aria-label": "Checkbox demo" } };

function SignUp() {
  const [values, setValues] = React.useState({
    password: "",
    showPassword: false,
  });

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handlePasswordChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };
  return (
    <div>
      {/* Menu section */}
      <Box className="head-sec">
        <Box className="head_container">
          <Grid container className="head-grid-sec">
            <Grid item>
              <Box>
                <Stack direction="row">
                  <Avatar
                    variant="rounded"
                    alt="Remy Sharp"
                    src={logo}
                    className="logo"
                  />
                </Stack>
              </Box>
            </Grid>
            <Grid item>
              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "center",
                  typography: "body1",
                  "& > :not(style) + :not(style)": {
                    ml: 2,
                  },
                }}
                onClick={preventDefault}
              >
                <Link href="#" underline="hover" className="menu-bar">
                  {"Menu Label"}
                </Link>
                <Link href="#" underline="hover" className="menu-bar">
                  {"Menu Label"}
                </Link>
                <Link href="#" underline="hover" className="menu-bar">
                  {"Menu Label"}
                </Link>
                <Button variant="contained" className="signin-btn">
                  Sign In
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Box>
        <Box className="content_container">
          <Box className="signup-sec">
            <Grid container>
              <Grid item xs={5}>
                <Box>
                  <Typography variant="h3" className="sign-up-head-txt">
                    Sign Up
                  </Typography>
                </Box>
                <Box>
                  <Typography
                    variant="subtitle1"
                    className="sign-up-breadcrumbs"
                  >
                    Join the fastest growing Combat Sports social network and
                    become an owner!
                  </Typography>
                </Box>
                <Box>
                  <Input placeholder="Email Address*" className="form-sec" />
                </Box>
                <Box className="password-sec">
                  {/*  <InputLabel htmlFor="standard-adornment-password password-label">
                Password*
              </InputLabel> */}
                  <Input
                    placeholder="Password*"
                    className="password-label"
                    type={values.showPassword ? "text" : "password"}
                    onChange={handlePasswordChange("password")}
                    value={values.password}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          className="icon-button"
                        >
                          {values.showPassword ? (
                            <Visibility />
                          ) : (
                            <VisibilityOff />
                          )}
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                </Box>
                <Box>
                  <Input
                    placeholder="Repeat password*"
                    className="repeat-pwd-label"
                  />
                </Box>
                <Box className="terms-con-sec">
                  <Box>
                    <Checkbox {...label} className="checkbox" />
                    <span className="checkbox_txt">
                      I have read and I accept all the Combat Matrix{" "}
                      <span>
                        {" "}
                        <Link href="#" className="terms-con" sx={{}}>
                          Terms and Conditions.{" "}
                        </Link>
                      </span>{" "}
                    </span>
                  </Box>
                </Box>
                <Box className="agree-btn">
                  <Button variant="contained" className="agree-signup-btn">
                    Agree & Sign Up
                  </Button>
                </Box>
                <Box className="or-sec">
                  <span className="or-txt">OR</span>
                </Box>
                <Box>
                  <Stack direction="row" spacing={3} className="brand-logo">
                    <Avatar
                      variant="rounded"
                      alt="Remy Sharp"
                      src={facebook}
                      className="facebook-logo"
                    />
                    <Avatar
                      variant="rounded"
                      alt="Remy Sharp"
                      src={apple}
                      className="facebook-logo"
                    />
                    <Avatar
                      variant="rounded"
                      alt="Remy Sharp"
                      src={google}
                      className="facebook-logo"
                    />
                  </Stack>
                </Box>
                <Box className="already-member-sec">
                  {" "}
                  <Link href="#" className="already-member" sx={{}}>
                    ALREADY A MEMBER?{" "}
                  </Link>{" "}
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>
      {/* Menu section Over */}
    </div>
  );
}

export default SignUp;
