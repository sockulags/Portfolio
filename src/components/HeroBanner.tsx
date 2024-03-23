import React from "react";
import "./HeroBanner.css";
import profilePicture from "../assets/profilepicture.png";

export const HeroBanner = () => {
  return (
    <section id="profile">
      <div className="picture-div">
        <div className="spinner">
          <img
            className="profille-picture"
            src={profilePicture}
            alt="Lucas Skog profile picture"
          />
        </div>
      </div>
      <div className="section__text">
        <p className="section__text__p1">Hello, I'm</p>
        <h1 className="title">Lucas Skog</h1>
        <p className="section__text__p2">Fullstack Developer</p>
        <div className="btn-container">
          <button className="btn-color-2">
            <span className="material-symbols-outlined">download</span>CV
          </button>
          <button className="btn-color-1">Contact Info</button>
        </div>
      </div>
    </section>
  );
};
