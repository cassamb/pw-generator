import {useState} from 'react';
import {createPassword} from "../helpers/generator";
import Password from './Password';
import {toast} from 'react-toastify';

const Requirements = () => {
    const [length, setLength] = useState('');
    const [uppChars, setUppChars] = useState(0);
    const [spChars, setSpChars] = useState(0);
    const [numChars, setNumChars] = useState(0);
    const [password, setPassword] = useState('');
    const [isValid, setIsValid] = useState(true);

    const generatePassword = (e) => {
        e.preventDefault();

        if (length - uppChars - spChars - numChars > 0) {
          
          setIsValid(true);

          const requirements = {
            length,
            uppChars,
            spChars,
            numChars,
          }
          setPassword(createPassword(requirements));

        } else {
          setIsValid(false);
          setPassword('');
          toast.warning('Invalid Password Requirements. Please Try Again');
        }
    }

  return (
    <>
      <Password password={password}/>
      <div className="rounded-xl bg-[#757092] p-5 font-[Martian-Mono] text-xs md:flex-1 md:p-7 2xl:text-sm 2xl:pt-9">
        <form onSubmit={generatePassword}>
          <div className="mb-4 flex justify-between">
            <label htmlFor="length" className="font-semibold">
              Length:
            </label>
            <input
              type="number"
              id="length"
              name="length"
              min="0"
              max="20"
              className={isValid ? "border-2 bg-white border-[#423e58]" : "border-2 bg-white border-[#8f2828]"}
              required
              value={length}
              onChange={(e) => setLength(e.target.value)}
            />
          </div>
          <div className="mb-4 flex justify-between">
            <label htmlFor="uppercase" className="font-semibold">
              Uppercase Characters:
            </label>
            <input
              type="number"
              id="uppercase"
              name="uppercase"
              min="0"
              max="20"
              className={isValid ? "border-2 bg-white border-[#423e58]" : "border-2 bg-white border-[#8f2828]"}
              required
              value={uppChars}
              onChange={(e) => setUppChars(e.target.value)}
            />
          </div>
          <div className="mb-4 flex justify-between">
            <label htmlFor="special" className="font-semibold">
              Special Characters:
            </label>
            <input
              type="number"
              id="special"
              name="special"
              min="0"
              max="20"
              className={isValid ? "border-2 bg-white border-[#423e58]" : "border-2 bg-white border-[#8f2828]"}
              required
              value={spChars}
              onChange={(e) => setSpChars(e.target.value)}
            />
          </div>
          <div className="mb-5 2xl:mb-6 flex justify-between">
            <label htmlFor="numbers" className="font-semibold">
              Numbers:
            </label>
            <input
              type="number"
              id="numbers"
              name="numbers"
              min="0"
              max="20"
              className={isValid ? "border-2 bg-white border-[#423e58]" : "border-2 bg-white border-[#8f2828]"}
              required
              value={numChars}
              onChange={(e) => setNumChars(e.target.value)}
            />
          </div>
          <button type="submit" className="cursor-pointer block m-auto text-center font-medium border-4 rounded-md p-2 shadow bg-[#b4aed4] border-[#423e58] hover:bg-[#908bad] hover:border-[#302d41]">
            Generate Password
          </button>
        </form>
      </div>
    </>
  );
};

export default Requirements;
