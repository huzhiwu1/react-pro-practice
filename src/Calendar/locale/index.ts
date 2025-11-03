import type { CalendarType } from "./interface";
import zhCN from "./zh-CN";
import enUS from "./en-US";
export type { CalendarType } from "./interface";
export { CalendarLocaleContext } from "./localeContext";

export const allCalendarLocales: Record<string, CalendarType> = {
  "zh-CN": zhCN,
  "en-US": enUS,
};
