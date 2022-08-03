import { useState } from 'react';
import {AiOutlineMinus, AiOutlinePlus} from 'react-icons/ai';

const Question = ({title,info}) =>{

    const[hide, setHide]  = useState(true);

    const buttonHandler = () =>{
        setHide(!hide);
    }

    return(
        <main className="question">
            <div className='title'>
            <h3>{title}</h3>
           <button onClick={buttonHandler}>
            {hide?<AiOutlinePlus/>:<AiOutlineMinus/>}
</button> 
            </div>
           
            {!hide?<p>{info}</p>:''}
        </main>


    )
}

export default Question;