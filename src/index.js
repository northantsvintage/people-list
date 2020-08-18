import React from "react";
import ReactDom from "react-dom";

const Person = () => {
  return (
    <article>
      <img src="https://randomuser.me/api/portraits/med/men/75.jpg" />
      <h4>name</h4>
      <h6>job</h6>
    </article>
  );
};

const PersonList = () => {
  return (
    <section>
      <Person />
    </section>
  );
};

ReactDom.render(<PersonList></PersonList>, document.getElementById("root"));
