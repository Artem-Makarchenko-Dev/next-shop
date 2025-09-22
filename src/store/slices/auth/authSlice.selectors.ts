import { RootState } from "@/store";
import { User } from "./authSlice.types";

export const selectUser = (s: RootState): User | null => s.auth.user;
