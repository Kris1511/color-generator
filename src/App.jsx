import Form from "./Components/Form";
import ColorList from "./Components/ColorList";
import Values from "values.js";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

function App() {

  const [colors, setColors]=useState(new Values('#f15025').all(10));
  // console.log(new Values('#f15025').all(10));
  // new Values('#f15025') - This part creates a new instance of some kind of color-related object or class, possibly from a library or framework.
  // .all(10) - This suggests that the all() method is being called on the color object created in the previous step, with 10 as an argument.
  // The all() method is used to return the underlying array or object represented by the collection.


  // toast.error('error');
  // toast.success('success')

  const addColors = (color) =>{
    try {
      const newColor = new Values(color).all(10);
      setColors(newColor);
    } catch (error) {
      toast.error(error.message);
      // console.log(error); // Unable to parse color from string: #4d282
    }
  }


  return (
    <main>
      <Form addColors= {addColors} />
      <ColorList colors={colors} />
      <ToastContainer position="top-center" />
    </main>
  );
}

export default App;
