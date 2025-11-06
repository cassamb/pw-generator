import Header from "./components/Header";
import Instructions from "./components/Instructions";
import Password from "./components/Password";
import Requirements from "./components/Requirements";

const App = () => {

  return (
    <>
      <Header/>
      <main className="container max-w-3xl m-auto grid grid-cols-5 gap-x-7">
        <Instructions/>
        <section className="flex flex-col gap-7 col-span-2">
          <Password/>
          <Requirements/>
        </section>
      </main>
    </>
  );
};

export default App;
