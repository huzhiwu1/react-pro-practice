import { useCallback, useEffect, useRef, useState } from "react";

interface IProps<T> {
  defaultValue?: T;
  value?: T;
  onChange?: (value: T) => void;
}
/**
 *
 * 让hook支持受控和非受控
 * 受控时，可以通过传入value和onChange来控制值
 * 非受控时，可以通过defaultValue来设置初始值，内部使用setState来管理内部状态
 */
function useControllableValue<T>(props: IProps<T>) {
  const { defaultValue, value, onChange } = props;
  const [stateValue, setStateValue] = useState(() => {
    /**
     * 这里传入初始值
     * 受控时，初始状态为value
     * 非受控时，初始状态为defaultValue
     */
    if (value !== undefined) {
      /**
       * 判断是否受控，用value是否undefined来判断
       */
      return value;
    } else {
      return defaultValue;
    }
  });
  /**
   * stateValue: 内部状态值
   * value: 外部传入的值
   * hook需要根据是否受控返回一个可以使用的值
   */
  const mergedValue = value !== undefined ? value : stateValue;

  /**
   * 当状态发生变化时
   * 受控组件，需要调用onChange
   * 非受控组件，需要设置内部状态值
   */
  const handleChange = useCallback(
    (nextValue: T) => {
      // 非受控
      if (value === undefined) {
        setStateValue(nextValue);
      }
      onChange?.(nextValue);
    },
    [value]
  );

  /**
   * 非首次渲染
   * 从非受控组件变成受控组件时 和 从受控组件变成非受控组件时，这时的返回值需要关心是使用内部状态值还是外部传入值
   * 从非受控组件变成受控组件时，由于上一步的mergedValue 已经处理成使用外部传入的value，这里不需要再次处理
   * 从受控组件变成非受控组件时，由于内部状态值依然使用上一次的状态,这里需要更新内部状态值为undefined
   */
  const isFirstRenderRef = useRef(true);
  useEffect(() => {
    // 从受控变成非受控
    if (value === undefined && isFirstRenderRef.current === false) {
      setStateValue(value);
    }
    isFirstRenderRef.current = false;
  }, [value]);
  return [mergedValue, handleChange] as const;
}
export default useControllableValue;
