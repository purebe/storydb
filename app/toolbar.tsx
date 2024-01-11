import { Dropdown } from '@/app/dropdown';

//import '@/app/toolbar.css';

export function Toolbar({ projectTitle }) {
  const links = [
    { href: '#', text: 'Link 1' },
    { href: '#', text: 'Link 2' },
    { href: '#', text: 'Link 3' }
  ];

  return (
    <div className="grid grid-cols-12 bg-slate-100 text-slate-800 text-sm font-normal shadow-md w-screen border-b-2 border-teal-900 select-none">
      <div className="col-span-4 flex">
        <Dropdown title="Menu" links={links} className="" />
        <a href="#" className="px-2">Edit</a>
      </div>
      <span className="col-start-5 col-span-4 text-center">{projectTitle}</span>
      <a href="/" className="px-2 col-start-10 col-span-3">Back to Project Management</a>
    </div>
  );
}
