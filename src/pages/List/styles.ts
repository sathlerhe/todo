import { styled } from "../../../stitches.config";

export const Container = styled("div", {
  minHeight: "83vh",
  padding: "$xl $sm",
  display: "flex",
  flexDirection: "column",
  gap: "$xxxs",

  ".checked": {
    textDecoration: "line-through #efefef",
  },
});

export const InputContainer = styled("div", {
  alignSelf: "center",
  input: {
    width: "300px",
    height: "40px",
    borderRadius: "$xs 0 0 $xs",
    border: "none",
    padding: "$nano",
    fontSize: "$body_1",
    outline: "0",
    background: "$dark_other_100",
    color: "$dark_text_100",
  },
  button: {
    width: "100px",
    height: "40px",
    border: "none",
    borderRadius: "0 $xs $xs 0",
    background: "$dark_text_200",
    fontSize: "$body_1",
    color: "$dark_text_100",
    cursor: "pointer",
  },
});

export const TodosBox = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "$xxs",
});

export const TodoContainer = styled("div", {
  display: "grid",

  gridTemplateColumns: "20fr 1fr",

  ">div": {
    display: "grid",
    gap: "$xxxs",
    fontSize: "1.7rem",
    fontWeight: "bold",
    gridTemplateColumns: "1em auto",
  },

  button: {
    background: "none",
    border: "none",
    cursor: 'pointer',

    "> img": {
      filter: "invert(50%)",
      width: "30px",
    },
  },

  "> div > p": {
    fontSize: "$header_6",
    fontWeight: "$light",
    color: "$dark_text_200",
  },
  "> div > input": {
    outline: "0",
    webkitAppearance: "none",
    appearance: "none",
    backgroundColor: "$dark_300",
    marginTop: ".7em",
    font: "inherit",
    color: "$dark_300",
    width: "1.15em",
    height: "1.15em",
    border: "0.15em solid $dark_300",
    borderRadius: "0.15em",
    transform: "translateY(-0.075em)",
    display: "grid",
    placeContent: "center",
  },

  "> div > input::before": {
    content: "",
    width: " 0.65em",
    height: "0.65em",
    transform: " scale(0)",
    transition: " 120ms transform ease-in-out",
    boxShadow: "inset 1em 1em var(--form-control-color)",
  },

  "> div > input:checked::before": {
    transform: "scale(1)",
    backgroundColor: "$dark_text_200",
    transformOrigin: "bottom left",
    clipPath: ` polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%)`,
  },
});

export const Divider = styled("div", {
  backgroundColor: "$dark_300",
  width: "100%",
  height: ".1px",
});
