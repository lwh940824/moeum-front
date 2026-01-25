import { useMutation } from "@tanstack/react-query";
import { IconApi } from "./icon.api";

export const useUploadIcon = () =>
  useMutation({
    mutationFn: (file: File) => IconApi.uploadIcon(file),
  });
