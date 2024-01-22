import * as React from 'react';
import card from '@/components/instruction/Cardinstruction.module.scss'

interface CardInstructionProps {
    number:String,
    content:String

}

const Cardinstruction: React.FunctionComponent<CardInstructionProps> = ({number,content}) => {
  return (
    <div className={card.container}>
       <div className={card.content}>
          <div className={card.number}>
            <p>{number}</p>
            </div>
            <div className={card.text}>
             <p>{content}</p>
                </div>  

        </div> 
    </div>
     
  )
};

export default Cardinstruction;


