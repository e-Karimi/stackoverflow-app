import { SidebarLink } from "@/types";

export const themes = [
  { value: "light", label: "Light", icon: "/assets/icons/sun.svg" },
  { value: "dark", label: "Dark", icon: "/assets/icons/moon.svg" },
  { value: "system", label: "System", icon: "/assets/icons/computer.svg" },
];

export const sidebarLinks: SidebarLink[] = [
  {
    imgURL: "/assets/icons/home.svg",
    route: "/",
    label: "Home",
  },
  {
    imgURL: "/assets/icons/users.svg",
    route: "/community",
    label: "Community",
  },
  {
    imgURL: "/assets/icons/star.svg",
    route: "/collection",
    label: "Collections",
  },
  {
    imgURL: "/assets/icons/suitcase.svg",
    route: "/jobs",
    label: "Find Jobs",
  },
  {
    imgURL: "/assets/icons/tag.svg",
    route: "/tags",
    label: "Tags",
  },
  {
    imgURL: "/assets/icons/user.svg",
    route: "/profile",
    label: "Profile",
  },
  {
    imgURL: "/assets/icons/question.svg",
    route: "/ask-question",
    label: "Ask a question",
  },
];

export const hotQuestions = [
  {
    _id: 1,
    title: "How do I use express as a custom server in NextJS?",
  },
  {
    _id: 2,
    title: "Redux Toolkit Not Updating State as Expected",
  },
  {
    _id: 3,
    title: "Async/Await Function Not Handling Errors Properly",
  },
  {
    _id: 4,
    title:
      "How do ES6 module exports and imports work in JavaScript, and what are the key differences from CommonJS?",
  },
  {
    _id: 5,
    title: "How to Perfectly Center a Div with Tailwind CSS?",
  },
];


export const popularTags = [
  {
    _id: 1,
    name: 'javascript',
    totalQuestions: 5
  },
  {
    _id: 2,
    name: 'react',
    totalQuestions: 4
  },
  {
    _id: 3,
    name: 'next',
    totalQuestions: 7
  },
  {
    _id: 4,
    name: 'vue',
    totalQuestions: 4
  },
  {
    _id: 5,
    name: 'redux',
    totalQuestions: 8
  }
];
