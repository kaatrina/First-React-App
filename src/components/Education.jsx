import { useState } from "react";



function Education({ data, onSave }) {
  const [isEdit, setIsEdit] = useState(false);

  const [form, setForm] = useState(data);

 function handleEdit() {
    if (isEdit) {
      onSave(form);;
    } 
    setIsEdit(!isEdit)
  }


  function handleChange(e) {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  }

  if (isEdit) {
    return (
      <>
        <form>
          <label>
            Университет:
            <input
              name="university"
              value={form.university}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            Фамилия:
            <input
              name="spec"
              value={form.specialization}
              onChange={handleChange}
            />
          </label>
        </form>

        <button onClick={handleEdit}> Сохранить</button>
      </>
    );
  }

  return (
    <div className="pipi">
      <p>Университет: {form.university}</p>
      <p>Специальность: {form.specialization}</p>
      <button onClick={handleEdit}> Редактировать</button>
    </div>
  );
}

export { Education };
