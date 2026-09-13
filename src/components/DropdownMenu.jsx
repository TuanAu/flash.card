import React, { useEffect, useRef, useState } from "react";

export function DropdownTrigger({ children }) {
  return <div className="mb-1">{children}</div>;
}

// hover:bg-linear-to-br! hover:bg-clip-text! hover:text-trans! hover:text-semibold!
//     hover:from-violet-400! hover:via-violet-500! hover:to-indigo-500!
export function DropdownContent({ children }) {
  const content = children.map((child) => {
    const hoverClass = `text-sm dark:text-white! mt-0 
    bg-linear-to-br bg-clip-text from-violet-400 via-violet-500 to-indigo-500 
    hover:text-transparent! dark:hover:text-transparent! 
    active:text-transparent! dark:active:text-transparent! `;
    const existingClass = child.props.className || "";
    const newClass = existingClass + " " + hoverClass;
    const cloneElement = React.cloneElement(child, { className: newClass });

    return cloneElement;
  });
  return <>{content}</>;
}
export default function DropdownMenu({ children }) {
  const [showMenu, setShowMenu] = useState(false);
  const buttonRef = useRef(null);
  const menuRef = useRef(null);

  const trigger = children[0];
  const content = children[1];

  useEffect(() => {
    function handleClickOutside(event) {
      if (buttonRef.current.contains(event.target)) {
        return;
      }
      if (!menuRef.current.contains(event.target)) {
        setShowMenu(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleClickTrigger = () => {
    setShowMenu((currentState) => !currentState);
  };

  return (
    <div className="relative">
      <div ref={buttonRef} onClick={handleClickTrigger}>
        {trigger}
      </div>
      {showMenu ? (
        <div
          ref={menuRef}
          className="absolute z-50 bg-white dark:bg-black
          px-2 py-3 w-full flex flex-col gap-3 shadow-xl/20 rounded-lg cursor-pointer"
        >
          {content}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
