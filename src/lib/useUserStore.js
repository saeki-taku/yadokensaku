import { create } from "zustand";
import { persist } from "zustand/middleware";

const useUserStore = create(
	persist(
		(set) => ({
			user: null,
			setUser: (newUser) => set({ user: newUser }),
		}),
		{
			name: "user-storage", // 保存先の名前
			getStorage: () => localStorage, // 保存先のストレージ
		}
	)
);

export default useUserStore;

// 2023/12/10
// ※hooksディレクトリに入れて使用する予定
