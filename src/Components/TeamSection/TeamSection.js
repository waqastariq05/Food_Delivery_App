import React from "react";
import "../TeamSection/TeamSection.css";
import Title from "../Title/Title";
// Team Photos
import team1 from "../../images/teams/team-1.png";
import team2 from "../../images/teams/team-2.png";
import team3 from "../../images/teams/team-3.png";

const TeamSection = () => {
  let teams = [
    {
      img: team1,
      title: "John Carter",
      subTitle: "Co-Founder & Manager",
      text: "Lorem ipsum dolor sit amet consect adipiscing elit volutpat eget ultricies ut nascetur.",
    },
    {
      img: team2,
      title: "Sophie Moore",
      subTitle: "Head of staff",
      text: "Lorem ipsum dolor sit amet consect adipiscing elit volutpat eget ultricies ut nascetur.",
    },
    {
      img: team3,
      title: "Andy Smith",
      subTitle: "Supplier",
      text: "Lorem ipsum dolor sit amet consect adipiscing elit volutpat eget ultricies ut nascetur.",
    }
  ]
  return (
    <div className="teamSection">
      <div className="pad-56">
        <Title h6="TEAM MEMBERS" h2="Meet Our Best Team" />
        <div className="row body">
          {teams.map((team, index) => {
            return (
              <div className="col-md-4 box" key={index}>
                <div className="card">
                  <div className="card-img">
                    <img src={team.img} className="card-img-top" alt="team" />
                  </div>
                  <div className="card-body">
                    <h2 className="card-title">{team.title}</h2>
                    <h4 className="card-sub-title">{team.subTitle}</h4>
                    <p className="card-text">{team.text}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  );
};

export default TeamSection;
