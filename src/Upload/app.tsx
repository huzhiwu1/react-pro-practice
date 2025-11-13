import { Button } from "antd";
import Upload from ".";
import { useCallback } from "react";

function App() {
  //   const props: UploadProps = {
  //     name: "file",
  //     action: "http://localhost:3000/upload",
  //     headers: {
  //       authorization: "authorization-text",
  //     },
  //     onChange(info) {
  //       console.log("info", info);
  //       //   if (info.file.status !== "uploading") {
  //       //     console.log(info.file, info.fileList);
  //       //   }
  //       //   if (info.file.status === "done") {
  //       //     message.success(`${info.file.name} file uploaded successfully`);
  //       //   } else if (info.file.status === "error") {
  //       //     message.error(`${info.file.name} file upload failed.`);
  //       //   }
  //     },
  //   };
  //   const beforeUpload = useCallback((file: File) => {
  //     console.log("file", file);
  //     if (file.name.includes("1st")) {
  //       return false;
  //     }
  //     return true;
  //   }, []);
  const beforeUpload = useCallback((file: File) => {
    return new Promise<File>((resolve, reject) => {
      console.log("假装调取接口判断权限");
      setTimeout(() => {
        const random = Math.random();
        console.log(random, "random");
        if (random > 0.5) {
          resolve(file);
        } else {
          reject("没有权限");
        }
      }, 1000);
    });
  }, []);

  return (
    <Upload
      action="http://localhost:3000/upload"
      name="file"
      multiple
      data={{ owner: "胡志武" }}
      beforeUpload={beforeUpload}
    >
      <Button>上传</Button>
    </Upload>
  );
}
export default App;
