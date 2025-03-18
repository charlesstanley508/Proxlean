import React from 'react';

const Popup = (props) => {
  return (props.trigger) ? (
    <>
      <div className="Popup-wrapper">
        <div className="popup-inner">
          <div className="close-btn">
            <i class="fa fa-times"></i>
          </div>
          {props.children}
        </div>
      </div>
    </>
  ) : "";
}

export default Popup;