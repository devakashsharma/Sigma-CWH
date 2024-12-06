import { React, useContext } from "react";
import Box from "./Box";
import { counterContext } from "../context/context";

const Sidebar = () => {
  const value = useContext(counterContext);
  return (
    <div>
      <button onClick={() => value.setCount((count) => count + 11)}>
        Button <Box />
      </button>
    </div>
  );
};

export default Sidebar;
