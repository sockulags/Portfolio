import { v4 as uuid } from "uuid";

interface INavigationPaths {
  id: string;
  name: string;
  path: string;
}

const github: INavigationPaths = {
  id: uuid(),
  name: "Github",
  path: "https://github.com/sockulags",
};

const linkedIn: INavigationPaths = {
  id: uuid(),
  name: "LinkedIn",
  path: "https://www.linkedin.com/in/lucas-skog-05b064290/",
};

export const navigationPaths: INavigationPaths[] = [
  { id: uuid(), name: "About Me", path: "#about" },
  { id: uuid(), name: "Skills", path: "#skills" },
  { id: uuid(), name: "Experience", path: "#experience" },
  {
    id: linkedIn.id,
    name: linkedIn.name,
    path: linkedIn.path,
  },
  {
    id: github.id,
    name: github.name,
    path: github.path,
  },
];
