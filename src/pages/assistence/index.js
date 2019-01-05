import React, { Component } from 'react';
import './styles.css';

export default class About extends Component {
    render() {
        return (
            <div className="panel">
                <h2>Assistência técnica</h2>

                <p>Aqui você encontra técnicos preparados que vão tratar seus brinquedos com muito cuidado e carinho. Logo na chegada seus brinquedos são identificados com etiquetas para que não sejam trocados.</p>

                <p>Além disso, são feitos testes de funcionamento para se descobrir os verdadeiros problemas e iniciar os reparos necessários.</p>

                <p className="pBold">Bonecas</p>
                <ul>
                    <li>Troca de olhos;</li>
                    <li>Chucas em bebê;</li>
                    <li>Conserto de mecanismos;</li>
                    <li>Reformas de bonecas antigas (massa, biscuit e porcelanas);</li>
                    <li>Pintura;</li>
                    <li>Trocas de elástico;</li>
                    <li>Troca de revestimentos de bonecas;</li>
                    <li>Enchimento do corpo;</li>
                    <li>Decoração;</li>
                    <li>Troca de pernas, braços, mãos e adaptações em geral;</li>
                    <li>Limpeza em geral.</li>
                </ul>

            </div>
        );
    }
}