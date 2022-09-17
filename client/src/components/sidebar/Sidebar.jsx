import axios from "axios";
import { useEffect, useState } from "react";
import "./sidebar.css";
import {Link} from "react-router-dom";

export default function Sidebar() {
  const [cats,setCats] = useState([]);

  useEffect(()=>{
    const getCats = async ()=>
    {
      const res = await axios.get("/categories")
      setCats(res.data);
    };
    getCats();
},[]);
  return (
    <div className="sidebar">
    <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img src="./images/me_off.jpg" alt="" />
        <p>Hello! This is "ART-iStick" art blog website. You can publish your artworks to showcase you talent and can also view the work of other artists!!</p>
        </div>  
    
    <div className="sidebarItem">
      <span className="sidebarTitle">CATEGORIES</span>
      <ul className="sidebarList">
        {cats.map(c=>(
          <Link to={`/?cat=${c.name}`} className="link">
          <li className="sidebarListItem">{c.name}</li>
          </Link>
          
        ))}
      </ul>
    </div>
    <div className="sidebarItem">
    <span className="sidebarTitle">FOLLOW US</span>
    <div className="sidebarSocial">
          <i className="sidebarIcon fa-brands fa-facebook"></i>
          <i className="sidebarIcon fa-brands fa-twitter"></i>
          <i className="sidebarIcon fa-brands fa-instagram"></i>
    </div>
    </div>
    </div>
  );
}
