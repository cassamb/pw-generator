import Header from "./components/Header";
import Instructions from "./components/Instructions";
import Requirements from "./components/Requirements";
import { Flip, ToastContainer } from "react-toastify"; 
import 'react-toastify/dist/ReactToastify.css';   // Necessary import here so we can use them throughout the application

const App = () => {
  return (
    <>
      <Header/>
      <main className="max-w-sm w-5/6 grid gap-5 md:max-w-3xl md:grid-cols-5 md:gap-x-7 2xl:max-w-4xl">
        <Instructions/>
        <section className="md:col-span-2 md:flex md:flex-col md:gap-7">
          <Requirements/>
        </section>
      </main>
      <ToastContainer transition={Flip} hideProgressBar={true} autoClose={2500}/>
    </>
  );
};

export default App;
