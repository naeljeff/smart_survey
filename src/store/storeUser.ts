import { create } from 'zustand';

interface UserState {
  token: string | null;
  messageResponse: Record<string, any> | null;
  setUserData: (data: {
    token: string;
    messageResponse: Record<string, any>;
  }) => void;
  clearUserData: () => void;
}

export const useUserStore = create<UserState>(set => ({
  token: null,
  messageResponse: null,
  setUserData: data =>
    set({
      token: data.token,
      messageResponse: data.messageResponse,
    }),
  clearUserData: () =>
    set({
      token: null,
      messageResponse: null,
    }),
}));
