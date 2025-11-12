import type { TooltipPlacement } from "antd/es/tooltip";
import type { ReactNode, FC } from "react";

import { useCallback } from "react";
import { createPortal } from "react-dom";
import Mask from "./Mask";
import { Popover } from "antd";

export type OnBoardingStepConfig = {
  selector: () => HTMLElement | null;
  renderContent?: (currentStep: number) => ReactNode;
  placement?: TooltipPlacement;
  beforeBack?: (currentStep: number) => void;
  beforeForward?: (currentStep: number) => void;
};
export type OnBoardingProps = {
  step?: number;
  steps: OnBoardingStepConfig[];
  onStepEnd?: () => void;
  getContainer?: () => HTMLElement | null;
};
const OnBoarding: FC<OnBoardingProps> = (props) => {
  const { getContainer } = props;

  const currentContainerDom =
    (getContainer && getContainer()) || document.documentElement;

  const renderPopover = useCallback((wrapper: ReactNode) => {
    return (
      <Popover open={true} content={}>
        {wrapper}
      </Popover>
    );
  }, []);

  const mask = (
    <Mask element={document.body} renderMaskContent={renderPopover} />
  );
  return createPortal(mask, currentContainerDom);
};
export default OnBoarding;
