const Password = ({password}) => {

  if (password === '') { // placeholder
    password = "*************";
  }
  
  return (
    <>
      <div className="font-[Martian-Mono] rounded-xl border-8 border-[#c5c5c5]">
        <p className="block rounded-xl bg-white text-center text-lg">
          {password}
        </p>
      </div>
    </>
  );
};

export default Password;
