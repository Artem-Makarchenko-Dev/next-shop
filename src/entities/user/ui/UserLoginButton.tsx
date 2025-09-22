"use client";

import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { logout } from "@/store/slices/auth/authSlice";
import { selectUser } from "@/store/slices/auth/authSlice.selectors";
import { LogOut, User } from "lucide-react";
import Link from "next/link";

export default function UserLoginButton() {
  const user = useAppSelector(selectUser);
  const dispatch = useAppDispatch();

  return user ? (
    <div className="flex items-center gap-3 px-3 py-1.5 rounded-xl shadow-sm bg-gray-50 dark:bg-gray-800">
      <span className="text-sm text-foreground">{user.name}</span>
      <LogOut
        onClick={() => dispatch(logout())}
        className="w-5 h-5 text-foreground cursor-pointer hover:opacity-80 transition"
      />
    </div>
  ) : (
    <Link href="/auth/login" className="p-2 rounded-xl transition">
      <User className="w-5 h-5 text-foreground" />
    </Link>
  );
}
