import { styled } from "../../../../stitches.config";

export const AppHeader = styled("header", {
  background: "$dark_100",
  width: "100%",
  height: "50px",
  display: "flex",
  padding: "$sm $huge",
  alignItems: "center",
  justifyContent: "space-between",

  h1: {
    fontSize: "$header_1",
    fontWeight: "$light",
    color: "$dark_text_100",
    transition: ".3s ease",

    "&:hover": {
      opacity: ".8",
    },
  },
});

export const LinksList = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "$sm",

  p: {
    color: "$dark_text_100",
    fontSize: "$header_6",
    fontWeight: "$light",
    transition: ".3s ease",

    "&:hover": {
      opacity: ".8",
    },
  },
});
