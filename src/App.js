import Image from "./image.png";
import "./App.css";

function App() {
  return (
    <div className="bg-gray-500 min-h-screen flex items-center justify-center">
      <div className="max-w-sm mx-auto bg-white rounded-2xl">
        <div className=" flex justify-center">
          <img className="mt-8 max-w-xs max-h-xs rounded-2xl " src={Image} />
        </div>
        <h2 className="pt-5 text-xl mx-16 font-semibold text-center">
          Improve your front-end skills by building projects
        </h2>
        <p className="pt-5 pb-10 mx-16 text-center ">
          Scan the QR code to vist front-endmentor and take your coding skills
          to the next level
        </p>
      </div>
    </div>
  );
}

export default App;
