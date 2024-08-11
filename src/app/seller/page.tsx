"use client"
import React from "react";
import LoadingSpinner from "../_components/loading-spinner";
import { errorToast, successToast } from "../_components/toast";

function page() {
  return (
    <>
      <div>seller home page</div>
      {/* <LoadingSpinner /> */}
      <button
        className="m-2 bg-gray-300"
        onClick={() =>
          successToast("success", "we are working on your request")
        }
      >
        success toast
      </button>
      <button
        className="m-2 bg-gray-300"
        onClick={() => errorToast("error")}
      >
        error toast
      </button>
      <div></div>
    </>
  );
}

export default page;
