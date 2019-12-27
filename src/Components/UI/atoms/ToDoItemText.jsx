/** @jsx jsx */
import React from "react";
import { css,jsx } from "@emotion/core";
const ToDoItemText = ({ text }) => {
    return (
        <div css = {css`
            border: 1px solid #afafaf;
            border-radius: 2px;
            padding: 0.5rem 4rem;
            margin-right: 1rem;
            width: 80%;
            
            p{
                margin:0;
            }
        `}>
            <p>{text}</p>
        </div>
    );
}

export default ToDoItemText;