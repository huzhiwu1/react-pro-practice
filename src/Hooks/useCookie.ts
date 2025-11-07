import Cookies from "js-cookie";

import { useCallback, useState } from "react";
function useCookie(cookieName: string) {
  // cookie是会持久化的，这里设置初始值时，需要从cookie中读取，看看有无内容
  const [value, setValue] = useState<string | null>(
    () => Cookies.get(cookieName) || null
  );

  const updateCookie = useCallback(
    (newValue: string, options?: Cookies.CookieAttributes) => {
      Cookies.set(cookieName, newValue, options);
      setValue(newValue);
    },
    []
  );

  const deleteCookie = useCallback(() => {
    Cookies.remove(cookieName);
    setValue(null);
  }, []);

  return [value, updateCookie, deleteCookie] as const;
}

export default useCookie;

// function App() {
//   const [cookie, updateCookie, deleteCookie] = useCookie("test");
//   const updateCookieHandler = useCallback(() => {
//     updateCookie("test666");
//   }, []);

//   useEffect(() => {
//     console.log("cookie", cookie);
//   }, [cookie]);
//   const deleteCookieHandler = useCallback(() => {
//     deleteCookie();
//   }, []);
//   return (
//     <div>
//       测试 cookie值{cookie}
//       <button onClick={updateCookieHandler}>更新cookie</button>
//       <button onClick={deleteCookieHandler}>删除cookie</button>
//     </div>
//   );
// }

// export default App;
