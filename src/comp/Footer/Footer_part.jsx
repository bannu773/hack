import React from "react";
import "./style.css";
import { BsFacebook, BsTwitter } from "react-icons/bs";
import { RiInstagramFill } from "react-icons/ri";
import { AiFillLinkedin } from "react-icons/ai";
import logo from '../../assets/logo-removebg-preview.png'
function Footer_part() {
  const iconStyle = {
    fontSize: "20px",
    cursor: "pointer",
  };

  return (
    <div className="footer">
      <div className="sect">
        <p>Organised by</p>
        <img src={logo}/>
      </div>
      <div className="section">
        <p>Stay upto date with our news and notifications</p>
        <div className="sec">
        <i style={iconStyle}>
          <BsFacebook />
        </i>
        <i style={iconStyle}>
          <AiFillLinkedin />
        </i>
        <i style={iconStyle}>
          <RiInstagramFill />
        </i>
        <i style={iconStyle}>
          <BsTwitter />
        </i>
        </div>
        <p>© AVISHKAAR 2023 | ALL RIGHTS RESERVED</p>
        <p>Developed and designed by SAC</p>
      </div>
    </div>
  );
}

export default Footer_part;
