import React from 'react';
import { JsPsych,  } from 'jspsych';

const App: React.FC = () => {
    const jsPsych = new JsPsych();
    console.log({jsPsych}, 'jsPsych');
    
    return (
        <div className='container flex justify-center items-center'>
            <h1 className='text-slate-800 font-bold text-4xl'>SYMMETRY</h1>
        </div>
    );
};

export default App;