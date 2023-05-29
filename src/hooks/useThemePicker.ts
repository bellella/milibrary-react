import { useMiTheme } from "@milibrary/mi-style";
import React from "react";
import { themes } from '../theme';

const useThemePicker = () => {
  const { setTheme } = useMiTheme();
  const [themeIndex, setThemeIndex] = React.useState<number>(0);

  const changeTheme = (index: number) => {
    setTheme(themes[themeNames[index].name]);
    setThemeIndex(index);
  }
  return {
    changeTheme,
    themeNames,
    themeIndex
  }
}

const themeNames = [
  {
    name: 'default',
    color: '#FCDDEC'
  },
  {
    name: 'dark',
    color: '#222222'
  },
  {
    name: 'blue',
    color: '#62b0ff'
  },
  {
    name: 'green',
    color: '#c7ffcd'
  },
  {
    name: 'darkBlue',
    color: '#3b4fb6'
  },
  {
    name: 'purple',
    color: '#e3cdff'
  },
]

export default useThemePicker;