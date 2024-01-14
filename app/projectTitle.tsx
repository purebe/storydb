'use client';
import '@/app/toolbar.css';
import { RenameProject } from '@/app/project/[id]/renameProject';
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

export function ProjectTitle({ id, title, setProjectTitle }) {
  return (
    <div className="col-start-5 col-span-4">
      <RenameProject id={id} title={title} setProjectTitle={setProjectTitle} doubleClick>
        <span className="select-text">{title}</span>
      </RenameProject>
    </div>
  );
}
