import type { FC, PropsWithChildren, ReactNode } from "react";

type ChildProps = PropsWithChildren<{
  count: number;
  content: ReactNode;
}>;
const Child: FC<ChildProps> = ({ count, content, children }) => {
  return (
    <>
      <div>{count}</div>
      {content}
      {children}
    </>
  );
};

function App() {
  return (
    <>
      <Child content={<div>我是content</div>} count={2}>
        <div>我是children</div>
      </Child>
    </>
  );
}

export default App;
