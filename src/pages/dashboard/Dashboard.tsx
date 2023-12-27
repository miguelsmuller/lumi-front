import { Button } from "@mui/material";
import { SideMenu } from "../../shared/components/side-menu/SideMenu";
import { useDrawerContext } from "../../shared/contexts";

export default function Dashboard() {
  const { toggleDrawerOpen } = useDrawerContext();

  return (
    <div>
      <SideMenu>
        <Button onClick={toggleDrawerOpen}>Teste MUI</Button>
      </SideMenu>
    </div>
  );
}
