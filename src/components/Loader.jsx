export default function Loader({ text }) {
  return (
    <div className="flex flex-col items-center justify-center w-full mt-20">
      <div className="w-8 h-8 border-2 border-transparent border-t-indigo-700 rounded-full animate-spin"></div>
      <p className="mt-4 text-gray-600">{text}</p>
    </div>
  );
}
