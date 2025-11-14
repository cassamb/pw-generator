import Header from "./components/Header";
import Instructions from "./components/Instructions";
import Requirements from "./components/Requirements";

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
    </>
  );
};

export default App;
