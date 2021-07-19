import { useState } from "react";
import "./Info.css";

function Info({ children }) {
  const [show, setShow] = useState(true);

  function handleInfoClose() {
      setShow(false);
  }

  if (show) {
    return (
      <div className="alert_container">
        <div className="alert">
          <span onClick={handleInfoClose} className="closebtn">&times;</span>
          {children}
        </div>
      </div>
    );
  } else return null;
}

export default Info;
