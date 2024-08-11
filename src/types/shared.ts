export const userRoles = {
  user: "USER",
  seller: "SELLER",
} as const;

export interface ActionSuccessBase {
  redirectPath?: string;
  message?: string;
}

