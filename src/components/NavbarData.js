import React from "react";
import { FaUser } from "react-icons/fa";
import { MdViewArray } from "react-icons/md";
import { MdViewModule } from "react-icons/md";

export const NavbarData = [
    {
        title: "About",
        icon: <FaUser size="26px" />,
        link: "/"
    },
    {
        title: "Work",
        icon: <MdViewArray size="28px" />,
        link: "/Work"
    },
    {
        title: "Service",
        icon: <MdViewModule size="28px" />,
        link: "/Service"
    }
]