/**@jsx jsx */
import React, { useState, useEffect } from "react";
import { TransitionGroup, Transition, CSSTransition } from "react-transition-group";
import ToDoItem from "../molecules/ToDoItem";
import { AddButton } from "../atoms/Button";
import { css, jsx } from "@emotion/core";
const data = {
    first: "name",
    last: "yusuff"
}

const ToDo = () => {
    const [ArrayOfTodos, setTodos] = useState({});
    const [presentToDo, setPresentToDo] = useState("");

    const ButtonHandler = (event) => {
        event.preventDefault();
        setTodos({
            ...ArrayOfTodos,
            [new Date()]: presentToDo
        });
        setPresentToDo("");
    }

    const onDelete = (todoKey) => {

        const todos = { ...ArrayOfTodos };
        delete todos[todoKey];
        
        setTodos({
            ...todos
        });

    };






    return (
        <div css={css`
            margin: 0 auto;
            text-align: center;
            padding: 2rem 0;
            width: 80%;
            //
        `}>
            {/*<code>
                {JSON.stringify(Object.keys(ArrayOfTodos), null, 10)}
            </code>*/}
            <TransitionGroup className="todos-section__list">
                {
                    Object.keys(ArrayOfTodos).map(
                        (todoKey) =>
                        <CSSTransition timeout={500} classNames="move"> 
                            <ToDoItem 
                                text={ArrayOfTodos[todoKey]} 
                                onDelete={ () => { onDelete(todoKey) } }
                            />
                        </CSSTransition>)
                }
            </TransitionGroup>
            <form action="">
                <input css={css`
                    display: block;
                    margin: 0 auto 1.5rem auto;
                    width:85%;
                    padding: 0.5rem;
                    font-size: 100%;
                    //
                `}
                    type="text"
                    name=""
                    id=""
                    value={presentToDo}
                    onChange={(event) => { setPresentToDo(event.currentTarget.value) }}
                    required />
                <AddButton onClick={ButtonHandler}>+</AddButton>
            </form>

        </div>


    );
}

export default ToDo;