import { create } from "zustand";

export interface ProfileState {
  name: string;
  email: string;

  changeProfile: (name: string, email: string) => void;
}

export const userProfileStore = create<ProfileState>()((set, get) => ({
  name: 'Claudio',
  email: 'clacs@code.com',

  changeProfile: (name: string, email: string) => {
    set({ name, email });
  }
}));