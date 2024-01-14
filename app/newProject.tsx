'use client';

export function NewProject() {
  return (
    <div className="w-12 h-52 rounded mt-8 pb-2 flex text-center items-center justify-center text-slate-300 text-6xl font-light drop-shadow-xl">
      <a href='/project/-1'><span className="cursor-pointer hover:text-slate-50">+</span></a>
    </div>
  );
}
