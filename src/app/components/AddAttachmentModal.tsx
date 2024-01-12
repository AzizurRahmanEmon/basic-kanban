'use client'
import React, { useEffect, useState } from 'react';
import { Modal } from 'react-bootstrap';
import './modal.css';

type Props = {
  openModal: boolean;
  toggleClose: () => void;
}
const AddAttachmentModal = ({openModal, toggleClose } : Props) => {
  const [selectedFiles, setSelectedFiles] = useState<FileList | null>(null);
  const [uploadProgress, setUploadProgress] = useState<Record<string, number>>({});
  const [uploadedFiles, setUploadedFiles] = useState<string[]>([]);
  const localStorageKey = 'uploadedFiles';

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedFiles(event.target.files);
  };

  const handleUpload = async () => {
    if (selectedFiles) {
      const filesArray = Array.from(selectedFiles);

      for (const file of filesArray) {
        setUploadProgress({ ...uploadProgress, [file.name]: 0 });
        await new Promise((resolve) => setTimeout(resolve, 2000));
        setUploadProgress({ ...uploadProgress, [file.name]: 100 });

        setUploadedFiles((prevUploadedFiles) => [...prevUploadedFiles, file.name]);
      }

      // Save uploaded files to localStorage
      localStorage.setItem(localStorageKey, JSON.stringify(uploadedFiles));

      console.log('Files stored in localStorage:', uploadedFiles);
    }
  };

  // Load uploaded files from localStorage on component mount
  useEffect(() => {
    const storedFiles = localStorage.getItem(localStorageKey);
    if (storedFiles) {
      setUploadedFiles(JSON.parse(storedFiles));
    }
  }, []);

  return (
    <Modal
    size='lg'
    className='file-upload-modal'
    show={openModal}
    onHide={toggleClose}
    centered
    >
      <Modal.Header>
        <h3>Upload Files</h3>
        <button className='close-modal-btn' onClick={toggleClose}>x</button>
      </Modal.Header>
      <Modal.Body>
        <div className="input-container d-flex justify-content-between">
          <input type="file" multiple onChange={handleFileChange} />
        {selectedFiles && selectedFiles.length > 0 && (
          <ul>
            {Array.from(selectedFiles).map((file) => (
              <li key={file.name}>
                {file.name} - {uploadProgress[file.name] ? `${uploadProgress[file.name]}%` : 'Uploading...'}
              </li>
            ))}
          </ul>
        )}
        <button onClick={handleUpload} disabled={!selectedFiles || selectedFiles.length === 0}>
          Upload Files
        </button> 
        </div>
       
        

        {uploadedFiles.length > 0 && (
          <div className='uploaded-file-container'>
            <h4>Uploaded Files:</h4>
            <ul>
              {uploadedFiles.map((fileName) => (
                <li key={fileName}>{fileName}</li>
              ))}
            </ul>
          </div>
        )}
      </Modal.Body>
    </Modal>
  );
};

export default AddAttachmentModal;

