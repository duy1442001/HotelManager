import React from "react";

function StatusRoom() {
  return (
    <div className="d-flex justify-content-between row ml-1 my-3">

      <div className="col-sm ">
        <button type="button" className="btn btn-primary"></button>
        <span> : Trống</span>
      </div>

      <div className="col-sm">
        <button type="button" className="btn btn-warning"></button>
        <span> : Đã đặt</span>
      </div>

      <div className="col-sm">
        <button type="button" className="btn btn-success"></button>
        <span> : Check in</span>
      </div>

      <div className="col-sm">
        <button type="button" className="btn btn-danger"></button>
        <span> : Cần dọn dẹp</span>
      </div>

    </div>
  );
}

export default StatusRoom;
