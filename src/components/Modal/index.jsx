/* eslint-disable react/button-has-type */
import React, { useState } from 'react';
import ModalVideo from 'react-modal-video';
import '../../../node_modules/react-modal-video/scss/modal-video.scss';

function Modal({ modalBtn, videoId }) {
    const [isOpen, setOpen] = useState(false);
    return (
        <>
            <ModalVideo
                channel="youtube"
                autoplay
                isOpen={isOpen}
                videoId={videoId}
                onClose={() => setOpen(false)}
            />

            <button className="modal-btn" onClick={() => setOpen(true)}>
                {modalBtn}
            </button>
        </>
    );
}

export default Modal;
