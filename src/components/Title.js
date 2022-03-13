import { Popover } from "antd";
import { useContext } from "react";
import { Context } from "../services/Context/Context";

export default function Title() {
    const { title } = useContext(Context);
    return (
        <Popover content={title} trigger="hover" placement="bottom">
            <div>{title}</div>
        </Popover>
    )
}