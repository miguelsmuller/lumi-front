import { Menu } from "@mui/icons-material";
import {
  Box,
  IconButton,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import { useDrawerContext } from "../contexts/DrawerContext";

interface IBaseLayoutProps {
  children: React.ReactNode;
  title: string;
}

export const BaseLayout: React.FC<IBaseLayoutProps> = ({ children, title }) => {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));
  const isMedium = useMediaQuery(theme.breakpoints.down("md"));
  const { toggleDrawerOpen } = useDrawerContext();

  return (
    <Box height="100%" display="flex" flexDirection="column" gap={1}>
      <Box
        padding={1}
        display="flex"
        alignItems="center"
        gap={1}
        height={theme.spacing(isSmall ? 6 : isMedium ? 8 : 12)}
      >
        {isSmall && (
          <IconButton onClick={toggleDrawerOpen}>
            <Menu />
          </IconButton>
        )}

        <Typography
          variant={isSmall ? "h5" : isMedium ? "h4" : "h3"}
          whiteSpace="nowrap"
          overflow="hidden"
          textOverflow="ellipsis"
        >
          {title}
        </Typography>
      </Box>

      <Box flex={1} overflow="auto" width={"100%"}>
        {children}
      </Box>
    </Box>
  );
};
