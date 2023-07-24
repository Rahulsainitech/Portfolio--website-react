import React, { useState } from "react";
import Menucard from "./Menucard";
import Menu from "./Menu";
import Nav from "./Nav"

const uniqueList = [
  ...new Set(
    Menu.map((curElem) => {
      return curElem.heading;

    }),
  ),
  "All",
]

// console.log("my unique list is",uniqueList)
const Skills = () => {

  const [menuData, setMenuData] = useState(Menu);
  const [menuList, setMenuList] = useState(uniqueList);
  // console.log("menulist is",menuList)

  const filterItem = (heading) => {
    if (heading === 'All') {
      setMenuData(Menu);
      return;
    }
    const updatedLIst = Menu.filter((curElem) => {
      return curElem.heading === heading
    })
    setMenuData(updatedLIst);
  }
  // console.log("menu is",filterItem('All'))

  return (
    <>
       <h3 className="col-12 p-3 text-center skill">My Projects</h3>
      <Nav menuList={menuList} filterItem={filterItem} />
      <Menucard menuData={menuData} />
    </>
  )
}
export default Skills;