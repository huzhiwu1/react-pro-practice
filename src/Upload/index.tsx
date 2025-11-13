import axios from "axios";
import { useCallback, useRef } from "react";
import type { ChangeEventHandler, FC, PropsWithChildren } from "react";

import "./index.scss";

export type UploadProps = PropsWithChildren<{
  action: string; // 上传文件的地址
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  headers?: Record<string, any>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data?: Record<string, any>;
  accpet?: string; // 接收的文件类型
  multiple?: boolean; // 是否能上传多个文件
  name?: string; // 后端接收文件的key
  withCredentials?: boolean; // 是否携带cookie
  beforeUpload?: (file: File) => boolean | Promise<File>;
  onProgress?: (percentage: number, file: File) => void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onSuccess?: (data: any, file: File) => void;
  onError?: (error: Error, file: File) => void;
  onChange?: (file: File) => void;
}>;

const Upload: FC<UploadProps> = (props) => {
  const {
    action,
    headers,
    data,
    accpet,
    multiple,
    name,
    withCredentials,
    children,
    beforeUpload,
    onProgress,
    onSuccess,
    onError,
    onChange,
  } = props;
  const inputRef = useRef<HTMLInputElement>(null);

  const handleInputClick = useCallback(() => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  }, []);

  const post = useCallback(
    (file: File) => {
      const formData = new FormData();
      // key是后端拿到二进制文件类的关键字眼
      formData.append(name || "file", file);
      // data：上传所需额外参数
      if (data) {
        Object.keys(data).forEach((key) => {
          formData.append(key, data[key]);
        });
      }
      axios
        .post(action, formData, {
          headers: {
            ...headers,
            "Content-Type": "multipart/form-data",
          },
          withCredentials: withCredentials,
          onUploadProgress: (e) => {
            if (!onProgress) {
              return;
            }
            let percentage: number = 0;
            if (e.progress) {
              percentage = Math.round(e.progress * 100);
            } else {
              percentage = Math.round((e.loaded * 100) / e.total!);
            }
            if (percentage < 100) {
              onProgress(percentage, file);
            }
          },
        })
        .then((resp) => {
          onSuccess?.(resp, file);
          onChange?.(file);
        })
        .catch((err) => {
          onError?.(err, file);
          onChange?.(file);
        });
    },
    [
      action,
      name,
      data,
      headers,
      withCredentials,
      onProgress,
      onSuccess,
      onChange,
    ]
  );

  const uploadFiles = useCallback(
    (files: FileList) => {
      // files是类数组类型，将其转化为数组类型
      const postFiles = Array.from(files);
      postFiles.forEach((file) => {
        if (beforeUpload) {
          const result = beforeUpload(file);
          if (result && result instanceof Promise) {
            result.then((processedFile) => {
              post(processedFile);
            });
          } else if (result !== false) {
            post(file);
          }
        } else {
          // 将文件单个上传
          post(file);
        }
      });
    },
    [post, beforeUpload]
  );

  const handleFileChange = useCallback<ChangeEventHandler<HTMLInputElement>>(
    (e) => {
      const files = e.target.files;
      if (!files) {
        return;
      }

      // 上传文件
      uploadFiles(files);

      // 将input值置空
      if (inputRef.current) {
        inputRef.current.value = "";
      }
    },
    [uploadFiles]
  );

  return (
    <div className="upload-input" onClick={handleInputClick}>
      {children}
      <input
        className="upload-file-input"
        type="file"
        ref={inputRef}
        accept={accpet}
        multiple={multiple}
        onChange={handleFileChange}
      />
    </div>
  );
};

export default Upload;
