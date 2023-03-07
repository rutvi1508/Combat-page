import React from "react";
import "../../component/optionalpage/optionalpage.scss";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Link from "@mui/material/Link";
import logo from "../../assest/images/logo.svg";
import info from "../../assest/images/info.svg";
import tickmark from "../../assest/images/tick-mark.svg";
import line from "../../assest/images/line.svg";
import { Box } from "@mui/system";
import { Button, Grid, Typography } from "@mui/material";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import Checkbox from "@mui/material/Checkbox";

const preventDefault = (event) => event.preventDefault();

function OptionalPage() {
  return (
    <div>
      {/* Menu section */}
      <Box className="optionalpage-head-sec">
        <Box className="optionalpage-head_container">
          <Grid container className="optionalpage-head-grid-sec">
            <Grid item>
              <Box>
                <Stack direction="row">
                  <Avatar
                    variant="rounded"
                    alt="Remy Sharp"
                    src={logo}
                    className="optionalpage-logo"
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
                <Link
                  href="#"
                  underline="hover"
                  className="optionalpage-menu-bar"
                >
                  {"Menu Label"}
                </Link>
                <Link href="#" underline="hover" className="menu-bar">
                  {"Menu Label"}
                </Link>
                <Link href="#" underline="hover" className="menu-bar">
                  {"Menu Label"}
                </Link>
                <Button variant="contained" className="optionalpage-signin-btn">
                  Sign In
                </Button>
              </Box>
            </Grid>
          </Grid>
          <Box>
            <Grid container direction="row" className="optionalpage-grid-sec">
              <Grid
                item
                xs={6}
                xl={3}
                lg={3}
                className="optionalpage-left-grid-sec"
              >
                <Box>
                  <span className="optionalpage--head-txt">
                    WELCOME TO COMBAT MATRIX
                  </span>
                </Box>
                <Box className="optionalpage-head-breadcrumbs">
                  <span className="optionalpage--small-txt">
                    You can skip this page if you like, but these details will
                    help us verify you faster.
                  </span>
                </Box>
                <Box>
                  <Stack direction="row" spacing={2}>
                    <MenuList className="optionalpage-menu-items">
                      <Box className="tick-mark-txt">
                        <Stack>
                          <Avatar
                            alt="Remy Sharp"
                            src={tickmark}
                            className="tick-mark-icon"
                          />
                        </Stack>
                        <MenuItem className="optionalpage-left-grid-menu">
                          REQUIRED DETAILS
                        </MenuItem>
                      </Box>
                      <Box className="tick-mark-txt">
                        <Stack>
                          <Avatar
                            alt="Remy Sharp"
                            src={tickmark}
                            className="tick-mark-icon"
                          />
                        </Stack>
                        <MenuItem className="optionalpage-left-grid-menu ">
                          PROFILE TYPE
                        </MenuItem>
                      </Box>
                      <Box className="tick-mark-txt">
                        <Stack>
                          <Avatar
                            alt="Remy Sharp"
                            variant=""
                            src={line}
                            className="line-icon"
                          />
                        </Stack>
                        <MenuItem className="optionalpage-left-grid-menu">
                          OPTIONAL DETAILS
                        </MenuItem>
                      </Box>
                      <MenuItem className="optionalpage-left-grid-menu">
                        CONFIRM
                      </MenuItem>
                    </MenuList>
                  </Stack>
                </Box>
              </Grid>
              <Grid
                item
                xs={6}
                xl={5}
                lg={5}
                className="optionalpage-right-grid-sec"
              >
                <Box className="">
                  <Box>
                    <span className="optionalpage-right-grid-head-txt">
                      CLAIM PROFILE
                    </span>
                  </Box>
                  <Box>
                    <span className="right-grid-breadcrumbs">
                      We found existing profiles that match your details. Other
                      users may have already started your profile when updating
                      their fight record. Click to see more details. If none of
                      these sound like you, you can skip this step.
                    </span>
                  </Box>
                  <Box className="matching_profile">
                    <span className="chk_head-txt">Matching profiles (2)</span>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>
    </div>
  );
}

export default OptionalPage;
