import React from 'react';
import './Question3.css'

const Question3 = () => {
    return (
        <div>

            <div className='question-answer-container'>
                <div className="que-ans">
                    <h4>Differance between props vs state?</h4>
                    <p>State is the local state of the component which cannot be accessed and modified outside of the component. It's equivalent to local variables in a function.Props, on the other hand, make components reusable by giving components the ability to receive data from their parent component in the form of props. They are equivalent to function parameters.</p>
                </div>


            </div>
        </div>
    );
};

export default Question3;