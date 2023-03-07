import React from "react";
import "../../component/profiletype/profiletype.scss";
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
import FormControl from "@mui/material/FormControl";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";

const preventDefault = (event) => event.preventDefault();

const label = { inputProps: { "aria-label": "Checkbox demo" } };

function ProfileType() {
  const [state, setState] = React.useState({
    athlete: false,
    coach: false,
    manager: false,
    promoter: false,
    sponsor: false,
    journalist: false,
    official: false,
    permission: false,
  });

  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };

  const {
    athlete,
    coach,
    manager,
    promoter,
    sponsor,
    journalist,
    official,
    permission,
  } = state;
  return (
    <div>
      {/* Menu section */}
      <Box className="profile-head-sec">
        <Box className="profile-head_container">
          <Grid container className="profile-head-grid-sec">
            <Grid item>
              <Box>
                <Stack direction="row">
                  <Avatar
                    variant="rounded"
                    alt="Remy Sharp"
                    src={logo}
                    className="profile-logo"
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
                <Link href="#" underline="hover" className="profile-menu-bar">
                  {"Menu Label"}
                </Link>
                <Link href="#" underline="hover" className="menu-bar">
                  {"Menu Label"}
                </Link>
                <Link href="#" underline="hover" className="menu-bar">
                  {"Menu Label"}
                </Link>
                <Button variant="contained" className="profile-signin-btn">
                  Sign In
                </Button>
              </Box>
            </Grid>
          </Grid>
          <Box>
            <Grid container direction="row" className="profile-grid-sec">
              <Grid item xs={6} xl={3} lg={3} className="profile-left-grid-sec">
                <Box>
                  <span className="profile--head-txt">
                    WELCOME TO COMBAT MATRIX
                  </span>
                </Box>
                <Box className="profile-head-breadcrumbs">
                  <span className="profile--small-txt">
                    You can pick more than 1 profile type to show people who
                    your are in the community.
                  </span>
                </Box>
                <Box>
                  <Stack direction="row" spacing={2}>
                    <MenuList className="profile-menu-items">
                      <Box className="tick-mark-txt">
                        <Stack>
                          <Avatar
                            alt="Remy Sharp"
                            src={tickmark}
                            className="tick-mark-icon"
                          />
                        </Stack>
                        <MenuItem className="profile-left-grid-menu">
                          REQUIRED DETAILS
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
                        <MenuItem className="profile-left-grid-menu ">
                          PROFILE TYPE
                        </MenuItem>
                      </Box>
                      <MenuItem className="profile-left-grid-menu">
                        OPTIONAL DETAILS
                      </MenuItem>
                      <MenuItem className="profile-left-grid-menu">
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
                className="profile-right-grid-sec"
              >
                <Box className="chk_sec">
                  <Box>
                    <span className="profile-right-grid-head-txt">
                      PROFILE TYPE
                    </span>
                  </Box>
                  <Box className="disabled-chk-sec">
                    <Checkbox
                      {...label}
                      disabled
                      checked
                      className="disabled-chk"
                    />
                    <span className="chk_head-txt">Member</span>
                    <Typography variant="subtitle1" className="chk_small-txt">
                      By default, every user who signs up To Combat Matrix will
                      have a Member profile. Click next if no other applies to
                      you.
                    </Typography>
                  </Box>
                </Box>
                <Box className="multiple-chk-sec">
                  <span className="select-profile-type">
                    Select other profile types:
                  </span>
                </Box>
                <Box className="group-chk-sec">
                  <FormControl sx={{ m: 1 }}>
                    <FormGroup>
                      <Box className="chk-txt-group">
                        <FormControlLabel
                          control={
                            <Checkbox
                              checked={athlete}
                              onChange={handleChange}
                              name="athlete"
                              className="group-chk"
                            />
                          }
                          label="Athlete"
                          className="group_chk_label"
                        />
                        <Stack direction="row" spacing={2}>
                          <Avatar
                            alt="Remy Sharp"
                            src={info}
                            className="info-icon"
                          />
                        </Stack>
                      </Box>
                      <Box className="chk-txt-group">
                        <FormControlLabel
                          control={
                            <Checkbox
                              checked={coach}
                              onChange={handleChange}
                              name="coach"
                              className="group-chk"
                            />
                          }
                          className="group_chk_label"
                          label="Coach/Instructor"
                        />
                        <Stack direction="row" spacing={2}>
                          <Avatar
                            alt="Remy Sharp"
                            src={info}
                            className="info-icon"
                          />
                        </Stack>
                      </Box>
                      <Box className="chk-txt-group">
                        <FormControlLabel
                          control={
                            <Checkbox
                              checked={manager}
                              onChange={handleChange}
                              name="manager"
                              className="group-chk"
                            />
                          }
                          className="group_chk_label"
                          label="Manager"
                        />
                        <Stack direction="row" spacing={2}>
                          <Avatar
                            alt="Remy Sharp"
                            src={info}
                            className="info-icon"
                          />
                        </Stack>
                      </Box>
                      <Box className="chk-txt-group">
                        <FormControlLabel
                          control={
                            <Checkbox
                              checked={promoter}
                              onChange={handleChange}
                              name="promoter"
                              className="group-chk"
                            />
                          }
                          className="group_chk_label"
                          label="Promoter"
                        />
                        <Stack direction="row" spacing={2}>
                          <Avatar
                            alt="Remy Sharp"
                            src={info}
                            className="info-icon"
                          />
                        </Stack>
                      </Box>
                      <Box className="chk-txt-group">
                        <FormControlLabel
                          control={
                            <Checkbox
                              checked={sponsor}
                              onChange={handleChange}
                              name="sponsor"
                              className="group-chk"
                            />
                          }
                          className="group_chk_label"
                          label="Sponsor"
                        />
                        <Stack direction="row" spacing={2}>
                          <Avatar
                            alt="Remy Sharp"
                            src={info}
                            className="info-icon"
                          />
                        </Stack>
                      </Box>
                      <Box className="chk-txt-group">
                        <FormControlLabel
                          control={
                            <Checkbox
                              checked={journalist}
                              onChange={handleChange}
                              name="journalist"
                              className="group-chk"
                            />
                          }
                          className="group_chk_label"
                          label="Journalist"
                        />
                        <Stack direction="row" spacing={2}>
                          <Avatar
                            alt="Remy Sharp"
                            src={info}
                            className="info-icon"
                          />
                        </Stack>
                      </Box>
                      <Box className="chk-txt-group">
                        <FormControlLabel
                          control={
                            <Checkbox
                              checked={official}
                              onChange={handleChange}
                              name="official"
                              className="group-chk"
                            />
                          }
                          className="group_chk_label"
                          label="Official"
                        />
                        <Stack direction="row" spacing={2}>
                          <Avatar
                            alt="Remy Sharp"
                            src={info}
                            className="info-icon"
                          />
                        </Stack>
                      </Box>
                    </FormGroup>
                  </FormControl>
                </Box>
                <Box>
                  <FormControl sx={{ m: 1 }}>
                    <FormGroup>
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={permission}
                            onChange={handleChange}
                            name="permission"
                            className="group-chk"
                          />
                        }
                        label="Do you want to set up an organisation?"
                        className="group_chk_label"
                      />
                    </FormGroup>
                  </FormControl>
                </Box>
                <Box className="btn-sec">
                  <Box className="btns">
                    <Button variant="contained" className="back-btn">
                      Back
                    </Button>
                  </Box>
                  <Box className="btns">
                    <Button variant="contained" className="Next-btn">
                      Next
                    </Button>
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

export default ProfileType;
