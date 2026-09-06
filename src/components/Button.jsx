export default function Button({ variant, type, click, children }) {
  if (variant === "primary") {
    return (
      <button
        className="bg-black pt-1 pb-1 pl-2 pr-2 rounded-lg text-white cursor-pointer min-w-[7rem]
            hover:bg-linear-to-tr hover:from-indigo-600 hover:to-indigo-950 hover:from-15% hover:to-75%
            active:bg-linear-to-tr active:from-indigo-600 active:to-indigo-950 active:from-15% active:to-75%
            transition duration-800"
        onClick={click}
        type={type}
      >
        {children}
      </button>
    );
  } else {
    return (
      <button
        className="bg-taupe-400/60 dark:bg-mist-300/80 pt-1 pb-1 pl-2 pr-2 rounded-lg text-white cursor-pointer min-w-[7rem] text-black!
        hover:bg-linear-to-tr/oklab hover:from-mist-300/80 hover:via-taupe-300 hover:to-taupe-500 hover:from-20% hover:via-50%
        active:bg-linear-to-tr/oklab active:from-mist-300/80 active:via-taupe-300 active:to-taupe-500 active:from-20% active:via-50%
        transition duration-800"
        onClick={click}
        type={type}
      >
        {children}
      </button>
    );
  }
}
