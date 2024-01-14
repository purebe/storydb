'use client';
import { SmallCloseIcon } from '@chakra-ui/icons';

export function ProjectLoading() {
  return (
    <div className="flex">
      <div
        className="bg-slate-100 w-48 h-52 rounded shadow-xl mt-8 pb-2 flex flex-col justify-around text-center font-light text-slate-900 text-base drop-shadow-xl cursor-pointer hover:outline hover:outline-2 hover:outline-orange-300"
      >
        <p className="font-bold drop-shadow-xl">...</p>
        <p className="text-sm w-48 h-32 text-ellipsis overflow-hidden">...</p>
        <span className="text-xs font-medium">...</span>
      </div>
      <div className="h-full pt-7 invisible">
        <div><SmallCloseIcon boxSize={6} /></div>
      </div>
    </div>
  );
}

