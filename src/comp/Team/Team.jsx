import React from "react";
import "./style.css";
import gf from "../../assets/g.png";
import ccc from "../../assets/logo-small-1-1.png";
import newleaf from "../../assets/319404445_1324961484944842_7733330898332491332_n.png";
import tcs from "../../assets/TCSiON_Badge (1).png";
import { useParallax } from "react-scroll-parallax";

function Team({teamRef}) {
  const head = useParallax({
    translateX: [-60, 20],
  });
  return (
    <div className="team" ref={teamRef}>
      <div className="col-md-12 text-center" ref={head.ref}>
        <h3 className="animate-character">OUR TEAM</h3>
      </div>
      <div className="team-cont">
        <div className="team-card bg-white  ">
          <img src={gf} alt="team 1" className="team-image" />
          <p>XXXXXXXXXX</p>
        </div>
        <div className="team-card bg-white ">
          <img src={ccc} alt="team 1" className="team-image" />
          <p>XXXXXXXXXX</p>
        </div>
        <div className="team-card bg-white ">
          <img src={newleaf} alt="team 2" className="team-image" />
          <p>XXXXXXXXXX</p>
        </div>
        <div className="team-card bg-white tcs-ion">
          <img src={tcs} alt="team 3" className="team-image1" />
          <p>XXXXXXXXXX</p>
        </div>
        <div className="team-card bg-white ">
          <img src={gf} alt="team 3" className="team-image" />
          <p>XXXXXXXXXX</p>
        </div>
        <div className="team-card bg-white  ">
          <img src={gf} alt="team 1" className="team-image" />
          <p>XXXXXXXXXX</p>
        </div>
        <div className="team-card bg-white ">
          <img src={ccc} alt="team 1" className="team-image" />
          <p>XXXXXXXXXX</p>
        </div>
        <div className="team-card bg-white ">
          <img src={newleaf} alt="team 2" className="team-image" />
          <p>XXXXXXXXXX</p>
        </div>
        <div className="team-card bg-white tcs-ion">
          <img src={tcs} alt="team 3" className="team-image1" />
          <p>XXXXXXXXXX</p>
        </div>
        <div className="team-card bg-white  ">
          <img src={gf} alt="team 3" className="team-image" />
          <p>XXXXXXXXXX</p>
        </div>
      </div>
    </div>
  );
}

export default Team;
