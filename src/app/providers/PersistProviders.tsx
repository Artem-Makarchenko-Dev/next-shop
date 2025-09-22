import { useAuthPersist } from "@/store/slices/auth/useAuthPersist";
import { useCartPersist } from "@/store/slices/cart/useCartPersist";

export default function CartPersistProvider({ children }: { children: React.ReactNode }) {
  useCartPersist();
  useAuthPersist();

  return children;
}
