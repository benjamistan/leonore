import React, { Component } from 'react';

class Table extends Component {
    getRandomNumber() {
        const a = Math.floor(Math.random() * (10 - 1 + 1) + 1);
        const b = Math.floor(Math.random() * (10 - 1 + 1) + 1);
        return `${a} + ${b} = `;
    }
    
    render() {
        return (
            <table>
                <thead>
                    <th></th>
                    <th></th>
                    <th></th>
                </thead>
                <tbody>
                    <tr>
                        <td>{this.getRandomNumber()}</td>
                        <td>{this.getRandomNumber()}</td>
                        <td>{this.getRandomNumber()}</td>
                    </tr>
                </tbody>
            </table>
        )
    }
}

export default Table;