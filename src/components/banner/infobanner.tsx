import * as React from 'react';
import card from '@/components/banner/Infobanner.module.scss'

interface InfoBannerProps {
    title:String,
    content:String

}

const Infobanner: React.FunctionComponent<InfoBannerProps> = ({title,content}) => {
  return (
    <div className={card.container}>
          <div className={card.title}>
            <h2>{title}</h2>
            </div>
            <div className={card.text}>
             <p>{content}</p>
                </div>  

        </div> 
    
     
  )
};

export default Infobanner;


