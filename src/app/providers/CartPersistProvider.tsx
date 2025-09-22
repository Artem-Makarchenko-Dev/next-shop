import { useCartPersist } from "@/store/slices/cart/useCartPersist";

export default function CartPersistProvider({ children }: { children: React.ReactNode }) {
  useCartPersist();

  return children;
}
