'use client';
import { ReactNode, useState } from 'react';
import { requestRenameProject } from '@/app/project/[id]/requestRenameProject';

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Input,
  Button,
  useDisclosure
} from '@chakra-ui/react';

interface Props {
  children: ReactNode;
  id: String;
  title: String;
}

export function RenameProject({ children, id, title, setProjectTitle, doubleClick }: Props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [inputTitle, setInputTitle] = useState(title);

  const onSave = () => {
    requestRenameProject(id, inputTitle);
    setProjectTitle(inputTitle);
    onClose();
  };

  const onChange = event => {
    setInputTitle(event.currentTarget.value);
  };

  const onClick = () => {
    if (!doubleClick) {
      onOpen();
    }
  };

  return (
    <>
      <div onClick={onClick} onDoubleClick={onOpen}>{children}</div>

      <Modal isOpen={isOpen} onClose={onClose} isCentered>
	<ModalOverlay />
	<ModalContent>
	  <ModalHeader>Rename Project</ModalHeader>
	  <ModalCloseButton />
	  <ModalBody>
	    <Input autoFocus={true} onChange={onChange} value={inputTitle} />
	  </ModalBody>

	  <ModalFooter>
	    <Button onClick={onClose} className="">
	      Close
	    </Button>
	    <Button className="" onClick={onSave}>Save</Button>
	  </ModalFooter>
	</ModalContent>
      </Modal>
    </>
  );
}
