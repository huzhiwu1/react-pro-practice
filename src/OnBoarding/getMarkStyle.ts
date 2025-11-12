import type { CSSProperties } from "react";

function getMarkStyle(
  element: HTMLElement,
  container: HTMLElement
): CSSProperties {
  if (!element) {
    return {};
  }
  const { width, height, top, left } = element.getBoundingClientRect();
  console.log(element.getBoundingClientRect());

  const elementTopWithScroll = top + container.scrollTop;
  const elementLeftWithScroll = left + container.scrollLeft;

  const a = {
    width: container.scrollWidth,
    height: container.scrollHeight,
    borderTopWidth: Math.max(elementTopWithScroll, 0),
    borderLeftWidth: Math.max(elementLeftWithScroll, 0),
    borderBottomWidth: Math.max(
      container.scrollHeight - elementTopWithScroll - height,
      0
    ),
    borderRightWidth: Math.max(
      container.scrollWidth - elementLeftWithScroll - width,
      0
    ),
  };
  console.log("a", a);

  return a;
}

export default getMarkStyle;
