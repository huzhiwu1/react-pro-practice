import { createRef, useState } from "react";
import type { MessageProps, Position } from ".";

export type MessageList = {
  top: MessageProps[];
  bottom: MessageProps[];
};
const initialState: MessageList = {
  top: [],
  bottom: [],
};

export const useStore = (defaultPosition: Position) => {
  const [messageList, setMessageList] = useState<MessageList>(initialState);
  return {
    messageList,
    add: (message: MessageProps) => {
      const id = getId(message);

      setMessageList((preState) => {
        if (message?.id) {
          const position = getMessagePosition(preState, message?.id);
          if (position) {
            return preState;
          }
        }
        const position = message.position || defaultPosition;

        const messages = position.includes("top")
          ? [
              {
                ...message,
                id,
                nodeRef: createRef(),
              },
              ...preState[position],
            ]
          : [
              ...preState[position],
              {
                ...message,
                id,
                nodeRef: createRef(),
              },
            ];
        return {
          ...preState,
          [position]: messages,
        };
      });

      return id;
    },
    update: (id: number, message: MessageProps) => {
      if (!id) {
        return;
      }

      setMessageList((preState) => {
        const { position, index } = findMessage(preState, id);
        if (!position) {
          return preState;
        }
        const newState = { ...preState };
        if (index !== -1 && position) {
          newState[position][index] = {
            ...newState[position][index],
            ...message,
          };
        }
        return newState;
      });
    },
    remove: (id: number) => {
      if (!id) {
        return;
      }

      setMessageList((preState) => {
        const { index, position } = findMessage(preState, id);
        if (!position) {
          return preState;
        }
        const newState = { ...preState };
        if (index !== -1 && position) {
          newState[position] = newState[position].filter(
            (item) => item.id !== id
          );
        }

        return newState;
      });
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

function getMessagePosition(messageList: MessageList, id: number) {
  for (const [position, list] of Object.entries(messageList)) {
    if (list.find((item) => item.id === id)) {
      return position as Position;
    }
  }
}
function findMessage(messageList: MessageList, id: number) {
  const position = getMessagePosition(messageList, id);
  const index = position
    ? messageList[position].findIndex((item) => item.id === id)
    : -1;
  return {
    position,
    index,
  } as const;
}
