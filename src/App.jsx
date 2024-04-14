import Form from "./Components/Form";
import ColorList from "./Components/ColorList";
import Values from "values.js";
import { useState } from "react";

function App() {

const [colors, setColors]=useState(new Values('#f15025').all(10));
  console.log(new Values('#f15025').all(10));
  // new Values('#f15025') - This part creates a new instance of some kind of color-related object or class, possibly from a library or framework.
  // .all(10) - This suggests that the all() method is being called on the color object created in the previous step, with 10 as an argument.
  return (
    <main>
      <Form />
      <ColorList />
    </main>
  );
}

export default App;
