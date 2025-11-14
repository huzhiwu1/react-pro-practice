import type { DragEventHandler, PropsWithChildren, FC } from "react";
import { useCallback, useState } from "react";
import cs from "classnames";

export type DraggerProps = PropsWithChildren<{
  onFiles: (files: FileList) => void;
}>;

const Dragger: FC<DraggerProps> = (props) => {
  const { onFiles, children } = props;

  const [over, setOver] = useState(false);

  const handleDragOver = useCallback<DragEventHandler<HTMLDivElement>>((e) => {
    e.preventDefault();
    setOver(true);
  }, []);

  const handleDragLeave = useCallback<DragEventHandler<HTMLDivElement>>((e) => {
    e.preventDefault();
    setOver(false);
  }, []);

  const handleDrop = useCallback<DragEventHandler<HTMLDivElement>>(
    (e) => {
      e.preventDefault();
      setOver(false);
      onFiles(e.dataTransfer.files);
    },
    [onFiles]
  );
  return (
    <div
      className={cs("upload-dragger", {
        ["is-dragover"]: over,
      })}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      {children}
    </div>
  );
};

export default Dragger;
