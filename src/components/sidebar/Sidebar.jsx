import React, { useEffect, useState } from 'react'
import "./sidebar.css"
import logo from "../../assets/images/logo.png";
import home from "../../assets/images/home.svg";
import user from "../../assets/images/user.svg";
import products from "../../assets/images/products.svg";
import note from "../../assets/images/note.svg";
import settings from "../../assets/images/settings.svg";
import add from "../../assets/images/add.svg";
import chat from "../../assets/images/chat.svg";
import bell from "../../assets/images/bell.svg";
import menuIcon from "../../assets/images/menu.svg";
export const menu = [
  {
    id: 1,
    title: "Dashboard",
    icon: home,
  },
  {
    id: 2,
    title: "Profile",
    icon: user
  },
  {
    id: 3,
    title: "Products",
    icon: products
  },
  {
    id: 4,
    title: "Add new",
    icon: add
  },
  {
    id: 5,
    title: "Chat",
    icon: chat
  },
  {
    id: 6,
    title: "Notes",
    icon: note
  },
  {
    id: 7,
    title: "Notification",
    icon: bell
  },
  {
    id: 8,
    title: "Settings",
    icon: settings
  },
];

const Sidebar = ({ isMenuOpen, setIsMenuOpen }) => {
  const pic = "https://res.cloudinary.com/duqzhkepf/image/upload/v1710347435/opvxrdkiobiayxdblwle.jpg";
  const fullName = "Nikita";
  const [selectedMenu, setSelectedMenu] = useState("Dashboard");

  const handleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <div className={`sidebarContainer ${isMenuOpen ? "collapsedSidebar" : ""}`}>
      <div
        className={`logoContainer ${isMenuOpen ? "collapsedSidebar" : ""}`}>
        <div className='logo'>
          <img className={`logoImg ${isMenuOpen ? "collapsedSidebar" : ""}`} src={logo} />
          <div className={`companyName ${isMenuOpen ? "collapsedSidebar" : ""}`}>
            <span>Carbon</span>
            <span>cell</span>
          </div>
        </div>
        <img onClick={handleMenu} className={`menuImg ${isMenuOpen ? "open" : ""} `} src={menuIcon} />
      </div>
      <div className="profileContainer">
        <img src={pic} style={{ objectFit: "cover" }} />
        <span>{fullName ? fullName : "Nikita"}</span>
      </div>
      <div className={`menuContainer ${isMenuOpen ? "collapsedSidebar" : ""}`}>
        {menu.map(menu => (
          <div
            className={`menu ${selectedMenu === menu.title ? "highlight" : ""}`}
            key={menu.id}
            onClick={() => setSelectedMenu(menu.title)}
          >
            <img className="icon" src={menu.icon} alt='menu' style={{
              filter: `${selectedMenu === menu.title ? 'invert(74%) sepia(65%) saturate(748%) hue-rotate(308deg) brightness(99%) contrast(98%)' : 'invert(100%)'} `, width: "18px", height: "18px"
            }} />
            <span className={`menuTitle ${isMenuOpen ? "menuOpen" : ""}`}>{menu.title}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Sidebar