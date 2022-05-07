import { Theme } from "../../../models/theme"

export const toggleThemeAction = (state: Theme) => {
  state.isLightTheme = !state.isLightTheme
}