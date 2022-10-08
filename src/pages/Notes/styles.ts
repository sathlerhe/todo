import { styled } from "../../../stitches.config";
import { Link } from "react-router-dom";

export const Container = styled("div", {
  padding: "$xl $sm",
  minHeight: "37.9vw",
});

export const NoteCards = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: "$xxxs",
});

export const NoteCard = styled("div", {
  background: "$dark_300",
  padding: "$xxxs",
  borderRadius: "$sm",
  h2: { color: "$dark_text_100" },
  p: { color: "$dark_text_200" },
  transition: '.3s ease',

  "&:hover": {
    opacity: ".8",
  },
});

export const Button = styled(Link, {
  width: '200px',
  margin: '$xxxs auto',
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  background: '$dark_text_100',
  padding: '0 $xxxs',
  borderRadius: '$pill',
  height: '40px',
  transition: '.3s ease',

  '&:hover': {
    border: '1px solid $dark_text_100',
    background: '$dark_200',
    color: '$dark_text_100',
  }
});
