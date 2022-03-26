import React from 'react';
import './Question.css'

const Question = () => {
    return (

        <div className='question-answer-container'>
            <div className="ques-ans">
                <h4>How react work?</h4>
                <p>We use declarative code to create components, which is how we display information. Essentially, components are reusable UIs which allow you to split the app into separate blocks that act independently of each other. Components accept an arbitrary input with data (a prop) and return a React element to declare what should appear on screen. They can interact with other components via props to create a complex UI.</p>
            </div>

        </div>

    );
};

export default Question;