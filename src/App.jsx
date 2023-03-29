import React, { useState } from "react";

export default function Form() {
  const initialValues = {
    company: "",
    position: "",
    link: "",
    date: "",
    note: "",
  };
  const [values, setValues] = useState(initialValues);


  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setValues({
      ...values,
      [name]: value,
    });
  };

  return (
    <form>
      <input
        value={values.company}
        onChange={handleInputChange}
        name="company"
        label="Company"
      />
      <input
        value={values.position}
        onChange={handleInputChange}
        name="position"
        label="Job Title"
      />
      <button type="submit"> Submit </button>
    </form>
  );
}
