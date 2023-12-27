import { useMatch, useNavigate, useResolvedPath } from "react-router-dom";
import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";

interface ISideMenuItemProps {
  label: string;
  icon: React.ReactNode;
  path: string;
  onClick: (() => void) | undefined;
}

export const SideMenuItem: React.FC<ISideMenuItemProps> = ({
  label,
  icon,
  path,
  onClick,
}) => {
  const navigate = useNavigate();
  const resolvedPath = useResolvedPath(path);
  const match = useMatch({ path: resolvedPath.pathname, end: false });

  const handleClick = () => {
    navigate(path);
    if (onClick) onClick();
  };

  return (
    <ListItemButton selected={!!match} onClick={handleClick}>
      <ListItemIcon>{icon}</ListItemIcon>
      <ListItemText primary={label} />
    </ListItemButton>
  );
};
