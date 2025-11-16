import "./App.css";
import Card10 from "./components/card";

function App() {
  return (
    <>
      <h1 className="bg-green-500 text-black p-4 rounded-2xl m-4 ">
        Tailwind CSS
      </h1>
      <Card10 headTitle="New Design Solution" btn="Show More" view="856" />
      {/* <Card10 headTitle="Power Design Solution" btn="View More" view="524" /> */}
    </>
  );
}

export default App;
