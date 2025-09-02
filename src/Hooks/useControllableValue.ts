import { useCallback, useEffect, useRef, useState } from "react";

/**
 * 由于IControllableProps的属性名已经定死，不方便使用，这里提供一个可以自定义属性名的options
 */
export interface IControllableOptionsProps<T> {
  defaultValue?: T;
  valuePropName?: string;
  defaultValuePropName?: string;
  trigger?: string;
}

export interface IControllableProps<T> {
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
function useControllableValue<T>(
  props: IControllableProps<T>,
  options: IControllableOptionsProps<T> = {}
) {
  const {
    defaultValue,
    defaultValuePropName = "defaultValue",
    valuePropName = "value",
    trigger = "onChange",
  } = options;
  const isControlled = Object.prototype.hasOwnProperty.call(
    props,
    valuePropName
  );
  const value = props[valuePropName as keyof IControllableProps<T>] as T;
  const [stateValue, setStateValue] = useState(() => {
    /**
     * 这里传入初始值
     * 受控时，初始状态为value
     * 非受控时，初始状态为defaultValue
     */
    if (isControlled) {
      /**
       * 判断是否受控，用value是否undefined来判断
       */
      return value;
    }
    if (
      props[defaultValuePropName as keyof IControllableProps<T>] !== undefined
    ) {
      return props[defaultValuePropName as keyof IControllableProps<T>] as T;
    }
    return defaultValue;
  });
  /**
   * stateValue: 内部状态值
   * value: 外部传入的值
   * hook需要根据是否受控返回一个可以使用的值
   */
  const mergedValue = value !== undefined ? value : stateValue;

  const isFunction = (value: unknown): value is Function =>
    typeof value === "function";
  /**
   * 当状态发生变化时
   * 受控组件，需要调用onChange
   * 非受控组件，需要设置内部状态值
   */
  const handleChange = useCallback(
    (nextValue: T) => {
      const newValue = isFunction(nextValue)
        ? nextValue(mergedValue)
        : nextValue;
      console.log(value, "Value");
      // 非受控
      if (!isControlled) {
        setStateValue(newValue);
      }
      (props as any)[trigger]?.(newValue);
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
  return [mergedValue!, handleChange] as const;
}
export default useControllableValue;
