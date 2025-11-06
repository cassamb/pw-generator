const Instructions = () => {
  return (
    <>
      <section className="font-[Martian-Mono] rounded-xl bg-[#8ba08a] py-8 px-12 col-span-3">
        <h2 className="mb-4 text-center text-3xl font-regular">
          Instructions
        </h2>
        <p className="mb-1 font-light text-sm">
          Welcome to the Password Generator where you can generate a random
          password based on the given requirements! You will be able to specify
          the following:
        </p>
        <ul className="list-disc ps-10 font-light text-sm">
          <li>Length</li>
          <li>Uppercase Characters (A to Z)</li>
          <li>Special Characters (!, #, $, %, and *)</li>
          <li>Numbers (0 to 9)</li>
        </ul>
      </section>
    </>
  );
};

export default Instructions;
