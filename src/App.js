import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";

function App() {
  return (
    <>
      {/* <Navbar /> */}
      <Navbar title="Textutils" aboutText="About text utils" />
      <div className="container mt-4">
        {/* <TextForm heading="Enter The text to analyze Below" /> */}
        <About />
      </div>
    </>
  );
}

export default App;
