import React from "react";

const Premium = () => {
  return (
   <div className="m-10">
  <div className="flex w-full flex-col lg:flex-row gap-6">

    <div className="card bg-base-300 rounded-box grow p-6 flex flex-col items-center text-center gap-3">
      <h1 className="font-bold text-3xl">Silver Membership</h1>

      <ul className="text-left">
        <li>- Chat with other people</li>
        <li>- 100 connection Requests per day</li>
        <li>- Blue Tick</li>
        <li>- 3 months</li>
      </ul>

      <button className="btn btn-secondary mt-3">Buy Silver</button>
    </div>

    <div className="divider lg:divider-horizontal">OR</div>

    <div className="card bg-base-300 rounded-box grow p-6 flex flex-col items-center text-center gap-3">
      <h1 className="font-bold text-3xl">Gold Membership</h1>

      <ul className="text-left">
        <li>- Chat with other people</li>
        <li>- Infinite connection Requests per day</li>
        <li>- Blue Tick</li>
        <li>- 6 months</li>
      </ul>

      <button className="btn btn-primary mt-3">Buy Gold</button>
    </div>

  </div>
</div>

  );
};

export default Premium;
