import { styled } from "../../../../stitches.config";

export const AppFooter = styled("footer", {
  background: "$dark_100",
  width: "100%",
  height: "50px",
  display: "flex",
  padding: "$sm",
  alignItems: "center",
  justifyContent: "center",

  p: {
    fontSize: "$body_4",
    fontWeight: '$light',
    color: "$dark_text_200",
    
    '> a': {
      textDecoration: 'underline',
    }
  },
});