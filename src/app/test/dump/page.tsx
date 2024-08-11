import { getServerSession } from "next-auth";
import { getProviders } from "next-auth/react";
import { authOptions } from "../../api/auth/[...nextauth]/route";
import { SignInButton } from "../../seller/_components/sign-in-button";

export default async function SignIn() {
  const providers = await getProviders();
  const session = await getServerSession(authOptions);
  console.log({ session });

  return (
    <div>
      <p>seller login</p>
      <div>session : {JSON.stringify(session)}</div>

      {Object.values(providers!).map((provider, index) => {
        if (provider?.id && provider?.name) {
          return (
            <SignInButton
              key={index}
              providerId={provider.id}
              providerName={provider.name}
            />
          );
        }
        return null;
      })}
    </div>
  );
}


