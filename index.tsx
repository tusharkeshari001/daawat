import React from "react";

const index = () => {
  const [first, setfirst] = React.useState(true);
  return first ? <div>Welcome to github</div> : <div>Thank you github</div>;
};

export default index;
