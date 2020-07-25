import React from 'react';
import { useSelector } from 'react-redux';
import './mostrar.css';

export default function MostrarContador() {

    const counter = useSelector(state => state.count);

    return (
        <h1 className='counter'>{counter}</h1>
    );
}