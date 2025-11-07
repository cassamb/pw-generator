import {useState} from 'react';
import {createPassword} from "../helpers/generator";
import Password from './Password';

const Requirements = () => {
    const [length, setLength] = useState('');
    const [uppChars, setUppChars] = useState('');
    const [spChars, setSpChars] = useState('');
    const [numChars, setNumChars] = useState('');
    const [password, setPassword] = useState('');

    const generatePW = (e) => {
        e.preventDefault();

        const requirements = {
            length,
            uppChars,
            spChars,
            numChars,
        }

        setPassword(createPassword(requirements));
    }


  return (
    <>
      <Password password={password}/>
      <div className="font-[Martian-Mono] flex-1 rounded-xl bg-[#757092] p-7 text-xs">
        <form onSubmit={generatePW}>
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
              className="border-2 bg-white border-[#423e58]"
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
              className="border-2 bg-white border-[#423e58]"
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
              className="border-2 bg-white border-[#423e58]"
              required
              value={spChars}
              onChange={(e) => setSpChars(e.target.value)}
            />
          </div>
          <div className="mb-5 flex justify-between">
            <label htmlFor="numbers" className="font-semibold">
              Numbers:
            </label>
            <input
              type="number"
              id="numbers"
              name="numbers"
              min="0"
              max="20"
              className="border-2 bg-white border-[#423e58]"
              required
              value={numChars}
              onChange={(e) => setNumChars(e.target.value)}
            />
          </div>
          <button type="submit" className="block m-auto text-center font-medium border-4 rounded-md p-2 bg-[#b4aed4] border-[#423e58]">
            Generate Password
          </button>
        </form>
      </div>
    </>
  );
};

export default Requirements;
