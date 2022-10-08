import { styled } from "../../../stitches.config";

export const Container = styled("div", {
  padding: "$xl $sm",
  height: "83vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: "$sm",
});

export const Button = styled("button", {
  width: "150px",
  height: "40px",
  border: "none",
  fontSize: "$body_1",
  borderRadius: "$xs",
  background: "$dark_text_100",
  cursor: "pointer",
  transition: '.3s ease',

  "&:hover": {
    color: "$dark_text_100",
    background: "$dark_200",
    border: "1px solid $dark_text_100",
  },
});
