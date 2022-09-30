import React from "react";

const List = (props) => {
  return (
    <>
      <div
        className="listDiv"
        style={{ display: "flex", justifyContent: "space-around" }}
      >
        <li style={{ fontWeight: "", fontSize: 20 }}>{props.text}</li>
        <i
          className="fa fa-times"
          style={{ marginTop: 6 }}
          aria-hidden="true"
          onClick={() => {
            props.onSelect(props.id);
          }}
        />
      </div>
    </>
  );
};
export default List;
