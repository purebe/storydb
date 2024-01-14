'use client';

export function NewProject() {
  return (
    <div className="w-48 h-52 rounded mt-8 pb-2 flex text-center items-center justify-center text-slate-100 text-6xl font-light drop-shadow-xl">
      <a href='/project/-1'><span className="cursor-pointer">+</span></a>
    </div>
  );
}
