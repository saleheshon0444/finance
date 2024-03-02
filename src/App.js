import Header from "./components/header";
import Memberrchart from "./components/memberchart";
import Menu from "./components/menu";
function App() {
  return (
    <div className="App">
      <div className="w-full h-full flex flex-row space-x-2 justify-center items-start">
        <Menu />
        <div className="w-[1195px] h-[1068px] mt-5 flex flex-col space-y-2 bg-back rounded-3xl">
          <Header />
          <Memberrchart  />
        </div>
      </div>
    </div>
  );
}

export default App;
