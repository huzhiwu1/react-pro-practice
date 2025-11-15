import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import KeepAliveProvider from "./KeepAliveProvider";

function App() {
  return (
    <KeepAliveProvider keepPaths={["/", "/Aaa", "/Bbb"]}>
      <RouterProvider router={router} />
    </KeepAliveProvider>
  );
}

export default App;
