import React from "react";

const DoneCheckbox = ({ done }: { done: boolean | undefined }) => {
  return (
    <>
      {done ? (
        <input type="checkbox" className="w-6" defaultChecked />
      ) : (
        <input type="checkbox" className="w-6" />
      )}
    </>
  );
};

export default DoneCheckbox;
