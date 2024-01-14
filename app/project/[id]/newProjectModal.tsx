'use client';
import { ReactNode, useState } from 'react';

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure
} from '@chakra-ui/react';

import { QuillEditor } from '@/app/quill';

interface Props {
  children: ReactNode;
  openModal: ReactNode;
}

export function NewProjectModal({ children, openModal }: Props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <div onClick={onOpen}>{openModal}</div>

      <Modal isOpen={isOpen} onClose={onClose} isCentered>
	<ModalOverlay />
	<ModalContent>
	  <ModalHeader>Modal Title</ModalHeader>
	  <ModalCloseButton />
	  <ModalBody>
	    {children}
	  </ModalBody>

	  <ModalFooter>
	    <button colorScheme='blue' mr={3} onClick={onClose}>
	      Close
	    </button>
	    <button variant='ghost'>Secondary Action</button>
	  </ModalFooter>
	</ModalContent>
      </Modal>
    </>
  );
}
