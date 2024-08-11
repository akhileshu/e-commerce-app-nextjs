export type BaseAddress = {
  type: "SellerAddress" | "UserAddress" | "ShippingAddress";
  addressLine1: string;
  street: string;
  landmark: string;
  city: string;
  state: string;
  zipCode: string;
  country: "India";
};

export type AddressFieldErrors = {
  addressLine1?: string[] | undefined;
  street?: string[] | undefined;
  landmark?: string[] | undefined;
  city?: string[] | undefined;
  state?: string[] | undefined;
  zipCode?: string[] | undefined;
  country?: string[] | undefined;
  type?: string[] | undefined;
};
