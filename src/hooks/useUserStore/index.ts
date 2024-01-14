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

export const useUserStore = create<UserStore>()(
  persist<UserStore>(
    (set) => ({
      user: null,
      setUser: (newUser) => set({ user: newUser }),
      clearUser: () => {
        set({ user: null })
        localStorage.removeItem('user-storage');
      }
    }),
    {
      name: 'user-storage', // 保存先の名前
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
