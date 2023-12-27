/* eslint-disable import/no-duplicates */

import { Fragment } from "react";
import { useTheme, useMediaQuery } from "@mui/material";
import { Avatar, Box, Divider, Drawer } from "@mui/material";
import {
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

import { Person, Home } from "@mui/icons-material";
import { useDrawerContext } from "../../contexts";

interface SideMenuProps {
  children?: React.ReactNode;
}

export const SideMenu: React.FC<SideMenuProps> = ({ children }) => {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));

  const { isDrawerOpen, toggleDrawerOpen } = useDrawerContext();

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
              <ListItemButton>
                <ListItemIcon>
                  <Home />
                </ListItemIcon>
                <ListItemText primary="Dashboard" />
              </ListItemButton>
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
