import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/app/_components/Carousel";
import { Product } from "../_types/types";
import RecommendedItem from "./RecommendedItem";

function RecommendedProducts({ products }: { products: Product[] }) {
  return (
    <Carousel opts={{ loop: true, align: "end" }} className="mx-16">
      <CarouselContent>
        {products.slice(0, 4).map((product) => (
          <CarouselItem
            key={product.id}
            className="my-4 flex justify-center md:basis-1/2 lg:basis-1/4"
          >
            <RecommendedItem product={product} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselNext className="lg:hidden" />
      <CarouselPrevious className="lg:hidden" />
    </Carousel>
  );
}

export default RecommendedProducts;
