import { matchPath, useLocation } from "react-router-dom";

const routeToPageTitleMap = {
  "/products": "Products",
  "/vendors": "Vendors",
  "/brands": "Brands",
  "/members": "Members",
  "/subscriptions": "Subscriptions",
  "/shops": "Shops",
  "/notifications": "Notifications",
  "/activities": "Activity History",
  "/orders": "Order Form",
  "/sync-history": "Sync History",
  "/extensions": "Extensions",
};

export const useHeaderTitle = () => {
  const location = useLocation();
  for (const [pathName, headerTitle] of Object.entries(routeToPageTitleMap)) {
    const title = matchPath(pathName, location.pathname);
    if (title) {
      return headerTitle;
    }
  }
  return null;
};
