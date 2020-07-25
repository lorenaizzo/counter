import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { VALUE } from '../../store/actions';
import '../comandos.css';

export default function InputValor() {

    const dispatch = useDispatch();
    const value = useSelector(store => store.value)

    function handleChange(valor){
        let value = parseInt(valor);
        dispatch({type: VALUE, data: value});
    }

    return (        
        <input name="valor" placeholder={value} onChange = {e => handleChange(e.target.value)} className="valor"></input>
    );
}