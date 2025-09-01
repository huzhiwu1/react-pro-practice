import type {
  ReactNode,
  CSSProperties,
  PropsWithChildren,
  HTMLAttributes,
} from "react";

// type ChildProps = PropsWithChildren<{
//   content: ReactNode;
//   style: CSSProperties;
// }>;
// function Child(props: ChildProps) {
//   return (
//     <h1 style={props.style}>
//       {props.children} {props.content}hello
//     </h1>
//   );
// }
// function App() {
//   return (
//     <Child
//       style={{ border: "1px solid red", color: "red" }}
//       content={<div>content</div>}
//     >
//       <div>child</div>
//     </Child>
//   );
// }

interface IChildProps
  extends Omit<HTMLAttributes<HTMLDivElement>, "style" | "content">,
    PropsWithChildren {
  content: ReactNode;
  style: CSSProperties;
}

function Child(props: IChildProps) {
  const { style, children, content, ...attris } = props;
  return (
    <div {...attris} style={style}>
      hello{content}
      {children}
    </div>
  );
}
function App() {
  return (
    <Child content={<div>888 content</div>} data-l="a" style={{ color: "red" }}>
      <h1>hello children</h1>
    </Child>
  );
}

export default App;
