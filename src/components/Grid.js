import React, { Component } from 'react';

class Grid extends Component {
    getRandomNumber() {
        const res = Math.floor(Math.random() * (10 - 0 + 1) + 0);
        return res;
    }
    
    getAddingSum() {
        return `${this.getRandomNumber()} + ${this.getRandomNumber()}  = `;
    }

    getSubtractingSum() {
        const a = this.getRandomNumber();
        const b = this.getRandomNumber();

        if(a >= b) {
            return `${a} - ${b}  =`;
        } else {
            return `${b} - ${a}  = `;
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
            <div className='ui grid' style={{fontWeight: "bold", fontSize: "1.5em"}}>
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