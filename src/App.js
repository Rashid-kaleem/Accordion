import { useState } from 'react';
import './App.css';
import data from './Data';
import Question from './Question';

function App() {

  const[questions, setQuestions] = useState(data)


  return (
  <main>
    <h2>FAQ</h2>
    <section className='container'>
      <h1>Questions And Answers About Login</h1>
     <section className='info'>
      {questions.map((question)=>{
        return <Question key={question.id} {...question}></Question>
      })}
     
     </section>
    
    </section>
    
  </main>
  );
}

export default App;
