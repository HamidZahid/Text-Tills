import "./App.css";

import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  return (
    <>
      <Navbar title="TextTills" />

      <div className="container my-3">
        <TextForm Heading="Enter The Text To Analyze Below" />
      </div>
    </>
  );
}

export default App;
