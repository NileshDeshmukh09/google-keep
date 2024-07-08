// src/components/Sidebar/data.tsx
import React from "react";
import { FaRegLightbulb } from "react-icons/fa";
import { FaRegBell } from "react-icons/fa";
import { RiPencilLine } from "react-icons/ri";
import { IoArchiveOutline } from "react-icons/io5";
import { FaRegTrashAlt } from "react-icons/fa";

export const data = [
  {
    icons: <FaRegLightbulb size={20} color={"#fff"} />,
    text: "Notes",
    path: "/",
  },
  {
    icons: <FaRegBell size={20} color={"#fff"} />,
    text: "Reminders",
    path: "/reminders",
  },
  {
    icons: <RiPencilLine size={20} color={"#fff"} />,
    text: "Edit Labels",
    path: "/edit-labels",
  },
  {
    icons: <IoArchiveOutline size={20} color={"#fff"} />,
    text: "Archive",
    path: "/archieve"
  },
  {
    icons: <FaRegTrashAlt size={20} color={"#fff"} />,
    text: "Trash",
    path: "/trash",
  },
];
