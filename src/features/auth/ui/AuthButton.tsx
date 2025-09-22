"use client";

import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { logout } from "@/store/slices/auth/authSlice";
import { selectUser } from "@/store/slices/auth/authSlice.selectors";
import { LogOut, User } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function AuthButton() {
  const user = useAppSelector(selectUser);
  const dispatch = useAppDispatch();
  const router = useRouter();

  const handleLogout = () => {
    dispatch(logout());
    router.push("/");
  };

  return user ? (
    <div
      className="flex items-center gap-3 p-2.5 rounded-xl 
          border dark:border-gray-700 border-gray-200 
          bg-background text-foreground 
          hover:shadow-sm transition cursor-pointer"
    >
      <span className="font-medium text-foreground ">{user.name}</span>
      <LogOut
        onClick={handleLogout}
        className="w-5 h-5 text-foreground cursor-pointer hover:opacity-80 transition"
      />
    </div>
  ) : (
    <Link href="/auth/login" className="p-2 rounded-xl transition">
      <User className="w-5 h-5 text-foreground" />
    </Link>
  );
}
