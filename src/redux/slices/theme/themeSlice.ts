import { createSlice } from "@reduxjs/toolkit"
import { Theme } from "../../../models/theme"
import { RootState } from "../../store"
import { toggleThemeAction } from "./themeAction"

const initialState: Theme = {
  isLightTheme: false,
}

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => toggleThemeAction(state),
  }
})


export const { toggleTheme } = themeSlice.actions

export const selectTheme = (state: RootState) => state.theme.isLightTheme

export const themeReducer = themeSlice.reducer