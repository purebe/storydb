'use client';
import { SmallCloseIcon } from '@chakra-ui/icons';
import { ConfirmDelete } from '@/app/project/confirmDelete';
import { deleteProject } from '@/app/project/deleteProject';

export default function Project({ id, name, description, updatedAt, onDelete }) {
  const onClickDelete = () => {
    deleteProject(id);
    window.location.reload();
  };

  return (
    <div className="group flex">
      <div
        className="bg-slate-100 w-48 h-52 mx-1 rounded shadow-xl mt-8 pb-2 flex flex-col justify-around text-center font-light text-slate-900 text-base drop-shadow-xl cursor-pointer hover:outline hover:outline-2 hover:outline-orange-300"
        onClick={() => { window.location = `project/${id}`; }}
      >
        <p className="font-bold drop-shadow-xl">{name}</p>
        <p className="text-sm w-48 h-32 text-ellipsis overflow-hidden">{description}</p>
        <span className="text-xs font-medium">Last updated at {updatedAt.toLocaleDateString()}</span>
      </div>
      <div className="h-full pt-7 group-hover:visible invisible">
        <ConfirmDelete title={name} onConfirm={onClickDelete}>
          <div className="text-slate-300 hover:text-slate-50 cursor-pointer select-none"><SmallCloseIcon boxSize={6} /></div>
        </ConfirmDelete>
      </div>
    </div>
  );
}
