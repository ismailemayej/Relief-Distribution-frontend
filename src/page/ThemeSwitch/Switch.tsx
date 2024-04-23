import DarkSwitch from "@/component/DarkSwitch";
import { toggleTheme } from "@/Redux/Features/themeSlice";
import { useAppDispatch, useAppSelector } from "@/Redux/Hooks";

const ThemeSwitch = () => {
  const darkmode = useAppSelector((state) => state.theme.darkMode);
  const dispatch = useAppDispatch();
  return (
    <button onClick={() => dispatch(toggleTheme())}>
      {darkmode ? <DarkSwitch /> : <DarkSwitch />}
    </button>
  );
};

export default ThemeSwitch;
