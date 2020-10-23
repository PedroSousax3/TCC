import React from 'react'

import {CardGeralItem} from './style.js'
export default function CardGaral(item) {

    return (
        <CardGeralItem className="card">
            <div className="card-header">
                {item.nome}
            </div>
            <div className="card-body">
                <p className="card-text">Autor: {item.autor}</p>
                <p className="card-text">Editora: {item.autor}</p>
                <p className="card-text">Data de Lançamento: {item.autor}</p>
                <p className="card-text">Editora: {item.descricao}</p>
                <a href="/" className="btn btn-primary">Mostrar Livro</a>
            </div>
        </CardGeralItem>
    );
}