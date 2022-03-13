
import { createContext, useState } from "react";

export const Context = createContext();

export default function ContextProvider({ children }) {

    const [title, setTitle] = useState("");
    const [md, setMd] = useState("");

    return (
        <Context.Provider value={{
            title, setTitle,
            md, setMd
        }}>
            {children}
        </Context.Provider>
    );
}
