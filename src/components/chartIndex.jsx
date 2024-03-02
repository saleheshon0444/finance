import React from "react";
export default function ChartIndex(props) {
  return (
    <div className="flex w-full flex-row justify-around items-center py-3">
      <p className="font-medium w-28 text-center text-softBlue">{props.id}</p>
      <p className="font-medium w-32 text-center text-softBlue">{props.name}</p>
      <p className="font-medium w-48 text-center text-softBlue">{props.date}</p>
      <p className="font-medium w-64 text-center text-softBlue">{props.email}</p>
      <p className="font-medium w-32 text-center text-softBlue">{props.status}</p>
      <p className="font-medium w-32 text-center text-softBlue">Actions</p>
    </div>
  );
}
