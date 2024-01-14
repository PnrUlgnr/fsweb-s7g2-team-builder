import React, { useEffect, useState } from "react";

const initialData = {
  isim: " ",
  eposta: " ",
  rol: " ",
};
const Form = (props) => {
  const { oldMember, editMember } = props;
  const { addMember } = props;
  const [formData, setFormData] = useState(initialData);
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    if (oldMember) {
      setEditMode(true);
      setFormData(oldMember);
    } else {
      setEditMode(false);
    }
  }, [oldMember]);

  const handleChange = (event) => {
    const { name, value, type } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setFormData(initialData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        İsim:
        <input
          type="text"
          name="isim"
          value={formData.isim}
          onChange={handleChange}
        />
      </label>
      <label>
        Eposta:
        <input
          type="text"
          name="eposta"
          value={formData.eposta}
          onChange={handleChange}
        />
      </label>
      <label>
        Rol:
        <input
          type="text"
          name="rol"
          value={formData.rol}
          onChange={handleChange}
        />
      </label>
      <button> Gönder </button>
    </form>
  );
};
export default Form;
