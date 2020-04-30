import React from 'react';

import Toast from './Toast';
import { ToastMessages, useToast } from '../../hooks/ToastContext';

import { Container } from './styles';

interface ToastContainerProps {
  messages: ToastMessages[];
}

const ToastContainer: React.FC<ToastContainerProps> = ({ messages }) => {
  const { removeToast } = useToast();

  return (
    <Container>
      {messages.map((message) => (
        <Toast key={message.id} toast={message} />
      ))}
    </Container>
  );
};

export default ToastContainer;
