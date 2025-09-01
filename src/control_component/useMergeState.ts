import { useEffect, useState, useRef, useCallback } from "react";

export function useMergeState<T>(
  defaultValueState: T,
  props: {
    defaultValue?: T;
    value?: T;
    onChange?: (value: T) => void;
  }
) {
  const { defaultValue, value } = props;
  // 既可以受控，也可以非受控，则需要有一个内部的状态值
  const [valueState, setValueState] = useState<T>(() => {
    // 受控
    if (value !== undefined) {
      return value;
    } else if (defaultValue !== undefined) {
      return defaultValue;
    } else {
      return defaultValueState;
    }
  });
  // 从受控变成非受控时，value从其他值变成undefined，由于内部状态值保存之前的数据，此时变成非受控，需要更新内部状态值
  const firstRenderRef = useRef(true);
  useEffect(() => {
    if (value === undefined && !firstRenderRef.current) {
      setValueState(value!);
    }
    firstRenderRef.current = false;
  }, [value]);
  // 受控时，返回受控的value, 非受控时，返回内部状态值
  const mergedValue = value !== undefined ? value : valueState;

  function isFunction(value: unknown): value is Function {
    return typeof value === "function";
  }

  const handleChange = useCallback(
    (value: T) => {
      if (isFunction(value)) {
        value = value(valueState);
      }
      // 非受控时，更新内部状态值 和 回调外部change函数
      // 受控时，只回调外部change函数
      if (props.value === undefined) {
        setValueState(value);
      }
      props.onChange?.(value);
    },
    [props.value, props.onChange, valueState]
  );

  return [mergedValue, handleChange] as const;
}
