'use client';

export default function ProjectLoading() {
  return (
    <div
      className="bg-slate-100 w-48 h-52 rounded shadow-xl mt-8 pb-2 flex flex-col justify-around text-center font-light text-slate-900 text-base drop-shadow-xl cursor-pointer hover:outline hover:outline-2 hover:outline-orange-300"
    >
      <p className="font-bold drop-shadow-xl">...</p>
      <p className="text-sm w-48 h-32 text-ellipsis overflow-hidden">...</p>
      <span className="text-xs font-medium">...</span>
    </div>
  );
}

