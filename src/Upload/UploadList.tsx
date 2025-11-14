import {
  LoadingOutlined,
  CheckOutlined,
  CloseOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import { Progress } from "antd";
import type { FC } from "react";

export type UploadFile = {
  name: string;
  size: number;
  uid: string;
  status?: "ready" | "uploading" | "success" | "error";
  percent?: number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  error?: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  response?: any;
  raw?: File;
};
export type UploadListProps = {
  fileList: UploadFile[];
  onRemove: (file: UploadFile) => void;
};

const UploadList: FC<UploadListProps> = (props) => {
  const { fileList, onRemove } = props;
  return (
    <ul className="upload-list">
      {fileList.map((item) => {
        return (
          <li
            className={`upload-list-item upload-list-item-${item.status}`}
            key={item.uid}
          >
            <span className="file-name">
              {(item.status === "uploading" || item.status === "ready") && (
                <LoadingOutlined />
              )}
              {item.status === "success" && <CheckOutlined />}
              {item.status === "error" && <CloseOutlined />}
              {item.name}
            </span>
            <span className="file-actions">
              <DeleteOutlined
                onClick={() => {
                  onRemove(item);
                }}
              />
            </span>
            {item.status === "uploading" && (
              <Progress percent={item.percent || 0} />
            )}
          </li>
        );
      })}
    </ul>
  );
};

export default UploadList;
