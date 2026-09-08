export default function Modal({ open, close, children }) {
  if (open) {
    return (
      <div
        className="fixed inset-0 z-50 pl-8 pr-8 pb-1
        flex items-end justify-center 
        bg-black/50 backdrop-blur-xs animate-fade-in"
        onClick={close}
      >
        <div
          className="relative w-full max-w-md h-[65vh] rounded-tl-xl rounded-tr-xl p-6 shadow-xl animate-slide-up
           bg-olive-200
           dark:bg-linear-to-bl/oklab dark:from-neutral-900 dark:to-indigo-900"
          onClick={(e) => e.stopPropagation()}
        >
          {children}
        </div>
      </div>
    );
  }
  return <></>;
}
