import { UrlResponse } from "../../types/url";

interface UrlOutputProps {
    urlData: UrlResponse
}

const UrlOutput: React.FC<UrlOutputProps> = ({urlData}) => {

    return (
        <>
        <h2>Shortened Url</h2>
        <a
          href = {urlData.shortUrl}
          target="_blank"
          rel="noopener noreferrer"
          >
          {urlData.shortUrl}
          
          </a>
          </>
    )

}

export default UrlOutput;