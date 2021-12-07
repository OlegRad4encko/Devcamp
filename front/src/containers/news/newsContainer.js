import {NewsTitle} from "../../components/news/newsTitle";
import {NewsText} from "../../components/news/newsText";

export function NewsContainer({ title = "Example title", text = "Empty Post" }) {
    return (
        <div>
            <NewsTitle title={title}/>
            <NewsText text={text}/>
        </div>
    )
}