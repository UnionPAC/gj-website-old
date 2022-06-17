import React from "react";

export const Contact = () => {
  return (
    <div>
      <h3>Contact</h3>
      <p>You can contact me here...</p>
      <ul>
        <li>
          <a
            href="https://medium.com/@geoff.ijamieson"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-medium"></i>
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com/unionpac_"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-twitter"></i>
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/geoff-jamieson-815175216/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </li>
      </ul>
    </div>
  );
};
