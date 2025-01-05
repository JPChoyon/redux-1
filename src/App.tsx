import { Link, Outlet } from "react-router-dom";
import "./App.css";
import { Menubar, MenubarMenu, MenubarTrigger } from "@/components/ui/menubar";
import { ModeToggle } from "./components/mode-toggle";

function App() {
  return (
    <div className="container mx-auto">
      <div className="flex justify-between ">
        <div>
          <Menubar>
            <MenubarMenu>
              <MenubarTrigger>
                <Link to="/">Task</Link>
              </MenubarTrigger>
              <MenubarTrigger>
                <Link to="/users">users</Link>
              </MenubarTrigger>
            </MenubarMenu>
          </Menubar>
        </div>
        <div>
          <ModeToggle></ModeToggle>
        </div>
      </div>

      <Outlet></Outlet>
    </div>
  );
}

export default App;
