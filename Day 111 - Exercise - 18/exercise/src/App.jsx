// import { useState, useEffect } from "react";

// function App() {
//   const [userData, setUserData] = useState("");

//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/posts")
//       .then((res) => res.json())
//       .then((data) => setUserData(data));
//   }, []);

//   return (
//     <>
//       <div className="w-full h-screen flex flex-col justify-center items-center">
//         <h1 className="text-[50px]">Review from our customer</h1>
//         <div className="container-box w-[50vw] h-[50vh] flex flex-col bg-white ">
//           {userData.map((datas) => {
//             return (
//               <div
//                 key={datas.id}
//                 className="api-container flex flex-col justify-center items-center"
//               >
//                 <h1>{datas.title}</h1>
//                 <p>{datas.body}</p>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </>
//   );
// }

// export default App;

import { useState, useEffect } from "react";

function App() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setUserData(data));
  }, []);

  return (
    <>
      <div className="w-full flex flex-col justify-center items-center">
        <h1 className="text-[50px] mt-10"><u>Quotes from famous persons</u></h1>
        <div className="container-box ">
          {userData &&
            userData.map((datas) => (
              <div className="m-[50px] ">
                <h1 className="text-[24px]">Quote No. {datas.id}</h1>
                <div
                  key={datas.id}
                  className="api-container border-[2px] border-white flex flex-col gap-5 justify-start items-start p-3 m-3"
                >
                  <h1 className="text-[24px]">{datas.title}</h1>
                  <p className="text-[18px]">{datas.body}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}

export default App;
