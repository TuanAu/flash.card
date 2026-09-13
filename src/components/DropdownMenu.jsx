import React, { useEffect, useRef, useState } from "react";

export function DropdownTrigger({ children }) {
  return <div className="mb-1">{children}</div>;
}

// hover:bg-linear-to-br! hover:bg-clip-text! hover:text-trans! hover:text-semibold!
//     hover:from-violet-400! hover:via-violet-500! hover:to-indigo-500!
export function DropdownContent({ children }) {
  const content = children.map((child) => {
    const hoverClass = `hover:bg-linear-to-br hover:bg-clip-text hover:text-transparent! hover:from-violet-400 via-violet-500 hover:to-indigo-500 
    active:bg-linear-to-br active:bg-clip-text active:text-transparent! active:from-violet-400 via-violet-500 active:to-indigo-500`;
    const existingClass = child.props.className || "";
    const newClass = existingClass + " " + hoverClass;
    const cloneElement = React.cloneElement(child, { className: newClass });

    return cloneElement;
  });
  return <>{content}</>;
}
export default function DropdownMenu({ children }) {
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef(null);

  const trigger = children[0];
  const content = children[1];

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShowMenu(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleClickTrigger = (event) => {
    if (menuRef.current === null) {
      menuRef.current = event.target;
    }
    console.log(menuRef.current);
    setShowMenu((currentState) => !currentState);
  };

  return (
    <div className="relative">
      <div onClick={handleClickTrigger}>{trigger}</div>
      {showMenu ? (
        <div
          ref={menuRef}
          className="absolute z-50 bg-white px-2 py-3 w-full flex flex-col gap-3 shadow-xl/20 rounded-lg cursor-pointer"
        >
          {content}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
