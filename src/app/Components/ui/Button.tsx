"use client"
import React from "react"
import Link from "next/link"

interface LinkButtonProps {
  href?: string
  target?: string
  lowBorder?: boolean
  showArrow?: boolean
  onClick?: () => void
  children: React.ReactNode
}

const LinkButton: React.FC<LinkButtonProps> = ({ href, target, children, lowBorder, showArrow, onClick }: LinkButtonProps) => {

  const baseStyle = `
    relative z-10 px-4 py-2 font-semibold rounded-full cursor-pointer
    bg-black border border-[#cacaca] text-[#cacaca] overflow-hidden
    transition-all duration-300 flex items-center gap-2
    before:content-[''] before:absolute before:bottom-[-100%] before:left-0
    before:w-full before:h-full before:bg-[#cacaca] before:rounded-full
    before:-z-10 before:transition-all before:duration-500
    hover:text-black hover:border-gray-400
    hover:before:bottom-0 hover:before:rounded-none
  `;

  const LowBorder = lowBorder ? "border-[#cacaca]/0 bg-transparent" : "border-[#cacaca] bg-black";

  const content = (
    <>
      {children}
      {showArrow && (
        <span className="
         opacity-0 group-hover:opacity-100 
         translate-x-0 group-hover:translate-x-0 
        transition-all duration-300
        inline-block
        ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="3 0 24 24"
            stroke="currentColor"
            className="w-6 h-6 font-black"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 12h20m0 0l-6-6m6 6l-6 6" />
          </svg>
        </span>

      )}
    </>
  );

  if (href) {
    return (
      <Link href={href} target={target} className={`group ${baseStyle} ${LowBorder}`}>
        {content}
      </Link>
    );
  }

  return (
    <button className={`group ${baseStyle} ${LowBorder}`} onClick={onClick}>
      {content}
    </button>
  );
};

export default LinkButton;
