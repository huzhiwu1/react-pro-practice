import { forwardRef } from "react";
import Icon from ".";
import type { IconProps } from ".";

const loadedSet = new Set();
function createIconfont(scriptUrl: string) {
  if (
    typeof scriptUrl === "string" &&
    scriptUrl.length > 0 &&
    !loadedSet.has(scriptUrl)
  ) {
    const scriptElement = document.createElement("script");
    scriptElement.src = scriptUrl;
    scriptElement.setAttribute("data-namespace", scriptUrl);
    document.body.appendChild(scriptElement);
    loadedSet.add(scriptUrl);
  }
  return forwardRef<SVGSVGElement, IconProps>((props, ref) => {
    const { type, ...rest } = props;
    return (
      <Icon ref={ref} {...rest}>
        {type ? <use xlinkHref={`#${type}`} /> : null}
      </Icon>
    );
  });
}

export default createIconfont;
