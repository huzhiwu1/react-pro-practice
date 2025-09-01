import type { FunctionComponent, FC } from "react";
interface IProps {
  count: number;
}
const TestFn: FunctionComponent<IProps> = ({ count }) => {
  return <button>{count}</button>;
};
const TestB: FC<IProps> = ({ count }) => {
  return <button>{count}</button>;
};
const App: FunctionComponent = () => {
  return (
    <div>
      hello<TestFn count={23}></TestFn>
      <TestB count={234} />
    </div>
  );
};
export default App;
