import {create} from 'zustand';

interface UserState {
  token: string[] | string | null;
  messageResponse: Record<string, any> | null;
  source_login: string[] | string | null;
  setUserData: (data: {
    token: string[] | string ;
    messageResponse: Record<string, any>;
    source_login: string[] | string;
  }) => void;
  clearUserData: () => void;
}

export const useUserStore = create<UserState>(set => ({
  token: null,
  messageResponse: null,
  source_login: null,
  setUserData: data =>
    set({
      token: data.token,
      messageResponse: data.messageResponse,
      source_login: data.source_login,
    }),
  clearUserData: () =>
    set({
      token: null,
      messageResponse: null,
      source_login: null,
    }),
}));
