import React from "react";
import ReactDom from "react-dom";
import "./index.css";

const Person = ({ img, name, job, children }) => {
  const url = `https://randomuser.me/api/portraits/med/men/${img}.jpg`;
  return (
    <article className="person">
      <img src={url} alt="profile" />
      <h4>{name}</h4>
      <h6>{job}</h6>
      {children}
    </article>
  );
};

const PersonList = () => {
  return (
    <section className="personList">
      <Person img="7" name="John" job="developer" />
      <Person img="27" name="Bob" job="designer">
        <p>
          Found a bug or have an idea? Contribute to randomuser.me's database on
          github.com
        </p>
      </Person>
      <Person img="37" name="Nick" job="cleaner" />
    </section>
  );
};

ReactDom.render(<PersonList></PersonList>, document.getElementById("root"));
