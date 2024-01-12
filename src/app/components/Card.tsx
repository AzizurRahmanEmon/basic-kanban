'use client'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLayerGroup, faClipboard, faComment, faPaperclip, faCalendarDay } from '@fortawesome/free-solid-svg-icons'; // Import the specific icon
import './card.css'
import { useState } from 'react';
import AddAttachmentModal from './AddAttachmentModal';
const Card = () => {
  const [openModal, setOpenModal] = useState<boolean>(false);

  const toggleOpen = () => {
    setOpenModal(true)
  }

  const toggleClose = () => {
    setOpenModal(false)
  }
  return (
    <div className='kanban-card-container'>
      <div className="card-section">
        <div className="client-name-container">
          <div className="single-client-info">
            <img src="img/img-1.jpg" alt="" />
            <h2>Sara Wilson</h2>
          </div>
          <div className="single-client-info">
            <img src="img/img-2.jpg" alt="" />
            <h2>Jack Daniel</h2>
          </div>
        </div>
        <div className="kanban-desc-section">
          <FontAwesomeIcon icon={faLayerGroup} />
          <p>Lorem ipsum dolor sit amet...</p>
          <div className="task-que-container">
            <FontAwesomeIcon icon={faClipboard} />
            <h4>1/2</h4>
          </div>
          
        </div>
        <div className='kanban-bottom-section'>
            <img src="img/img-1.jpg" alt="" />
            <img src="img/img-2.jpg" alt="" />
            <h4 className="items-contaier">12+</h4>
            <div className="comment-container">
                <FontAwesomeIcon icon={faComment} />
                <h4>15</h4>
            </div>
            <div className="attachment-container">
                <a 
                role='button' 
                className='add-btn'
                onClick={toggleOpen}
                >
                  <FontAwesomeIcon icon={faPaperclip} />
                </a>
                <h4>25</h4>
            </div>
            <div className="date-container">
                <FontAwesomeIcon icon={faCalendarDay} />
                <h4>10-01-2024</h4>
            </div>
        </div>
      </div>
      <AddAttachmentModal 
      openModal={openModal}
      toggleClose={toggleClose}
      />
    </div>
  );
}

export default Card;
