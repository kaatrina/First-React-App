import { Education } from "./Education";
import { Person } from "./PersonData";
import { Work } from "./Experience";
import { useState } from "react";

function Form() {
  const [personData, setPersonData] = useState({
    firstName: "Kate",
    lastName: "Khan",
    mail: "katya@mail.ru",
    number: "233-212-098",
  });

  const [educationData, setEducationData] = useState({
    university: "RTU MIREA",
    specialization: "IT technologies",
  });

  const [workData, setWorkData] = useState({
    company: "Google",
    post: "Frontend Developer",
  });

  const [activeIndex, setIndex] = useState(null);

  function handleToggle(index) {
    if (activeIndex === index) {
      setIndex(null); // если уже открыт - закрываем
    } else {
      setIndex(index); // если закрыт - открываем
    }
  }

  return (
    <>
      <h1>React Form</h1>

      <div className={'divi'} onClick={() => handleToggle("person")} style={{ cursor: "pointer" }}>
        <h2>Personal Data</h2>
      </div>
      {activeIndex === "person" && (
        <Person data={personData} onSave={setPersonData} />
      )}

      <div className={'divi'}
        onClick={() => handleToggle("education")}
        style={{ cursor: "pointer" }}
      >
        <h2>Education</h2>
      </div>
      {activeIndex === "education" && (
        <Education data={educationData} onSave={setEducationData} />
      )}

      <div className={'divi'} onClick={() => handleToggle("work")} style={{ cursor: "pointer" }}>
        <h2>Work experience</h2>
      </div>
      {activeIndex === "work" && <Work data={workData} onSave={setWorkData} />}
    </>
  );
}

export { Form };
