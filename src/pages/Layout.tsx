import ArticleGrid from "../components/ArticleGrid";
import ThemeChange from "../components/ThemeChange";

interface LayoutTypes {
  toggleThemeMode: () => void;
  themeMode: string;
}

export const Layout: React.FC<LayoutTypes> = ({ toggleThemeMode, themeMode }) => {
  return (
    <>
      <ThemeChange toggleThemeMode={toggleThemeMode} themeMode={themeMode} />
      <ArticleGrid toggleThemeMode={toggleThemeMode} />
    </>
  );
};
