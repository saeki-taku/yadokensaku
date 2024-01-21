import { create } from "zustand";
import { persist } from "zustand/middleware";

interface User {
  name: string;
  email: string;
  uid: string;
  // 他のユーザー情報もここに含めることができます
}

type UserStore = {
  user: User | null;
  setUser: (newUser: User | null) => void;
  clearUser: any;
};

// ユーザー情報の登録削除
export const useUserStore = create<UserStore>()(
  persist<UserStore>(
    (set) => ({
      user: null,
      setUser: (newUser) => set({ user: newUser }),
      clearUser: () => {
        set({ user: null })
        localStorage.removeItem('user-storage');
      },
    }),
    {
      name: 'user-storage', // 保存先の名前
      getStorage: () => localStorage, // 保存先のストレージ
    }
  )
);

interface favoriteHotels {
  num: number;
}

type favoriteHotelsStore = {
  favoriteHotels: User | null;
  setUser: (newUser: User | null) => void;
  clearUser: any;
};

export const usefavoriteHotelsStore = create<favoriteHotelsStore>()(
  persist<favoriteHotelsStore>(
    (set) => ({
      favoriteHotels: 0,
      setUser: (newUser) => set({ favoriteHotels: newUser }),
      clearFavoriteHotels: () => {
        set({ favoriteHotels: 0 })
        localStorage.removeItem('favoriteHotels-storage');
      },
    }),
    {
      name: 'favoriteHotels-storage', // 保存先の名前
      getStorage: () => localStorage, // 保存先のストレージ
    }
  )
);

// jsで記述すると...
// import { create } from "zustand";
// import { persist } from "zustand/middleware";

// const useUserStore = create(
// 	persist(
// 		(set) => ({
// 			user: null,
// 			setUser: (newUser) => set({ user: newUser }),
// 		}),
// 		{
// 			name: "user-storage", // 保存先の名前
// 			getStorage: () => localStorage, // 保存先のストレージ
// 		}
// 	)
// );

// export default useUserStore;
