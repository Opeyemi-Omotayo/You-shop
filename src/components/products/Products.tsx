import React, { useState } from "react";
import ProductCard from "../../elements/products/ProductCard";

export type ProductItem = {
  title: string;
  category: string;
  quantity: number;
  price: string;
  image: string;
  id: number;
};

const product: ProductItem[] = [
  {
    title: "Amazon Echo (3rd generation)",
    category: "appliances",
    quantity: 1,
    price: "52",
    image: "https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$",
    id: 1,
  },
  {
    title: "IFB 30 L Convection Microwave Oven",
    category: "appliances",
    quantity: 1,
    price: "239",
    image: "https://images-na.ssl-images-amazon.com/images/I/81D8pNFmWzL._SL1500_.jpg",
    id: 2,
  },
  {
    title: "Samsung 49' Curved LED Gaming Monitor ",
    category: "appliances",
    quantity: 1,
    price: "1095",
    image: "https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg",
    id: 3,
  },
  {
    title: "Mama'S Pride Parboiled Rice 10kg",
    category: "grocery",
    quantity: 1,
    price: "13",
    image: "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/52/934348/1.jpg?4747",
    id: 4,
  },
  {
    title: "Devon King'S Cooking Oil Keg - 3 litres",
    category: "grocery",
    quantity: 1,
    price: "4",
    image: "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/01/890938/1.jpg?8149",
    id: 5,
  },
  {
    title: "Nestle Golden Morn Grainsmart 900g x1",
    category: "grocery",
    quantity: 1,
    price: "3",
    image: "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/81/4801812/1.jpg?6772",
    id: 6,
  },
  {
    title: "Kellogg's Corn Flakes 300g Box (Kellogg's)",
    category: "grocery",
    quantity: 1,
    price: "6",
    image: "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/53/095728/1.jpg?1256",
    id: 7,
  },
  {
    title: "Amstel Malta Can 33cl x 6",
    category: "grocery",
    quantity: 1,
    price: "5",
    image: "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/65/969129/1.jpg?5342",
    id: 8,
  },
  {
    title: "Men's Sports Running Shoes ",
    category: "fashion",
    quantity: 1,
    price: "8",
    image: "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/26/006249/1.jpg?0364",
    id: 9,
  },
  {
    title: "Men's Fashion Bracelet Four-piece",
    category: "fashion",
    quantity: 1,
    price: "6",
    image: "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/21/8104152/1.jpg?7069",
    id: 10,
  },
  {
    title: "Fashion Anklet Let On The Leg",
    category: "fashion",
    quantity: 1,
    price: "11",
    image: "https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/87/6118622/1.jpg?9629",
    id: 11,
  },
  {
    title: "Ladies Leather Mini Hand Bag - Black",
    category: "fashion",
    quantity: 1,
    price: "10",
    image: "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/30/231008/1.jpg?3542",
    id: 12,
  },
];

const Products = () => {
  const [productsArray, setProductArray] = useState(product);
  const [activeFilter, setActiveFilter] = useState("all");

  const handleFilter = (value: string) => {
    setActiveFilter(value);
    if (value === "all") {
      setProductArray(product);
    } else {
      setProductArray(
        product.filter(
          (product) => product.category.toLowerCase() === value.toLowerCase()
        )
      );
    }
  };

  return (
    <main className="container mt-[3rem] mx-auto px-5 lg:px-10 font-Lato" id="product">
      <nav className="flex justify-between">
        <h1 className="text-2xl font-semibold">
          Popular <span className="text-orange-500">Products</span>
        </h1>
        <ul className="justify-between hidden space-x-10 font-medium text-gray-500 cursor-pointer md:flex">
          <li
            onClick={() => handleFilter("all")}
            className={`cursor-pointer ${activeFilter === "all" ? "border-b-2 border-orange-600" : ""
              }`}
          >
            All
          </li>
          <li
            onClick={() => handleFilter("appliances")}
            className={`cursor-pointer ${activeFilter === "appliances" ? "border-b-2 border-orange-600" : ""
              }`}
          >
            Appliances
          </li>
          <li
            onClick={() => handleFilter("grocery")}
            className={`cursor-pointer ${activeFilter === "grocery" ? "border-b-2 border-orange-600" : ""
              }`}
          >
            Grocery
          </li>
          <li
            onClick={() => handleFilter("fashion")}
            className={`cursor-pointer ${activeFilter === "fashion" ? "border-b-2 border-orange-600" : ""
              }`}
          >
            Fashion
          </li>

        </ul>
      </nav>
      <div className="grid gap-10 pt-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 lg:place-content-center">
        <ProductCard products={productsArray} />
      </div>
    </main>
  );
};

export default Products;