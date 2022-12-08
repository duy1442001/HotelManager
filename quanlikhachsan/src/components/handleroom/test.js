import React, { useState } from "react";
function OderRoomForm({ dataItem, children }) {
  const [isOpen, setIsOpen] = useState(false);
  const item = dataItem;
 
  const handleIsOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleStopPropagation = (e) => {
    e.stopPropagation();
  };

  return (
    <>
      {children && <button onClick={handleIsOpen}>{children}</button>}
      {isOpen && (
        <div className="container-modal" onClick={handleIsOpen}>
          <div className="content-modal" onClick={handleStopPropagation}>
            <div>Title</div>
            {/* <div>Header {item.id}</div> */}
            <button onClick={handleIsOpen}>Close</button>
          </div>
        </div>
      )}

         
    </>
  );
}

export default test;
