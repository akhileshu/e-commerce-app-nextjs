
import { ContainerWithHeading } from "@/app/_components/seller-form";
import { SellerAddressForm } from "./seller-address-form";
import { isSellerAddressSubmitted } from "./action";

async function page() {
  return (
    <ContainerWithHeading heading="Submit Address and Contact">
      <SellerAddressForm
        isAddressAlreadySubmitted={await isSellerAddressSubmitted()}
      />
    </ContainerWithHeading>
  );
}

export default page;
