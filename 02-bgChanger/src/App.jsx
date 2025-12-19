import { useState } from 'react';
import Button from './Button';

function App() {
  const [colour, setColour] = useState('olive');
  function colorSetter(color) {
    setColour(color);
  }
  return (
    <div className="w-full h-screen duration-200" style={{ backgroundColor: colour }}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="fixed flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <Button btnText="red" setColour={colorSetter} />
          <Button btnText="green" setColour={colorSetter} />
          <Button btnText="blue" setColour={colorSetter} />
          <Button btnText="olive" setColour={colorSetter} />
          <Button btnText="gray" setColour={colorSetter} />
          <Button btnText="yellow" setColour={colorSetter} />
          <Button btnText="pink" setColour={colorSetter} />
          <Button btnText="purple" setColour={colorSetter} />
          <Button btnText="lavender" setColour={colorSetter} />
          <Button btnText="white" setColour={colorSetter} />
          <Button btnText="black" setColour={colorSetter} />
        </div>
      </div>
    </div>
  );
}
export default App;
