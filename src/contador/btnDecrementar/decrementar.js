import React from 'react';
import { useDispatch } from 'react-redux';
import { DECREMENT } from '../../store/actions';
import '../comandos.css';

export default function BtnDecrementar() {

    const dispatch = useDispatch();

    return (
        <button onClick = {() => dispatch({type: DECREMENT})} className="btnCommand"><i class="fas fa-chevron-down"></i></button>
    );
}