'use client';
import { ReactNode, useState } from 'react';
import { requestEditDescription } from '@/app/project/[id]/requestEditDescription';

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Textarea,
  Button,
  useDisclosure
} from '@chakra-ui/react';

interface Props {
  children: ReactNode;
  id: String;
  title: String;
}

export function EditDescription({ children, id, description }: Props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [desc, setDesc] = useState(description);

  const onSave = () => {
    requestEditDescription(id, desc);
    onClose();
  };

  const onChange = event => {
    setDesc(event.currentTarget.value);
  };

  return (
    <>
      <div onClick={onOpen}>{children}</div>

      <Modal isOpen={isOpen} onClose={onClose} isCentered>
	<ModalOverlay />
	<ModalContent>
	  <ModalHeader>Edit Project Description</ModalHeader>
	  <ModalCloseButton />
	  <ModalBody>
	    <Textarea autoFocus={true} onChange={onChange} value={desc} />
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
