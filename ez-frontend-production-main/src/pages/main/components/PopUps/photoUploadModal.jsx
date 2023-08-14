import React, { useState } from 'react';

function PhotoUploadModal() {
  const [showModal, setShowModal] = useState(false);

  function handleModalOpen() {
    setShowModal(true);
  }

  function handleModalClose() {
    setShowModal(false);
  }

  function handlePhotoUpload(event) {
    // handle photo upload logic here
    // console.log(event.target.files[0]);
  }

  return (
    <>
      <button onClick={handleModalOpen}>Upload Photo</button>

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <h2>Upload Photo</h2>
            <form>
              <input type="file" accept="image/*" onChange={handlePhotoUpload} />
              <button type="submit">Upload</button>
            </form>
            <button onClick={handleModalClose}>Close</button>
          </div>
        </div>
      )}

      <style jsx>{`
        .modal {
          display: flex;
          justify-content: center;
          align-items: center;
          position: fixed;
          z-index: 1;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.4);
        }
        .modal-content {
          background-color: white;
          padding: 20px;
          border: 1px solid black;
        }
      `}</style>
    </>
  );
}

export default PhotoUploadModal;
