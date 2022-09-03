import { toast } from "react-toastify";

export const errorToast = (error) => {
  if (typeof error === "string") {
    toast(error === "Failed to fetch" ? "Conncetion Lost!" : error, { type: "error" });
  } else {
    toast(error.message === "Failed to fetch" ? "Conncetion Lost!" : error.message, {
      type: "error",
    });
  }
};
