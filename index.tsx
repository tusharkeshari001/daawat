import React from "react";
import { handleTrigger } from ".";

const index = () => {
  const [first, setfirst] = React.useState(true);
  return first ? (<div>
    Welcome to github
    <button onClick={handleTrigger}></button>
    </div>) : <div>Thank you github</div>;
};

export default index;
