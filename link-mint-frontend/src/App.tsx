import { useState } from "react"
import UrlShortener from "./components/UrlShortener/UrlShortener"
import DarkMode from "./components/DarkMode";
import Header from "./components/Header";

const App:React.FC = () => {
  const [isDarkMode,setDarkMode] = useState<boolean>(false);
  

  return (
    <div className={`${isDarkMode ? ' min-h-screen bg-dark-bg text-dark-text' : 'bg-white text-black'}`}>
      <div className="p-3">
      {/* <Navbar /> */}
    <div className="flex mt-6 mr-10 justify-end items-start">
    <DarkMode isDarkMode = {isDarkMode} setDarkMode = {setDarkMode}/>
    </div>
      </div>
      <div className="mt-8">
        <Header />
      <UrlShortener isDarkMode = {isDarkMode}/>
      </div>
      </div>
  )
}

export default App