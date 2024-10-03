import { UrlResponse } from "../../types/url";

interface UrlOutputProps {
    urlData: UrlResponse
}

const UrlOutput: React.FC<UrlOutputProps> = ({urlData}) => {

    return (
        <div className="flex flex-col justify-center text-center">
               <h2 className="text-lg font-bold">Shortened Url</h2>
        <a
        className="text-xl text-blue-500 font-semibold underline hover:text-blue-700 transition duration-300"
          href = {urlData.shortUrl}
          target="_blank"
          rel="noopener noreferrer"
          >
            <div>
            {urlData.shortUrl}

            </div>
          
          </a>

        </div>
     
    )

}

export default UrlOutput;