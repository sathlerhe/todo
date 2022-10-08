import { styled } from "../../../stitches.config";

export const Container = styled("div", {
  height: '83vh',
  padding: "$xxl",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: "$lg",
});

export const Card = styled("div", {
  borderRadius: '$sm',
  background: '$dark_300',
  padding: '$lg $sm',
  margin: "0 auto",
  width: "800px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "$xs",
  transition: '.3s ease',

  img: {
    width: "150px",
    borderRadius: "$sm",
  },

  '&:hover': {
    opacity: '.8',
  }
});

export const CardText = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "center",
  gap: "$xxxs",

  p: {
    margin: "0",
    width: "500px",
    color: '$dark_text_200'
  },

  h1: {
    color: '$dark_text_100',
    margin: "0",
  },
});
