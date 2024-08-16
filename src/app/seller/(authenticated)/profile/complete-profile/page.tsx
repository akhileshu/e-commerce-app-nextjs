import { ContainerWithHeading } from "@/app/_components/seller-form";
import { SellerAddressForm } from "./seller-address-form";
import { isSellerAddressSubmitted } from "./action";

async function page() {
  return (
    <div>
      <ContainerWithHeading heading="Submit Address and Contact">
        <SellerAddressForm
          isAddressAlreadySubmitted={await isSellerAddressSubmitted()}
        />
      </ContainerWithHeading>
    </div>
  );
}

export default page;
