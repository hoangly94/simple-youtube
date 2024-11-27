import { notification } from "antd";

interface RequestError extends Error {
  status: number;
}

export const request = async <T>(
  url: string,
  init?: RequestInit,
): Promise<T> => {
  const response = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    ...init,
  });

  if ([400, 402].includes(response.status)) {
    const error = new Error(
      "An error occurred while fetching the data.",
    ) as RequestError;
    // Attach extra info to the error object.
    const json = await response.json();
    error.message = json.message;
    notification.error({ message: "Error", description: json.message });
    error.status = response.status;
    throw error;
  }
  if ([403, 401].includes(response.status)) {
    const error = new Error("Unauthorized access") as RequestError;
    const json = await response.json();
    if (json.error) {
      error.message = json.error.message;
      error.status = json.error.status;
      const isQuotaExceeded = json.error.message.includes("exceeded");
      if (isQuotaExceeded) {
        notification.error({
          message: "Error",
          description: "Quota exceeded. Please try again later.",
        });
        throw error;
      }
      notification.error({ message: "Error", description: json.error.message });
      throw error;
    }
    error.status = response.status;
    error.message = json.message;

    notification.error({ message: json.message, description: json.message });
    throw error;
  }

  if ([500].includes(response.status)) {
    const error = new Error(
      "Server error. Please try again later.",
    ) as RequestError;
    error.status = response.status;
    notification.error({
      message: "Error",
      description: "Server error. Please try again later.",
    });
    throw error;
  }

  // if (type === "blob") return response.blob() as any;
  return (await response.json()) as T;
};

export const requestWithAuth = async <T>(
  url: string,
  init?: RequestInit,
): Promise<T> => {
  const headers = new Headers({
    ...init?.headers,
  });
  // const token = getAuthToken();
  // if (token !== null) headers.append("secondlab-token", token);
  const response = await fetch(url, { ...init, headers });

  if ([400, 402, 403, 401].includes(response.status)) {
    const error = new Error(
      "An error occurred while fetching the data.",
    ) as RequestError;
    // Attach extra info to the error object.
    const json = await response.json();
    error.message = json.message;
    error.status = response.status;
    throw error;
  }

  if ([500].includes(response.status)) {
    const error = new Error(
      "Server error. Please try again later.",
    ) as RequestError;
    error.status = response.status;
    throw error;
  }

  // if (type === "blob") return response.blob() as any;

  return response.json();
};
