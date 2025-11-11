import type { PropsWithChildren, RefObject } from "react";
import { createContext, useRef } from "react";
import MessageProvider from "./";
import type { MessageProviderRef } from ".";

export type ConfigContextType = {
  messageProviderRef?: RefObject<MessageProviderRef | null>;
};

// eslint-disable-next-line react-refresh/only-export-components
export const MessageConfigContext = createContext<ConfigContextType>({});

export function ConfigProvider(props: PropsWithChildren) {
  const { children } = props;
  const messageProviderRef = useRef<MessageProviderRef>(null);
  return (
    <MessageConfigContext.Provider
      value={{
        messageProviderRef: messageProviderRef,
      }}
    >
      <MessageProvider ref={messageProviderRef} />
      {children}
    </MessageConfigContext.Provider>
  );
}
