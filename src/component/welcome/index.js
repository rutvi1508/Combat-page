import React from "react";
import "../../component/welcome/welcome.scss";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Link from "@mui/material/Link";
import logo from "../../assest/images/logo.svg";
import line from "../../assest/images/line.svg";
import uploadimg from "../../assest/images/upload-img.svg";
import camera from "../../assest/images/camera.svg";
import { Box } from "@mui/system";
import { Button, Grid } from "@mui/material";
import Paper from "@mui/material/Paper";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import Input from "@material-ui/core/Input";

const preventDefault = (event) => event.preventDefault();

function Welcome() {
  return (
    <div>
      {/* Menu section */}
      <Box className="welcome-head-sec">
        <Box className="welcome-head_container">
          <Grid container className="welcome-head-grid-sec">
            <Grid item>
              <Box>
                <Stack direction="row">
                  <Avatar
                    variant="rounded"
                    alt="Remy Sharp"
                    src={logo}
                    className="welcome-logo"
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
                <Link href="#" underline="hover" className="welcome-menu-bar">
                  {"Menu Label"}
                </Link>
                <Link href="#" underline="hover" className="welcome-menu-bar">
                  {"Menu Label"}
                </Link>
                <Link href="#" underline="hover" className="welcome-menu-bar">
                  {"Menu Label"}
                </Link>
                <Button variant="contained" className="welcome-signin-btn">
                  Sign In
                </Button>
              </Box>
            </Grid>
          </Grid>
          <Box>
            <Grid container direction="row" className="grid-sec">
              <Grid item xs={6} xl={4} lg={4} className="left-grid-sec">
                <Box>
                  <span className="welcome-head-txt">
                    WELCOME TO COMBAT MATRIX
                  </span>
                </Box>
                <Box className="head-breadcrumbs">
                  <span className="welcome-small-txt">
                    Unlock all that Combat Matrix has to offer. Please enter
                    your name as it appears on your id and upload a real photo
                    of yourself so we can start the verification process.
                  </span>
                </Box>
                <Box>
                  <Stack direction="row" spacing={2}>
                    <MenuList className="menu-items">
                    <Box className="tick-mark-txt">
                        <Stack>
                          <Avatar
                            alt="Remy Sharp"
                            variant=""
                            src={line}
                            className="line-icon"
                          />
                        </Stack>
                      <MenuItem className="left-grid-menu  ">
                        REQUIRED DETAILS
                      </MenuItem>
                      </Box>
                      <MenuItem className="left-grid-menu">
                        PROFILE TYPE
                      </MenuItem>
                      <MenuItem className="left-grid-menu">
                        OPTIONAL DETAILS
                      </MenuItem>
                      <MenuItem className="left-grid-menu">CONFIRM</MenuItem>
                    </MenuList>
                  </Stack>
                </Box>
              </Grid>
              <Grid item xs={6} xl={4} lg={4} className="right-grid-sec">
                <Box>
                  <span className="right-grid-head-txt">REQUIRED DETAILS</span>
                </Box>
                <Box className="right-grid-img-sec">
                  <Box>
                    <Stack direction="row">
                      <Avatar
                        variant="rounded"
                        alt="Remy Sharp"
                        src={uploadimg}
                        className="upload-img"
                      />
                    </Stack>
                  </Box>
                  <Box>
                    <Stack direction="row">
                      <Avatar
                        variant="rounded"
                        alt="Remy Sharp"
                        src={camera}
                        className="camera-img"
                      />
                    </Stack>
                  </Box>
                  <Box>
                    <span className="img-txt">
                      Image Recommendations .jpg or .png 500x500 Less than 2MB
                    </span>
                  </Box>
                </Box>
                <Box>
                  <Input placeholder="First Name*" className="first-name" />
                </Box>
                <Box>
                  <Input placeholder="Last Name*" className="first-name" />
                </Box>
                <Box>
                  <Input placeholder="Nickname*" className="first-name" />
                </Box>
                <Box className="next-btn-sec">
                  <Button variant="contained" className="next-btn">
                    Next
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>
    </div>
  );
}

export default Welcome;
