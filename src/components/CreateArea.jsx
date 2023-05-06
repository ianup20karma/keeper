import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";

function CreateArea(props) {
  const [formData, setFormData] = useState({ title: "", content: "" });
  const [startCreating, setStartCreating] = useState(false);

  const formUpdatehandler = (event) => {
    const { name, value } = event.target;
    setFormData((prevVal) => ({ ...prevVal, [name]: value }));
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
      <form className="create-note" onSubmit={handleSubmit}>
        {startCreating && (
          <input
            name="title"
            placeholder="Title"
            value={formData.title}
            onChange={formUpdatehandler}
          />
        )}
        <textarea
          onClick={() => setStartCreating(true)}
          name="content"
          placeholder="Take a note..."
          rows={startCreating ? "3" : "1"}
          value={formData.content}
          onChange={formUpdatehandler}
        />
        <Zoom in={startCreating}>
          <Fab type="submit">
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
