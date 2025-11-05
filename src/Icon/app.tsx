import { IconAdd } from "./Icons/iconAdd";
import { IconEmail } from "./Icons/iconEmail";

function App() {
  return (
    <>
      <IconAdd size="10em" className="test-icon" />
      <IconEmail style={{ color: "yellow" }} />
      <IconAdd spin />
    </>
  );
}
export default App;
