import { isRejectedWithValue } from "@reduxjs/toolkit";
import type { Middleware } from "@reduxjs/toolkit";
import { commonMessage } from "@repo/constants";
import { ServerError } from "@repo/models";
import { message } from "antd";
import { authProvider } from "@ui/contexts";

function hasServerMessage(payload: ServerError): payload is ServerError {
  const payloadMessage = payload.data?.message;
  return (
    typeof payload === "object" &&
    payload !== null &&
    "data" in payload &&
    "message" in payload.data &&
    (typeof payloadMessage === "string" ||
      (Array.isArray(payloadMessage) &&
        payloadMessage.length > 0 &&
        payloadMessage.every((item) => typeof item === "string")))
  );
}

export const rtkQueryErrorBoundary: Middleware = () => (next) => (action) => {
  const accessError = [
    "Unauthorized",
    "Token is expried",
    "Unauthorized access",
    "Access-token cookie is required",
  ];
  if (isRejectedWithValue(action)) {
    const payload = action.payload as ServerError;
    const payloadMessage = payload?.data?.message;
    if (hasServerMessage(payload) && payloadMessage) {
      if (Array.isArray(payloadMessage)) {
        payloadMessage.forEach((msg) => {
          if (
            accessError.includes(msg) ||
            payload?.status === 401 ||
            payload?.status === 403
          ) {
            message.error(msg);

            authProvider.isAuthenticated = false;
            localStorage.clear();
          }
          message.error(msg);
        });
      } else {
        if (
          accessError.includes(payloadMessage) ||
          payload?.status === 401 ||
          payload?.status === 403
        ) {
          message.error(payloadMessage);

          authProvider.isAuthenticated = false;
          localStorage.clear();
        }
        message.error(payloadMessage);
      }
    } else {
      if (
        (action.payload as { error: string })?.error ===
        commonMessage.failToFetch
      ) {
        message.error(commonMessage.failToFetch);
        return;
      }
      message.error(commonMessage.error);
    }
  }

  return next(action);
};
