import React from "react";
import Typical from 'react-typical'
import './Profile.css'

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
            <div className="profile-details-name">
                <span className="primary-text">
                    {" "}
                   Cześć, Jestem <span className="highlighted-text">Robert </span>
                   
                </span>
                </div>
                <div className="profile-details-role">
                   <span className="primary-text">
                    {" "}
                    <h1>
                        {" "}
                        <Typical
                        loop={Infinity}
                        steps={[
                            "React Developer ",
                            1000,
                            ".Net Developer",
                            1000,
                            "C# Developer",
                            1000,
                            "C++ Developer",
                            1000,
                        ]}/>

                   </h1>

                   <span className="prifile-role-tagline">
                    Tworze aplikacje cos tam asdasfdfgerfrsdfcvdfgsdfasdco stam.
                   </span>
                </span>
                
          </div>
          
          <div className="profile-options">
            <button className="btn primary-btn">
                        {""}
                        Hire me{" "}
                </button>
                <a href='RobertMalczewskiCV.pdf' download='RobertMalczewskiCV.pdf' >
                    <button className="btn highlighted-btn">Pobierz CV</button>
                </a>
                
          </div>
          
        </div>
          <div className="profile-picture">
              <div className="profile-picture-background">
              </div>
          </div>
      </div>
    </div>
  );
}
