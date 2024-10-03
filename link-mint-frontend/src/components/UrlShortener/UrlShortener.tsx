import { useState } from "react"
import { UrlResponse } from "../../types/url";
import { shortenUrl } from "../../services/api";
import UrlOutput from "../UrlOutput/UrlOutput";

interface UrlShortenerProps{
  isDarkMode: boolean,

}

const UrlShortener:React.FC<UrlShortenerProps> = ({isDarkMode}) => {
    const [longUrl, setLongUrl] = useState<string>('');
    const [urlData, setUrlData] = useState<UrlResponse | null>(null)
    const [error, setError] = useState<string>('')

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) =>{
      e.preventDefault();
      setError('');
      setUrlData(null);

      try {
        const response = await shortenUrl(longUrl);
        setUrlData(response);
      }catch(err:any) {
        setError(err.response?.data?.error || 'Error Shortening Url')
      }

    }

  return (
    <div>
      <div className="flex justify-center">
      <form onSubmit={handleSubmit}>
            <input className={`rounded-md p-2 transition duration-300 
        ${isDarkMode ? 'bg-gray-700 text-white placeholder-gray-400' : 'bg-gray-200 text-black placeholder-gray-600'}`} type='url' placeholder='   Enter the long Url' value={longUrl} onChange={(e)=>setLongUrl(e.target.value)} required/>
            <button className="p- ml-3 border-green-400 text-green-400 font-bold py-2 px-4 rounded-3xl hover:bg-gray-600 hover:text-white transition" type='submit'>Create Link</button>
        </form>
      </div>
        <div className="mt-3">
        {urlData && <UrlOutput urlData = {urlData} />}
        </div>
        {error && <p>{error}</p>}

    </div>
  )
}

export default UrlShortener