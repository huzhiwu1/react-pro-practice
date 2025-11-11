import { createRef, useState } from "react";
import type { MessageProps } from ".";

const initialState: MessageProps[] = [];

export const useStore = () => {
  const [messageList, setMessageList] = useState<MessageProps[]>(initialState);
  return {
    messageList,
    add: (message: MessageProps) => {
      const id = getId(message);
      const index = findMessageIndex(messageList, id);
      if (index === -1) {
        setMessageList((preState) => {
          return [
            {
              ...message,
              id,
              nodeRef: createRef(),
            },
            ...preState,
          ];
        });
      }
    },
    update: (id: number, message: MessageProps) => {
      const index = findMessageIndex(messageList, id);
      if (index !== -1) {
        setMessageList((preState) => {
          const newState = [...preState];
          newState[index] = { ...message, id, nodeRef: createRef() };
          return newState;
        });
      }
    },
    remove: (id: number) => {
      const index = findMessageIndex(messageList, id);

      if (index !== -1) {
        setMessageList((preState) => {
          const newState = [...preState].filter((item) => item.id !== id);

          return newState;
        });
      }
    },
    clearAll: () => {
      setMessageList(initialState);
    },
  };
};

/**
 * 取出message中的id,
 * 没有则创建id
 */
let count = 0;
function getId(message: MessageProps) {
  if (message.id) {
    return message.id;
  }
  count++;
  return count;
}

function findMessageIndex(messageList: MessageProps[], id: number): number {
  return messageList.findIndex((item) => item.id === id);
}
