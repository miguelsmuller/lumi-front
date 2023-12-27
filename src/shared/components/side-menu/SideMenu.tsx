/* eslint-disable import/no-duplicates */

import React, { Fragment, PropsWithChildren } from "react";
import { Person } from "@mui/icons-material";
import { useTheme, useMediaQuery } from "@mui/material";
import { Avatar, Box, Divider, Drawer, List } from "@mui/material";

import { useDrawerContext } from "../../contexts";
import { SideMenuItem } from "./SideMenuItem";

export const SideMenu: React.FC<PropsWithChildren> = ({ children }) => {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));

  const { isDrawerOpen, toggleDrawerOpen, drawerOptions } = useDrawerContext();

  return (
    <Fragment>
      <Drawer
        open={isDrawerOpen}
        variant={isSmall ? "temporary" : "permanent"}
        onClose={toggleDrawerOpen}
      >
        <Box
          width={theme.spacing(28)}
          height="100%"
          display="flex"
          flexDirection="column"
        >
          <Box
            width="100%"
            height={theme.spacing(20)}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Avatar
              sx={{ height: theme.spacing(12), width: theme.spacing(12) }}
            >
              <Person
                sx={{ height: theme.spacing(6), width: theme.spacing(6) }}
              />
            </Avatar>
          </Box>

          <Divider />

          <Box flex={1}>
            <List component="nav">
              {drawerOptions.map((drawerOptions) => (
                <SideMenuItem
                  path={drawerOptions.path}
                  key={drawerOptions.path}
                  icon={drawerOptions.icon}
                  label={drawerOptions.label}
                  onClick={isSmall ? toggleDrawerOpen : undefined}
                />
              ))}
            </List>
          </Box>
        </Box>
      </Drawer>

      <Box height="100vh" marginLeft={isSmall ? 0 : theme.spacing(28)}>
        {children}
      </Box>
    </Fragment>
  );
};
