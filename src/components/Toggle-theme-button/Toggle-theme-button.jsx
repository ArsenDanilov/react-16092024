import { Button } from "../Button/Button";
import { useTheme } from "../theme-context/use-theme"

export const ToggleThemeButton = () => {
    const { toggleTheme } = useTheme();

    return <Button onClick={toggleTheme} text={'Toggle theme'} />;
}