import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import html from "../assets/html-5.png";
import react from "../assets/atom.png";
import js from "../assets/js.png";
import css from "../assets/css-3.png";
import node from "../assets/nodejs.png";
import sql from "../assets/mysql.png";

const itemData = [
  {
    img: `${html}`,
    title: "HTML",
  },
  {
    img: `${react}`,
    title: "REACT.js",
  },
  {
    img: `${js}`,
    title: "JavaScript",
  },
  {
    img: `${css}`,
    title: "CSS",
  },
  {
    img: `${node}`,
    title: "Node.js",
  },
  {
    img: `${sql}`,
    title: "MySQL",
  },
];

export default function Stack() {
  return (
    <ImageList
      sx={{ width: { xs: 320, lg: 500 }, height: { xs: 300, lg: 400 } }}
      cols={3}
      rowHeight={120}
    >
      {itemData.map((item) => (
        <ImageListItem key={item.img} sx={{ width: "100%" }}>
          <img
            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}
