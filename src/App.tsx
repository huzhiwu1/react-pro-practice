import { useEffect, useState, useRef } from "react";

import "./App.css";

// function App() {
//   const [num, setNum] = useState(0);

//   useEffect(() => {
//     console.log("effect");
//     const timer = setInterval(() => {
//       console.log(num);
//     }, 1000);

//     return () => {
//       console.log("clean up");
//       clearInterval(timer);
//     };
//   }, [num]);

//   return <div onClick={() => setNum((prevNum) => prevNum + 1)}>{num}</div>;
// }
// function App() {
//   const divRef = useRef(null);
//   useEffect(() => {
//     divRef.current.style.background = "blue";
//   }, []);
//   return (
//     <div style={{ background: "red" }} ref={divRef}>
//       我是一个div
//     </div>
//   );
// }

// export default App;
