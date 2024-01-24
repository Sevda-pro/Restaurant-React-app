import './header.css';
import React, { useState, createContext } from 'react';
import Header from './header';
import Section from './section';
const Total = createContext();

export default function List() {
    let [amount1, setAmount1] = useState(0);
    let [amount2, setAmount2] = useState(0);
    let [amount3, setAmount3] = useState(0);

    return (
      <>
            {/* Provide the context value */}
            <Total.Provider value={[amount1, amount2, amount3]}>
            <Header/>
            <div className="list">
                <div className='abc'>
                    <h3>Matar Paneer</h3>
                    Price: $10
                    <span className='inputtotal'>Amount:&nbsp;<span className="inputclass">{amount1}</span></span>
                    <button className='a1' onClick={() => setAmount1(amount1 - 1)}>-</button>
                    <button className='b1' onClick={() => setAmount1(amount1 + 1)}>+</button>
                </div>
                <div className='abc'>
                    <h3>Kadai Paneer</h3>
                    Price: $15
                    <span className='inputtotal'>Amount:&nbsp;<span className="inputclass">{amount2}</span></span>
                    <button className='a1' onClick={() => setAmount2(amount2 - 1)}>-</button>

                    <button className='b1' onClick={() => setAmount2(amount2 + 1)}>+</button>
                </div>
                <div className='abc'>
                    <h3>Shahi Paneer</h3>
                    Price: $20
                    <span className='inputtotal'>Amount:&nbsp;<span className="inputclass">{amount3}</span></span>
                    <button className='a1' onClick={() => setAmount3(amount3 - 1)}>-</button>

                    <button className='b1' onClick={() => setAmount3(amount3 + 1)}>+</button>
                </div>
        </div>

            </Total.Provider>
            <Section/>
            </>
    );
}

// Export the context for external use
export { Total };
