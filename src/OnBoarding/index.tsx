import type { TooltipPlacement } from "antd/es/tooltip";
import type { ReactNode, FC } from "react";

import { useCallback, useEffect, useMemo, useState } from "react";
import { createPortal } from "react-dom";
import Mask from "./Mask";
import { Popover, Button } from "antd";

export type OnBoardingStepConfig = {
  selector: () => HTMLElement | null;
  renderContent?: (currentStep: number) => ReactNode;
  placement?: TooltipPlacement;
  beforeBack?: (currentStep: number) => void;
  beforeForward?: (currentStep: number) => void;
};
export type OnBoardingProps = {
  open?: boolean; // 是否开启onBoarding
  step?: number;
  steps: OnBoardingStepConfig[];
  onStepEnd?: () => void;
  getContainer?: () => HTMLElement | null;
};
const OnBoarding: FC<OnBoardingProps> = (props) => {
  const { step = 0, steps, onStepEnd, getContainer, open } = props;

  const [currentStep, setCurrentStep] = useState<number>(step);

  const [isDone, setIsDone] = useState<boolean>(false);

  const currentStepConfig = useMemo(() => steps[currentStep], [currentStep]);

  /**
   * dom还没挂载到页面上，下面获取dom的操作都会失败，需要让dom挂载到页面上后再操作，需要借助setNextTick跳转到下次渲染
   */
  const [, setNextTick] = useState({});
  const currentSelectorDom = currentStepConfig?.selector();

  const currentContainerDom =
    (getContainer && getContainer()) || document.documentElement;

  const currentRenderContent = currentStepConfig?.renderContent;

  const beforeBack = currentStepConfig?.beforeBack;
  const beforeForward = currentStepConfig?.beforeForward;

  const back = useCallback(async () => {
    if (currentStep === 0) {
      return;
    }
    if (beforeBack) {
      await beforeBack?.(currentStep);
    }
    setCurrentStep((currentStep) => --currentStep);
  }, [beforeBack, currentStep]);

  const forward = useCallback(async () => {
    if (currentStep === steps.length - 1) {
      setIsDone(true);
      await onStepEnd?.();
      return;
    }
    if (beforeForward) {
      await beforeForward?.(currentStep);
    }
    setCurrentStep((currentStep) => ++currentStep);
  }, [beforeForward, currentStep, onStepEnd]);

  const renderPopover = useCallback(
    (wrapper: ReactNode) => {
      const content = currentRenderContent?.(step);
      const operator = (
        <div className="onBoarding-operator">
          {currentStep !== 0 && <Button onClick={() => back}>上一步</Button>}

          <Button onClick={() => forward()} type="primary">
            {currentStep !== steps.length - 1 ? "下一步" : "我知道了"}
          </Button>
        </div>
      );
      return (
        <Popover
          open={true}
          content={
            <>
              {content}
              {operator}
            </>
          }
          placement={currentStepConfig?.placement || "top"}
        >
          {wrapper}
        </Popover>
      );
    },
    [currentRenderContent, currentStep, steps]
  );

  useEffect(() => {
    setNextTick({});
  }, []);

  if (!currentSelectorDom || !open || isDone) {
    return null;
  }

  const mask = (
    <Mask
      element={currentSelectorDom}
      renderMaskContent={renderPopover}
      container={currentContainerDom}
    />
  );
  return createPortal(mask, currentContainerDom);
};
export default OnBoarding;
