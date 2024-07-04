import { useState, useEffect } from 'react';
import DetailModal from './DetailModal.jsx';
import Modal from './Modal.jsx';

const TIMER = 5000;

export default function ShowDetails({ place }) {
    const [showPopup, setShowPopup] = useState(false);

    useEffect(()=>{
      let timer;
      if(showPopup){
        timer = setTimeout(()=>{
          setShowPopup(false);
        }, TIMER)
      }
        return ()=>{
          clearTimeout(timer);
        }
    },[showPopup]);

  
  return (
    <>
      <input type='button' value="Show Details" onClick={()=>{setShowPopup(true)}}/>
        <Modal open={showPopup} onClose={()=>setShowPopup(false)}>
          <DetailModal place={place} />
        </Modal>
    </>
  );
}
