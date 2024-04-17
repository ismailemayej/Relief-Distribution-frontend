import { toggleTheme } from "@/Redux/Features/themeSlice";
import { useAppDispatch, useAppSelector } from "@/Redux/Hooks";
import { Switch } from "antd";

const ThemeSwitch = () => {
  const darkmode = useAppSelector((state) => state.theme.darkMode);
  const dispatch = useAppDispatch();
  return (
    <button onClick={() => dispatch(toggleTheme())}>
      {darkmode ? <Switch /> : <Switch />}
    </button>
  );
};

export default ThemeSwitch;
