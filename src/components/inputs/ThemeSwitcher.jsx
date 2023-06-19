import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

const ThemeSwitcher = () => {
  const { toggleTheme } = useContext(ThemeContext);

  return (
    <div>
      <button onClick={toggleTheme}>
        <img src="/eyeclosed.svg" alt="Closed" />
      </button>
      <button onClick={toggleTheme}>
        <img src="/openeye.svg" alt="Open" />
      </button>
    </div>
  );
};

export default ThemeSwitcher;
