import Button from "./Button";

interface DarkModeToggleProps {
    setDarkMode : React.Dispatch<React.SetStateAction<boolean>>;
    isDarkMode : boolean ;
}

const DarkMode: React.FC<DarkModeToggleProps> = ({setDarkMode, isDarkMode}) => {
    const toggleDarkMode = () => {
        setDarkMode(!isDarkMode);
    }
  return (
    <Button onClick={toggleDarkMode}>
        {isDarkMode ? 'Light Mode':'Dark Mode'}
    </Button>
  )
}

export default DarkMode