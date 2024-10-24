import { Button } from "../Button/Button";
import { useTheme } from "../theme-context/use-theme"

export const ToggleThemeButton = () => {
    const { toggleTheme } = useTheme();
    // const { toggleTheme } =  { theme, toggleTheme };

    return <Button onClick={toggleTheme} text={'Toggle theme'} />;
}