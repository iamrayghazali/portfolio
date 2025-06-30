import React from "react";
import './App.css'
// @ts-ignore
import ScrollBlurText from "./components/ScrollBlurText.tsx";
import { TracingBeam } from "./components/ui/tracing-beam";
import { Menu, MenuItem, ProductItem, HoveredLink } from "./components/ui/navbar-menu";

function App() {
    const [activeMenu, setActiveMenu] = React.useState<string | null>("null");
    const [activeMenuItem, setActiveMenuItem] = React.useState<string | null>("null");


  return (
    <>
      <div className="bg-black">
          <Menu setActive={setActiveMenu}>
                <HoveredLink setActive={setActiveMenuItem}></HoveredLink>

                <MenuItem setActive={setActiveMenuItem} active={"active"} item={"Thisitem"}></MenuItem>

                <ProductItem title={"title"} description={"description"} href={"img"} src={"img"}></ProductItem>
          </Menu>
        <TracingBeam className={"pt-64"}>
            <ScrollBlurText></ScrollBlurText>

        </TracingBeam>
      </div>
    </>
  )
}

export default App
