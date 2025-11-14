import {FiCopy} from "react-icons/fi";

const Password = ({password}) => {

  if (password === '') { // placeholder
    password = "*************";
  }
  
  return (
    <>
      <div className="font-[Martian-Mono] mb-5 flex gap-2 rounded-xl bg-[#c5c5c5] p-4 sm:mb-0">
        <p className="flex-grow rounded-lg bg-white p-1 text-center text-xs sm:text-sm">
          {password}
        </p>
        <FiCopy className="inline text-xl mt-1 text-white"/>
      </div>
    </>
  );
};

export default Password;
