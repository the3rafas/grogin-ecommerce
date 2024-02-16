export default function NotificationBar() {
  return (
    <div className="w-screen  bg-purple-900 h-10 flex items-center font-inter">
      <div className="flex justify-between w-6/12 mx-auto text-white	text-xs  ">
        <div className="flex justify-between  w-6/12  text-center font-semibold	">
          FREE delivery & 40% Discount for next 3 orders! Place your 1st order
          in.
        </div>
        <div className="flex w-5/12">
          <div className="w-2/5 opacity-70 font-medium">
            Until the end of the sale:
          </div>
          <div className="w-1/5 font-bold">
            47 <span className="opacity-70 font-medium">days</span>
          </div>
          <div className="w-1/5 font-bold">
            06 <span className="opacity-70 font-medium">hours</span>
          </div>
          <div className="w-1/5 font-bold">
            55 <span className="opacity-70 font-medium">minutes</span>
          </div>
          <div className="w-1/5 font-bold">
            51 <span className="opacity-70 font-medium">sec</span>
          </div>
        </div>
      </div>
    </div>
  );
}
