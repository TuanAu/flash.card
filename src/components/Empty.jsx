import { FolderSearch } from "lucide-react";

export default function Empty() {
  return (
    <div className="flex flex-col justify-center items-center gap-2">
      <div className="pt-1 pb-1 pl-2 pr-2 bg-gray-100/50 rounded-lg">
        <FolderSearch className="w-[15px] text-black" />
      </div>
      <p className="mt-0 font-medium">No stack yet</p>
      <div className="mt-3 mb-1">
        <p className="text-sm mt-0">Create a stack of cards now.</p>
      </div>
      <button
        className="bg-black pt-1 pb-1 pl-2 pr-2 rounded-lg text-white cursor-pointer 
        hover:bg-linear-to-tr hover:from-indigo-600 hover:to-indigo-950 hover:from-15% hover:to-75%
        transition duration-1200"
      >
        Create a stack
      </button>
    </div>
  );
}
