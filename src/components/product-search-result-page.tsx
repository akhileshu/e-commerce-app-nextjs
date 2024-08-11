import React from "react";

function ProductSearchResultPage() {
  return (
    <>
      <TopSectionSortBy />
      <div className="flex ">
        <LeftFiltersSection />
        <RightSection />
      </div>
    </>
  );
}
function LeftFiltersSection() {
  return (
    <div className="w-[25%] bg-amazon-light-gray divide-y-2 divide-black m-2">
      <HierarchialCategorySection />
      <SearchCategorySection />
      <FilterPriceRangeSection />
      <AllCategoryAttributesFilter/>
    </div>
  );
}

function TopSectionSortBy(){
    return (
      <div className="flex border justify-between">
        <div>1-24 of over 1,000 results for mobile 5g</div>
<SortBySection/>
      </div>
    );
}

function SortBySection(){
    return <div>Lorem, ipsum dolor.</div>
}

function FilterPriceRangeSection(){
return (
  <div>
    <div>Price</div>
    <p>₹890 – ₹110,900+</p>
    <input type="range" min="1" max="1000" /> <span className="border">Go</span>
  </div>
);
}

function SeeMoreSeeLess(){
    return <div>- See More</div>;
}

function AllCategoryAttributesFilter(){
    const p = [
      "brands",
      "Cellular Technology",
      "Installed RAM Size",
      "Operating System ",
    ];
    return <div>
        {p.map((brand,index) => (
          <CategoryAttributes key={index} title ={brand} categoryAttributes={""}/>
        ))}
      </div>

}

function CategoryAttributes({
  categoryAttributes,
  title,
}: {
  categoryAttributes:any
  title:any
}) {
    return (
      <div>
        <div className="font-bold">{title}</div>
        {Array.from({ length: 4 }, (_, index) => (
          <div key={index}>
            <input type="checkbox" name="" id="" /> <span>{"Redmi"}</span>
          </div>
        ))}
      </div>
    );
}

function BrandsSection(){
    return (
      <div className="">
        <div className="font-bold">{"Brands"}</div>
        {Array.from({ length: 4 }, (_, index) => (
          <div key={index}>
            <input type="checkbox" name="" id="" /> <span>{"Redmi"}</span>
          </div>
        ))}
        <div>- See More</div>
      </div>
    );
}

function SearchCategorySection() {
  return (
    <div>
      <div className="font-bold">{"Smartphones & Basic Mobiles"}</div>
      {Array.from({ length: 2 }, (_, index) => (
        <ChildrenCategoriesSection category={"apple"} key={index} />
      ))}
    </div>
  );
}

function HierarchialCategorySection() {
  return (
    <div>
      {Array.from({ length: 3 }, (_, index) => (
        <AnsistorCategoriesSection category={"apple"} key={index} />
      ))}
     <SearchCategorySection/>
    </div>
  );
}

function AnsistorCategoriesSection({ category }: { category: String }) {
 return  <div>{"< " + category}</div>;
}
function ChildrenCategoriesSection({ category }: { category: String }) {
 return  <div className="ml-4">{category}</div>;
}

function RightSection() {
  return (
    <div className="border w-full">
      <TopAdvertisementSection />
      <Products />
    </div>
  );
}
function TopAdvertisementSection() {
  return (
    <div>
      <div className="divide-x-2 flex">
        <div className="pr-4">Logo</div>
        <div className="pl-4">
          <p>Lorem ipsum dolor sit.</p>
          <p>Lorem, ipsum.</p>
        </div>
      </div>
      <div className="divide-x-2 divide-black flex h-48 bg-amazon-light-gray">
        <div className="flex-1"></div>
        <div className="flex-1"></div>
      </div>
    </div>
  );
}

function Products() {
  return (
    <div>
      <div>
        <p className="font-bold text-lg">Products</p>
        <p>Lorem ipsum dolor sit amet.</p>
      </div>
      {Array.from({ length: 16 }, (_, index) => (
        <ProductCard key={index} />
      ))}
    </div>
  );
}

function ProductCard() {
  return (
    <div className="border h-72 flex">
      <div className="w-60 bg-amazon-light-gray"></div>
      <div className=""></div>
    </div>
  );
}

export default ProductSearchResultPage;
