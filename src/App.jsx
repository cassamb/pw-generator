import Header from "./components/Header";
import Instructions from "./components/Instructions";
import Requirements from "./components/Requirements";
import { Flip, Slide, ToastContainer, Zoom } from "react-toastify"; 
import 'react-toastify/dist/ReactToastify.css';   // Necessary import here so we can use them throughout the application

const App = () => {
  return (
    <>
      <Header/>
      <main className="max-w-3xl mx-5 grid gap-5 sm:container sm:grid-cols-5 sm:gap-x-7">
        <Instructions/>
        <section className="sm:col-span-2 sm:flex sm:flex-col sm:gap-7">
          <Requirements/>
        </section>
      </main>
      <ToastContainer transition={Flip} hideProgressBar={true} autoClose={2500}/>
    </>
  );
};

export default App;
