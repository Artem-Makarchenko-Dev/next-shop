import { Categories } from "@/widgets/home/ui/Categories";
import { FeaturedProducts } from "@/widgets/home/ui/FeaturedProducts";
import { Hero } from "@/widgets/home/ui/Hero";
import { Newsletter } from "@/widgets/home/ui/Newsletter";
import { ValueProps } from "@/widgets/home/ui/ValueProps";

export default function HomePage() {
  return (
    <div className="space-y-20">
      <Hero />
      <Categories />
      <FeaturedProducts />
      <ValueProps />
      <Newsletter />
    </div>
  );
}
