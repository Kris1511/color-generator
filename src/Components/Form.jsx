import React, { useState } from "react";

const Form = ({addColors}) => {
  const [color, setColor] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addColors(color);
  };

  return (
    <section className="container">
      <h4>color generator - starter</h4>
      <form className="color-form" onSubmit={handleSubmit}>
        <input
          type="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
        <input
          type="text"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          placeholder="#f15025"
        />
        <button type="submit" className="btn" style={{ background: color }}>
          submit
        </button>
      </form>
    </section>
  );
};

export default Form;
