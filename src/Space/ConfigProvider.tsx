import { createContext } from "react";
import type { PropsWithChildren } from "react";
import type { SizeType } from ".";

export type ConfigContextType = {
  space?: {
    size?: SizeType;
  };
};

// eslint-disable-next-line react-refresh/only-export-components
export const ConfigContext = createContext<ConfigContextType>({
  space: {
    size: "small",
  },
});

export type ConfigProviderProps = PropsWithChildren<ConfigContextType>;

export function ConfigProvider(props: ConfigProviderProps) {
  const { space, children } = props;

  return (
    <ConfigContext.Provider value={{ space }}>
      {children}
    </ConfigContext.Provider>
  );
}
