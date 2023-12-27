import { Box, Divider, Paper, TextField, useTheme } from "@mui/material";

export const ToolBar: React.FC = () => {
  const theme = useTheme();

  return (
    <Box
      component={Paper}
      height={theme.spacing(5)}
      display={"flex"}
      alignItems="center"
      gap={1}
      marginX={1}
      padding={1}
      paddingX={2}
      variant="outlined"
    >
      <TextField size="small" placeholder="Pesquisar..." />

      <Divider variant="middle" orientation="vertical" />
    </Box>
  );
};
