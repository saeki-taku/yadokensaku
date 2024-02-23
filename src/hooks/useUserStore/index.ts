import { create } from "zustand";
import { persist, createJSONStorage, StateStorage } from 'zustand/middleware';
// import { get, set, del } from 'idb-keyval';

// ユーザー情報の登録・削除
interface User {
  name: string;
  email: string;
  uid: string;
  // 他のユーザー情報もここに含めることができます
}

type UserStore = {
  user: User | null;
  setUser: (userState: User | null) => void;
  clearUser: any;
};

export const useUserStore = create<UserStore>()(
  persist<UserStore>(
    (set) => ({
      user: null,
      setUser: (userState) => set({ user: userState }),
      clearUser: () => {
        set({ user: null })
        localStorage.removeItem('user-storage');
      },
    }),
    {
      name: 'user-storage', // 保存先の名前
      storage: createJSONStorage(() => sessionStorage),
      // getStorage: () => localStorage, // getStorageは非推奨非推奨となった
    }
  )
);

// お気に入りの数
type favoriteStore = {
  favoriteHotels: number;
  setFavoriteHotels: (favoriteState: number) => void;
  increaseFavorite: (favoriteState: number) => void;
  decreaseFavorite: (favoriteState: number) => void;
};

export const useFavoriteStore = create<favoriteStore>()(
  persist<favoriteStore>(
    (set) => ({
      favoriteHotels: 0,
      setFavoriteHotels: (favoriteState: number) => set({ favoriteHotels: favoriteState }),
      increaseFavorite: () => set((favoriteState) => ({ favoriteHotels: favoriteState.favoriteHotels + 1 })),
      decreaseFavorite: () => set((favoriteState) => ({ favoriteHotels: favoriteState.favoriteHotels - 1 })),
    }), {
      name: 'favoriteHotels-storage',
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);

// 行ったことあるの数
type wentStore = {
  wentHotels: number;
  setWentHotels: (wentState: number) => void;
  increaseWent: (wentState: number) => void;
  decreaseWent: (wentState: number) => void;
};

export const useWentStore = create<wentStore>()(
  persist<wentStore>(
    (set) => ({
      wentHotels: 0,
      setWentHotels: (wentState: number) => set({ wentHotels: wentState }),
      increaseWent: () => set((wentState) => ({ wentHotels: wentState.wentHotels + 1 })),
      decreaseWent: () => set((wentState) => ({ wentHotels: wentState.wentHotels - 1 })),
    }),{
      name: 'wentHotels-storage',
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
