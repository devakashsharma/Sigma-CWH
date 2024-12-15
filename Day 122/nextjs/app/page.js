// "use client";
// import { useState } from "react";
import fs from "fs/promises";

export default function Home() {
  // const [count, setcount] = useState(0);

  let a = fs.readFile(".gitignore");
  a.then((e) => {
    console.log(e.toString());
  })

  return (
    <div>
      I'm a state 
      {/* {count} */}
      {/* <button
        onClick={() => {
          setcount(count + 1);
        }}
      >
        CLick me
      </button> */}
    </div>
  );
}
