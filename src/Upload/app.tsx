import { Button } from "antd";
import Upload from ".";

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

  return (
    <Upload
      action="http://localhost:3000/upload"
      name="file"
      multiple
      data={{ owner: "胡志武" }}
    >
      <Button>上传</Button>
    </Upload>
  );
}
export default App;
