import styled from '@emotion/styled'

//#f50057
// green - 00ff73
//box-shadow: 0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12);
const Button = styled("button")`
    border: none;
    color: white;
    border-radius: 10px;
    cursor:pointer;
    padding: 1rem 1.2rem;
    background-color: ${(props) => {
        if(props.variant === "delete"){
            return '#f50057';
        }
        else if(props.variant === "add"){
            return "#00ff73";
        }
    }};
    box-shadow: 0px 3px 1px -2px rgba(0,0,0,0.2),
                0px 2px 2px 0px rgba(0,0,0,0.14),
                0px 1px 5px 0px rgba(0,0,0,0.12);


`

export const AddButton = styled(Button)`
    padding: 0.5rem 1rem;
    background-color: #00ff73;
    font-size: 200%;
`;

export const DeleteButton = styled(Button)`
    padding: 0.5rem 1rem;
    background-color: #f50057;
    font-size: 150%;
`;