import createFromIconfont from "./createFromIconfont";
import { IconAdd } from "./Icons/iconAdd";
import { IconEmail } from "./Icons/iconEmail";

function App() {
  const IconFont = createFromIconfont(
    "//at.alicdn.com/t/c/font_5057985_4kho4141eru.js"
  );
  return (
    <>
      <IconAdd size="10em" className="test-icon" />
      <IconEmail style={{ color: "yellow" }} />
      <IconAdd spin />
      <IconFont type="icon-folder" />
      <IconFont type="icon-exe" />
      <IconFont type="icon-image" size="10em" />
      <IconFont type="icon-file" spin />
      <IconFont
        type="icon-ppt"
        style={{ color: "blue" }}
        className="test-iconfont"
      />
    </>
  );
}
export default App;
