import { createContext } from "react";

export interface CalendarLocaleContext {
  locale: string;
}
export const CalendarLocaleContext = createContext<CalendarLocaleContext>({
  locale: "zh-CN",
});
