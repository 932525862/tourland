import { create } from 'zustand';

const useShareStore = create((set) => ({
    isModal: false,
    setIsModal: (newModal) => set({ isModal: newModal })
}));

export default useShareStore;
