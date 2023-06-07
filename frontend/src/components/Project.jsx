import { Paper, Button } from "@mui/material";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";
import LogoDev from "../assets/LogoDev.jpg";

export default function Project({ project }) {
  const handleSliderClick = () => {
    if (project.id === 1) {
      window.open(
        "https://wildcodeschool.github.io/2023-02-JS-FT-Lyon-P1-BrainForge/"
      );
    }
    if (project.id === 2) {
      window.open("https://portal-corporation.netlify.app/", "_blank");
    }
    if (project.id === 3) {
      window.open("https://github.com/Ropie1981/PackSmart", "_blank");
    }
  };

  return (
    <Paper maxWidth="xl">
      <img
        src={project.image}
        alt={project.name}
        style={{
          padding: "1rem",
          width: "100%",
          height: "auto",
          maxWidth: "100%",
        }}
      />

      <Typography variant="h4" color="primary" fontWeight={600} gutterBottom>
        {project.name}
      </Typography>
      <Typography variant="body1" gutterBottom>
        {project.description}
      </Typography>
      {project.link ? (
        <Button
          variant="outlined"
          className="CheckButton"
          onClick={handleSliderClick}
          sx={{ m: 2 }}
        >
          Check it out!
        </Button>
      ) : (
        <Button
          variant="disabled"
          className="CheckButton"
          onClick={handleSliderClick}
          sx={{ m: 2 }}
        >
          Check it out!
        </Button>
      )}
    </Paper>
  );
}

Project.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    style: PropTypes.string,
    image: PropTypes.string,
    description: PropTypes.string,
    link: PropTypes.bool,
  }),
};

Project.defaultProps = {
  project: {
    name: "My Projects",
    image: `${LogoDev}`,
    description: "This is the description for Project 1",
  },
};
