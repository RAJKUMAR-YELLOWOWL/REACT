import React from "react";
import '../Css/FlexView.css'

const FlexView =()=> {
  return (
    <div className="FlexView">
      <div className="navigation">
        <div>whatsapp</div>
        <div>Privacy</div>
        <div>For Business</div>
        <div>whatsapp Web</div>
        <div>Download</div>
        <div>Download</div>
      </div>   
      <div className='first'>
         <div className='first1'>
             <h1>Download for windows</h1>
             <p>use whatsapp access your devices</p>
         </div>
         <div className='first2'>
             <h1>Download for linux</h1>
             <p>use whatsapp to access your devices</p>
         </div>
      </div>
      <div className="mid">
        <button>submit</button>
      </div>
      <div className='end'>

      </div>
  
    </div>
  );
}

export default FlexView;