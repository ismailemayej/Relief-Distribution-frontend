import MainLayout from "./layout/MainLayout";
import { useAppSelector } from "./Redux/Hooks";

const MainApp = () => {
  const darkmode = useAppSelector((state) => state.theme.darkMode);
  return (
    <div className={`${darkmode ? "bg-[#0f172a] text-white" : ""}`}>
      <MainLayout />
    </div>
  );
};

export default MainApp;
