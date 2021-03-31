import React, { createContext, useContext, useCallback, useState } from 'react';
import { uuid } from 'uuidv4';

import ToastContainer from '../components/ToastContainer';

export interface ToastMessage {
  id: string;
  type?: 'success' | 'error' | 'info';
  title: string;
  description?: string;
}

interface ToastContexData {
  // eslint-disable-next-line no-unused-vars
  addToast(message: Omit<ToastMessage, 'id'>): void;
  // eslint-disable-next-line no-unused-vars
  removeToast(id: string): void;
}

const ToastContext = createContext<ToastContexData>({} as ToastContexData);

export const ToastProvider: React.FC = ({ children }) => {
  const [messages, setMessages] = useState<ToastMessage[]>([]);

  const addToast = useCallback(
    ({ type, title, description }: Omit<ToastMessage, 'id'>) => {
      const id = uuid();
      const toast = {
        id,
        type,
        title,
        description,
      };
      setMessages(oldMessages => {
        return [...oldMessages, toast];
      });
    },
    [],
  );

  const removeToast = useCallback((id: string) => {
    setMessages(state => {
      return state.filter(message => {
        return message.id !== id;
      });
    });
  }, []);
  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      {children}
      <ToastContainer messages={messages} />
    </ToastContext.Provider>
  );
};

export function useToast(): ToastContexData {
  const contex = useContext(ToastContext);

  return contex;
}
