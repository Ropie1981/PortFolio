import React from "react";
import Carousel from "react-material-ui-carousel";
import Project from "./Project";
import teamportal from "../assets/TeamPortal-Home.jpg";
import wildfest from "../assets/WildFest-Home.jpg";
import packsmart from "../assets/PackSmart-Home.jpg";
import externatic from "../assets/Externatic-Sample.jpg";

export default function ProjectCarousel() {
  const projects = [
    {
      id: 1,
      name: "Wild'Fest",
      style: "Frontend",
      description:
        "My first group project after 3 weeks of learning HTML CSS and JavaScript ",
      image: `${wildfest}`,
      link: true,
    },
    {
      id: 2,
      name: "TeamPortal",
      style: "Frontend",
      description: `Company Intranet /  
      DeskTop First / 
      Group project made with  
      React.js /  
      API Rest /  
      pure CSS `,
      image: `${teamportal}`,
      link: true,
    },
    {
      id: 3,
      name: "PackSmart",
      style: "Frontend",
      description:
        "POC made in 24H during Wild Code School's Hackathon, made with REACT.js ",
      image: `${packsmart}`,
      link: true,
    },
    {
      id: 4,
      name: "Externatic (Currently in development)",
      style: "Backend + Frontend",
      description:
        " Job-Posting App for a Recruitment Office, development of the backend side with Express & MySQL, database modeling. On the Frontend part : use of Material UI ",
      image: `${externatic}`,
      link: false,
    },
  ];

  return (
    <Carousel
      interval="5000"
      swipe="true"
      sx={{ height: "100vh" }}
      indicatorIconButtonProps={{
        style: {
          padding: "10px",
          margin: "1rem",
        },
      }}
      activeIndicatorIconButtonProps={{
        style: {
          padding: "8px",
          color: "black",
          backgroundColor: "lightgrey",
        },
      }}
    >
      {projects.map((project) => (
        <Project key={project.id} project={project} />
      ))}
    </Carousel>
  );
}
