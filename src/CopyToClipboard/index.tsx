import type { FC, ReactElement } from "react";
import React from "react";
import copy from "copy-to-clipboard";

export type CopyToClipboardProps = {
  text: string;
  onCopy?: (text: string, result: boolean) => void;
  children: ReactElement;
  options?: {
    debug?: boolean;
    message?: string;
    format?: string;
  };
};
interface ElementWithOnClick {
  props: {
    onClick: Function;
  };
}
const CopyToClipboard: FC<CopyToClipboardProps> = function (props) {
  const { text, onCopy, children, options } = props;
  // 判断子组件是不是单个，只支持单个,不支持会报错
  const elem = React.Children.only(children);

  // 点击事件，点击后，复制文本，复制成功后调用onCopy
  function onClick(event: MouseEvent) {
    const result = copy(text, options);
    onCopy?.(text, result);

    //如果子组件有点击事件，则调用
    if (typeof (elem as ElementWithOnClick)?.props?.onClick === "function") {
      (elem as ElementWithOnClick)?.props?.onClick(event);
    }
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return React.cloneElement<any>(elem, { onClick });
};

// // export default CopyToClipboard;
// function App() {
//   return (
//     <CopyToClipboard
//       text="测试复制文本"
//       onCopy={(text, result) => console.log("onCopy", text, result)}
//     >
//       <p onClick={(event) => console.log(event, "文本子组件")}>复制</p>
//     </CopyToClipboard>
//   );
// }

// export default App;

export default CopyToClipboard;
