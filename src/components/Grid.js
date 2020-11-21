import React, { Component } from 'react';

class Grid extends Component {
    getAddingSum() {
        const rndNum = () => Math.floor(Math.random() * (10 - 1 + 1) + 1);
        return `${rndNum()} + ${rndNum()} = `;
    }

    getSubtractingSum() {
        const a = Math.floor(Math.random() * (10 - 0 + 1) + 0);
        const b = Math.floor(Math.random() * (10 - 0 + 1) + 0);
        if(a >= b) {
            return `${a} - ${b} =`;
        } else {
            return `${b} - ${a} = `;
        }
    }

    getRandomSum() {
        const rnd = Math.random();
        if (rnd > 0.5) { 
            return this.getAddingSum();
        } else {
            return this.getSubtractingSum();
        }
    }
    
    render() {
        return (
            <div className='ui grid' style={{fontWeight: "bold", fontSize: "2em"}}>
                <div className='row' style={{padding: "40px"}}>
                    <div class="four wide column">{this.getRandomSum()}</div>
                    <div class="four wide column">{this.getRandomSum()}</div>
                    <div class="four wide column">{this.getRandomSum()}</div>
                    <div class="four wide column">{this.getRandomSum()}</div>
                </div>
            </div>
        )
    }
}

export default Grid;