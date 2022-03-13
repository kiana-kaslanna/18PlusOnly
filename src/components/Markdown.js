import { Spin } from "antd";
import { marked } from "marked";
import { useContext } from "react";
import { Context } from "../services/Context/Context";
import { useKeepFetch } from "../services/Hooks/useFetch";
import './Markdown.css';

export default function Markdown() {
    const { md } = useContext(Context);

    const { done, data } = useKeepFetch(md);

    return (
        done ?
            <div className="markdown" dangerouslySetInnerHTML={{ __html: marked.parse(data) }}>
            </div>
            :
            <></>
    );
}