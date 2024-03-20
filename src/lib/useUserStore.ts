import { create } from "zustand";
import { persist } from "zustand/middleware";

const useUserStore = create(
	persist(
		(set) => ({
			user: null,
			setUser: (newUser: any) => set({ user: newUser }),
		}),
		{
			name: "user-storage", // 保存先の名前
			getStorage: () => localStorage, // 保存先のストレージ
		}
	)
);

export default useUserStore;
