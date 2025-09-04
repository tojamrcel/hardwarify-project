import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/app/_components/Carousel";
import { Product } from "../_types/types";
import BestsellerItem from "./BestsellerItem";

function Bestsellers({ products }: { products: Product[] }) {
  return (
    <Carousel opts={{ loop: true, align: "center" }} className="mx-16">
      <CarouselContent>
        {products.slice(0, 4).map((product) => (
          <CarouselItem
            key={product.id}
            className="my-4 flex justify-center md:basis-1/2 lg:basis-1/4"
          >
            <BestsellerItem product={product} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselNext className="lg:hidden" />
      <CarouselPrevious className="lg:hidden" />
    </Carousel>
  );
}

export default Bestsellers;
