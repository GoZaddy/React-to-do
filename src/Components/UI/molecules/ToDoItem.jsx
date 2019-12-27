/** @jsx jsx */
import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";
import ToDoItemText from "../atoms/ToDoItemText";
import { css, jsx } from "@emotion/core";
import { DeleteButton } from "../atoms/Button";




const ToDoItem = ({ text, onDelete }) => {

    return (

        <div
            css={css`
                        display: flex;
                        margin-bottom:1rem;
                        /** */
                    `}>
            <ToDoItemText text={text} />
            <DeleteButton variant="delete"
                onClick={onDelete}
            >-</DeleteButton>
        </div>

    );
}

export default ToDoItem;