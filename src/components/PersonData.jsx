import { useState } from "react";


function Person({ data, onSave }) {
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
            Имя:
            <input
              name="firstName"
              value={form.firstName}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            Фамилия:
            <input
              name="lastName"
              value={form.lastName}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            Email:
            <input
              name="mail"
              value={form.mail}
              onChange={handleChange}
              type="email"
            />
          </label>
          <br />
          <label>
            Телефон:
            <input
              name="number"
              value={form.number}
              onChange={handleChange}
              type="tel"
            />
          </label>
        </form>

        <button onClick={handleEdit}> Сохранить</button>
      </>
    );
  }

  return (
    <div className="pipi">
      <p>Имя: {form.firstName}</p>
      <p>Фамилия: {form.lastName}</p>
      <p>Email: {form.mail}</p>
      <p>Телефон: {form.number}</p>
      <button onClick={handleEdit}> Редактировать</button>
    </div>
  );
}

export { Person };
