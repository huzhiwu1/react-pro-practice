import { KeepAliveContext } from "./KeepAliveContext";
import type { KeepAliveContextType } from "./KeepAliveContext";
import type { PropsWithChildren } from "react";
import { useContext } from "react";

export type KeepAliveProviderType = PropsWithChildren<
  Partial<Omit<KeepAliveContextType, "keepPaths">> &
    Pick<KeepAliveContextType, "keepPaths">
>;

function KeepAliveProvider(props: KeepAliveProviderType) {
  const { keepPaths, children } = props;

  const { keepElements, dropByPath } = useContext(KeepAliveContext);

  return (
    <KeepAliveContext.Provider
      value={{
        keepElements,
        keepPaths,
        dropByPath,
      }}
    >
      {children}
    </KeepAliveContext.Provider>
  );
}

export default KeepAliveProvider;
