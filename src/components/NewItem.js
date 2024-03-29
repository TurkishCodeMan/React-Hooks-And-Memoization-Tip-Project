import styled from '@emotion/styled';
import { memo, useCallback, useState } from 'react';

import { addItem } from '../store/items/actions';
import { useDispatch } from "react-redux";


const Form = styled.form`
    margin:20px;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    width: 100%;
    
`;

const Input = styled.input`
    border-radius:10px;
    padding:8px 3px;
    border:1px solid purple;
    &:focus{
        outline:none;
    }
`;

const Label = styled.label`
    text-align:start;
    display:inline;
    margin-right:8px;
`;

const InputArea = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    margin-bottom:15px;
    
`;

const Button = styled.button`
    padding:9px 24px;
    color:white;
    background: rebeccapurple;
    outline: none;
    border: none;
    border-radius:5px;
    transition: .3s ease ;
    &:hover{
        padding:10px 26px;
    }
`;



const NewItem = function NewItem() {
    const dispatch = useDispatch();

    const [name, setName] = useState('');

    const [price, setPrice] = useState(0);

    const addItemFunc = (name, price) =>
        dispatch(addItem(name, price));

    console.log("render new Item")
    return (
        <Form data-testid="form">
            <InputArea>
                <Label htmlFor='nameInput'>Name</Label>
                <Input id='nameInput'
                    value={name}
                    data-testid="name"
                    onChange={e => setName(e.target.value)}
                    onBlur={e => setName(e.target.value)}
                />
            </InputArea>
            <InputArea>
                <Label htmlFor='price'>Price</Label>
                <Input id='price'
                    value={price}
                    data-testid="price"
                    onChange={e => setPrice(e.target.value)}
                    onBlur={e => setPrice(e.target.value)}
                />
            </InputArea>
            <Button
                data-testid="send"
                onClick={e => {
                    addItemFunc(name, price);
                    setName('');
                    setPrice(0);
                    e.preventDefault();
                }}>Send</Button>
        </Form>
    )
};

export default NewItem;