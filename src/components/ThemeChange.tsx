import { MdOutlineDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";
import ProfileModal from "./modal/ProfileModal";
// import StyledButton from "./Button/StyledButton";

interface ThemeChangeTypes {
  toggleThemeMode: () => void;
  themeMode: string;
}

const ThemeChange: React.FC<ThemeChangeTypes> = ({
  toggleThemeMode,
  themeMode,
}) => {
  return (
    <>
      <div className="flex justify-between items-center">
        <div
          className="select-none shadow-md absolute top-1 left-1 m-3 p-2 w-fit h-fit cursor-pointer rounded-full hover:bg-slate-50 dark:hover:bg-slate-700 transition-all duration-100 ease-in"
          onClick={() => toggleThemeMode()}>
          {themeMode === "dark" ? (
            <MdOutlineLightMode className="text-2xl" />
          ) : (
            <MdOutlineDarkMode className="text-2xl" />
          )}
        </div>
        {/* <StyledButton /> */}
        <ProfileModal />
      </div>
    </>
  );
};

export default ThemeChange;
