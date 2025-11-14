const Instructions = () => {
  return (
    <>
      <section className="font-[Martian-Mono] rounded-xl bg-[#8ba08a] p-5 sm:col-span-3 sm:mb-0 sm:px-12 sm:py-8">
        <h2 className="font-regular mb-2 text-center text-2xl sm:mb-4 sm:text-3xl">
          Instructions
        </h2>
        <p className="mb-1 text-xs font-light sm:text-sm">
          Welcome to the Password Generator where you can generate a random
          password based on the given requirements! You will be able to specify
          the following:
        </p>
        <ul className="list-disc ps-7 text-xs font-light sm:ps-10 sm:text-sm">
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
