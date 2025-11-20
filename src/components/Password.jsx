import {FiCopy} from "react-icons/fi";
import {toast} from 'react-toastify';

const Password = ({password}) => {
  return (
    <>
      <div className="font-[Martian-Mono] mb-5 flex gap-2 rounded-xl bg-[#c5c5c5] p-4 md:mb-0">
        <p className="grow rounded-lg bg-white p-1 text-center text-xs md:text-sm 2xl:text-base">
          {password}
        </p>
        <button onClick={async () => {
          navigator.clipboard.writeText(password);
          toast.info('Password Copied to Clipboard!');
        }}>
          <FiCopy className="inline cursor-pointer text-2xl text-white hover:text-black"/>
        </button>
      </div>
    </>
  );
};

export default Password;
