import React from 'react';
import { useDispatch } from 'react-redux';
import { INCREMENT } from '../../store/actions';
import '../comandos.css';

export default function BtnIncrementar() {

    const dispatch = useDispatch();

    return (
        <button onClick = {() => dispatch({type: INCREMENT})} className="btnCommand"><i class="fas fa-chevron-up"></i></button>
    );
}