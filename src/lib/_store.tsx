import { create } from "zustand";

interface User {
	name: string;
	email: string;
	// 他のユーザー情報もここに含めることができます
}

type UserStore = {
	user: User | null;
	setUser: (newUser: User | null) => void;
};

const useUserStore = create<UserStore>((set) => ({
	user: null,
	setUser: (newUser) => set({ user: newUser }),
}));

export default useUserStore;
