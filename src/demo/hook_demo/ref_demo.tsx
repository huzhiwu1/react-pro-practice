import { useEffect, useImperativeHandle, useRef } from "react";
import React from "react";
// const Child: React.ForwardRefRenderFunction<
//   HTMLInputElement,
//   { initialText: string }
// > = (props, ref) => {
//   useEffect(() => {
//     console.log("child useEffect", props);
//   }, []);
//   return (
//     <div>
//       <input type="text" ref={ref} placeholder={props.initialText} />
//     </div>
//   );
// };
// const WrapperChild = React.forwardRef(Child);
// function App() {
//   const inputRef = useRef<HTMLInputElement>(null);
//   useEffect(() => {
//     inputRef?.current?.focus();
//     console.log("father,input", inputRef);
//   }, []);
//   return (
//     <div>
//       父级容器
//       <WrapperChild initialText="abc" ref={inputRef} />
//     </div>
//   );
// }
interface IRefProps {
  aaa: () => void;
}
const Child: React.ForwardRefRenderFunction<
  IRefProps,
  { initialText: string }
> = (props, ref) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useImperativeHandle(
    ref,
    () => {
      return {
        aaa() {
          inputRef?.current?.focus();
        },
      };
    },
    [inputRef]
  );

  return <input placeholder={props.initialText} ref={inputRef} />;
};
const WrapperChild = React.forwardRef(Child);
function App() {
  const inputRef = useRef<IRefProps>(null);
  useEffect(() => {
    console.log(inputRef);
    inputRef?.current?.aaa();
  }, []);
  return (
    <div>
      父级容器
      <WrapperChild ref={inputRef} initialText="test" />
    </div>
  );
}

export default App;
