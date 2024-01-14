'use client';
import { ReactNode, useState } from 'react';
import { createNewProject } from '@/app/project/[id]/createNewProject';

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Input,
  Textarea,
  Button,
  useDisclosure
} from '@chakra-ui/react';

interface Props {
  children: ReactNode;
}

export function NewProject({ children }: Props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [inputTitle, setInputTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [firstRender, setFirstRender] = useState(true);
  if (firstRender) {
    setFirstRender(false);
    onOpen();
  }

  const onDialogClose = () => {
    onClose();
    window.location = `/`;
  };

  const onSave = () => {
    createNewProject(inputTitle, desc);
    onClose();
  };

  const onChangeTitle = event => {
    setInputTitle(event.currentTarget.value);
  };

  const onChangeDesc = event => {
    setDesc(event.currentTarget.value);
  };

  return (
    <>
      <Modal isOpen={isOpen} onClose={onDialogClose} isCentered>
	<ModalOverlay />
	<ModalContent>
	  <ModalHeader>Create New Project</ModalHeader>
	  <ModalCloseButton />
	  <ModalBody>
	    <Input autoFocus={true} onChange={onChangeTitle} placeholder='Project Title' />
	    <Textarea onChange={onChangeDesc} placeholder='Project Description' />
	  </ModalBody>

	  <ModalFooter>
	    <Button onClick={onDialogClose} className="">
	      Close
	    </Button>
	    <Button className="" onClick={onSave}>Save</Button>
	  </ModalFooter>
	</ModalContent>
      </Modal>
    </>
  );
}
