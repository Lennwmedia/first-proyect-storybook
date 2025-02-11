import Button from "./Button";

export default {
  title: "components/button",
  component: Button,
  tags: ["autodocs"],
  args: {
    children: "Click me!",
    onClick: () => alert("clicked"),
  },
};

export const Primary = {};

export const Secondary = {
  args: {
    type: "secondary",
  },
};

export const Tertiary = {
  args: {
    type: "tertiary",
  },
};

