import axios from "axios";
import { useCallback, useRef, useState } from "react";
import type { ChangeEventHandler, FC, PropsWithChildren } from "react";

import "./index.scss";
import UploadList, { type UploadFile } from "./UploadList";

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
  onRemove?: (file: UploadFile) => void;
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
    onRemove,
  } = props;
  const inputRef = useRef<HTMLInputElement>(null);

  const [fileList, setFileList] = useState<UploadFile[]>([]);

  const updateUploadFile = useCallback(
    (uploadFiles: UploadFile, updateObj: Partial<UploadFile>) => {
      setFileList((preState) => {
        return preState.map((item) => {
          if (item.uid === uploadFiles.uid) {
            return {
              ...item,
              ...updateObj,
            };
          } else {
            return item;
          }
        });
      });
    },
    []
  );

  const handleInputClick = useCallback(() => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  }, []);

  const post = useCallback(
    (file: File) => {
      // 用于展示文件的上传进度，状态
      const uploadFile: UploadFile = {
        uid:
          Date.now() +
          Math.round(Math.random() * 1e4).toString() +
          "upload-file",
        name: file.name,
        size: file.size,
        status: "ready",
        percent: 0,
        raw: file,
      };
      setFileList((pre) => [uploadFile, ...pre]);
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
              updateUploadFile(uploadFile, {
                percent: percentage,
                status: "uploading",
              });
            }
          },
        })
        .then((resp) => {
          onSuccess?.(resp, file);
          onChange?.(file);
          updateUploadFile(uploadFile, {
            response: resp,
            status: "success",
          });
        })
        .catch((err) => {
          onError?.(err, file);
          onChange?.(file);
          updateUploadFile(uploadFile, {
            error: err,
            status: "error",
          });
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
      updateUploadFile,
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

  const handleRemove = useCallback(
    (file: UploadFile) => {
      setFileList((preState) => {
        return preState.filter((item) => item.uid !== file.uid);
      });
      onRemove?.(file);
    },
    [onRemove]
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
    <div className="upload-component">
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
      <UploadList fileList={fileList} onRemove={handleRemove} />
    </div>
  );
};

export default Upload;
