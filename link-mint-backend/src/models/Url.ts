import mongoose, {Document, Schema} from "mongoose";

interface IURL extends Document {
    longUrl: string;
    shortUrl: string;
    urlCode: string;
    date: Date;
}


const UrlSchema: Schema = new Schema({
    urlCode: { type: String, required:true, unique: true},
    longUrl: { type: String, required:true },
    shortUrl: { type: String, required:true },
    date: { type: Date, default: Date.now },

})

const Url = mongoose.model<IURL>('Url',UrlSchema);
export default Url;