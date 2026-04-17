import { useState } from "react";



function Work({ data, onSave }) {
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
            Место работы:
            <input
              name="company"
              value={form.company}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            Должность:
            <input name="post" value={form.post} onChange={handleChange} />
          </label>
        </form>

        <button onClick={handleEdit}> Сохранить</button>
      </>
    );
  }

  return (
    <div className="pipi">
      <p>Место работы: {form.company}</p>
      <p>Должность: {form.post}</p>
      <button onClick={handleEdit}> Редактировать</button>
    </div>
  );
}

export { Work };
