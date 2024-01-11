export function Dropdown({ title, links }) {
  return (
    <div className="relative inline-block group select-none">
      <p className="px-2 cursor-default">{title}</p>
      <div className="hidden absolute left-1 bg-slate-50 w-max shadow flex flex-col flex-nowrap z-10 group-hover:inline-flex">
        {links.map(link => (
          <a className="px-2" href={link.href}>{link.text}</a>
        ))}
      </div>
    </div>
  );
}
