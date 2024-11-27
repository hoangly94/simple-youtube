// import { LoaderFunctionArgs, redirect } from "react-router-dom";
// import { AuthProvider } from "@repo/ui/contexts";

// export async function rootLoader() {
//   return {};
// }

// export const logoutLoader = (authProvider: AuthProvider) => async () => {
//   authProvider.logout();
//   return redirect("/login");
// };

// export const protectedLoader =
//   (authProvider: AuthProvider) =>
//   async ({ request }: LoaderFunctionArgs) => {
//     if (authProvider.isAuthenticated) {
//       return null;
//     }

//     const params = new URLSearchParams();
//     params.set("from", new URL(request.url).pathname);
//     return redirect("/login?" + params.toString());
//   };

// export const logoutShopFormLoader =
//   (authShopFormProvider: AuthProvider) => async () => {
//     authShopFormProvider.logout();
//     return redirect("/shop-form/login");
//   };

// export const protectedShopFormLoader =
//   (authShopFormProvider: AuthProvider) =>
//   async ({ request }: LoaderFunctionArgs) => {
//     if (authShopFormProvider.isAuthenticated) {
//       return null;
//     }

//     const params = new URLSearchParams();
//     params.set("from", new URL(request.url).pathname);
//     return redirect("/shop-form/login?" + params.toString());
//   };
