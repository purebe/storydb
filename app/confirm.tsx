'use client';
import { useState } from 'react';

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure
} from '@chakra-ui/react';

export function Confirm({ children, title, onConfirm }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const onDialogConfirm = () => {
    onClose();
    onConfirm();
  };

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
	<ModalOverlay />
	<ModalContent>
	  <ModalHeader>{title}</ModalHeader>
	  <ModalCloseButton />
	  <ModalBody>
            {children}
	  </ModalBody>

	  <ModalFooter>
	    <Button onClick={onClose}>
	      Cancel
	    </Button>
	    <Button onClick={onDialogConfirm}>Confirm</Button>
	  </ModalFooter>
	</ModalContent>
      </Modal>
    </>
  );
}

