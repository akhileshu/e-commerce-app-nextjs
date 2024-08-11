import React from "react";

function YourBrowsingHistory() {
  return (
    <div className="border py-4">
      <Top />
      <Bottom />
    </div>
  );
}
function Bottom() {
  return (
    <div className="flex items-center">
      <Left />
      <div className="min-w-[90%] flex gap-4 mx-4 h-52">
        <HistoryItem />
        <HistoryItem />
        <HistoryItem />
        <HistoryItem />
        <HistoryItem />
        <HistoryItem />
        <HistoryItem />
        {/* <HistoryItem /> */}
      </div>
      <Right />
    </div>
  );
}

function HistoryItem() {
  return <div className="bg-amazon-light-gray border min-w-36"></div>;
}

function Left() {
  return <div className="border p-2">{"<"}</div>;
}
function Right() {
  return <div className="border p-2">{">"}</div>;
}

function Top() {
  return (
    <div className="flex justify-between">
      <div>
        <span className="font-bold text-lg">
          Lorem ipsum dolor sit amet consectetur
        </span>
        <span className="text-amazon-teal-blue text-sm">
          Lorem ipsum dolor sit.
        </span>
      </div>
      <div className="text-sm">Lorem, ipsum dolor.</div>
    </div>
  );
}

export default YourBrowsingHistory;
