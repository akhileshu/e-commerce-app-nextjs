import { redirectToSellerLoginIfNotAuthenticated } from "@/lib/getSessionSeller";


export default async function page() {
const session = await redirectToSellerLoginIfNotAuthenticated();
//todo : if seller not verified , get all his details on this page

  return (
    <div>
        <p>you are authenticated seller</p>
      <div>session : {JSON.stringify(session)}</div>
    </div>
  );
}
