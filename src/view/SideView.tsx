"use client";
import { useState } from "react";
import Image from "next/image";

function SideView() {
    //화면 넒이에따라 변경
    const [isOpen, setIsOpen] = useState(false);
    const toggleSideMenu = (e: React.MouseEvent<HTMLImageElement>) => {
        e.stopPropagation();
        setIsOpen((prevState) => !prevState);
    };
    //닫힘 아이콘
    return (
        <>
            <Image
                className="absolute top-4 left-4 cursor-pointer dark:stroke-black hover:scale-125"
                src={"/menu.svg"}
                width={40}
                height={40}
                alt="menu"
                onClick={(e) => {
                    setIsOpen(!isOpen);
                    toggleSideMenu(e);
                }}
            />
        </>
    );
}

export default SideView;
