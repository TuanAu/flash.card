import FlashCardMain from "./components/FlashCardMain";
function App() {
  return (
    <div>
      <div className="h-[100vh] flex justify-center items-center">
        <div
          className="rounded-br-[50px] pt-10 pb-10 pl-8 pr-8 
        bg-linear-to-tr from-indigo-600 via-violet-900 to-indigo-900
        from-10% via-80%"
        >
          <p className="text-white! font-bold">Tuan Au - Microfrontend</p>
        </div>
      </div>

      {/* <FlashCardMain></FlashCardMain> */}
    </div>
  );
}
export default App;
