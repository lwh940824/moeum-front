import { api } from "@moeum/api";
import type { IconResponse } from "./icon.type";

export const IconApi = {
  uploadIcon: (file: File) => {
    const formData = new FormData();
    formData.append("file", file);

    return api.post<IconResponse[]>("/icon", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
  },
};
