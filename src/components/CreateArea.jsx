import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function CreateArea(props) {
  const [formData, setFormData] = useState({ title: "", content: "" });

  const formUpdatehandler = (event) => {
    const { name, value } = event.target;
    setFormData(prevVal => ({ ...prevVal, [name]: value }));
  };

  function handleSubmit(event) {
    event.preventDefault();
    if (formData.title && formData.content) {
      props.addItem({ id: uuidv4(), ...formData });
      setFormData({ title: "", content: "" });
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input name="title" placeholder="Title" value={formData.title} onChange={formUpdatehandler}/>
        <textarea name="content" placeholder="Take a note..." rows="3" value={formData.content} onChange={formUpdatehandler}/>
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
