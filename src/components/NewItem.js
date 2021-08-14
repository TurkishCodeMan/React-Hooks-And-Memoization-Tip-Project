import styled from '@emotion/styled';
import { memo, useState } from 'react';

import { addItem } from '../store/items/actions';
import { useItems } from './hooks/useItems';


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


const NewItem = memo(function NewItem() {

    const [name, setName] = useState('');

    const [price, setPrice] = useState(0);

    const { bindActions } = useItems({ addItem });

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
                    bindActions.addItem(name, price);
                    setName('');
                    setPrice(0);
                    e.preventDefault();
                }}>Send</Button>
        </Form>
    )
});

export default NewItem;