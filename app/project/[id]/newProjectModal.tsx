'use client';
import { ReactNode, useState } from 'react';
import { useDisclosure } from '@chakra-ui/react';

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react';

interface Props {
  children: ReactNode;
}

export function NewProjectModal({ children }: Props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <button onClick={onOpen}>Open Modal</button>

      <Modal isOpen={isOpen} onClose={onClose}>
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
