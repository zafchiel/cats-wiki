"use client";

import { useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import searchIcon from "../assets/icons/search.svg";
import ModalContent from "./modalContent";

export default function SearchModal() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <div className="relative">
        <input
          onClick={() => setIsModalOpen(true)}
          type="search"
          placeholder="Enter your breed"
          className="py-3 pl-3 pr-10 w-full rounded-3xl caret-black text-black"
        />
        <Image
          src={searchIcon}
          alt="Search Icon"
          className="absolute top-4 right-4"
        />
      </div>
      {isModalOpen &&
        createPortal(
          <ModalContent onClose={() => setIsModalOpen(false)} />,
          document.body
        )}
    </>
  );
}
