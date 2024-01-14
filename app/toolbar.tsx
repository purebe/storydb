'use client';
import '@/app/toolbar.css';
import { RenameProject } from '@/app/project/[id]/renameProject';
import { ProjectTitle } from '@/app/projectTitle';
import { useState } from 'react';

import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Button
} from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';

export function Toolbar({ title, id }) {
  const [projectTitle, setProjectTitle] = useState(title);
  return (
    <div className="toolbar grid grid-cols-12 bg-slate-100 text-slate-800 shadow-md w-screen border-b-2 border-teal-900 select-none">
      <div className="col-span-4 flex">
        <Menu>
          <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
            Menu
          </MenuButton>
          <MenuList>
            <MenuItem><a href="/api/auth/signout">Sign out</a></MenuItem>
          </MenuList>
        </Menu>
        <Menu>
          <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
            Edit
          </MenuButton>
          <MenuList>
            <MenuItem>
              <RenameProject id={id} title={projectTitle} setProjectTitle={setProjectTitle}>
                <a className="px-2" href="#">Rename Project...</a>
              </RenameProject>
            </MenuItem>
          </MenuList>
        </Menu>
      </div>
      <ProjectTitle id={id} title={projectTitle} setProjectTitle={setProjectTitle} />
      <a href="/" className="px-2 col-start-10 col-span-3">Back to Project Management</a>
    </div>
  );
}
