import { Button } from "@moeum/ui";
import { useState } from "react";
import { useUploadIcon } from "../../service/api/icon/icon.queries";

export default function IconPage() {
  const uploadIcon = useUploadIcon();
  const [file, setFile] = useState<File | null>(null);

  const onSubmit = () => {
    if (!file) return;
    uploadIcon.mutate(file);
  };

  return (
    <div className="w-full max-w-4xl flex flex-col gap-6">
      <section className="border rounded p-4 flex flex-col gap-3">
        <div className="text-lg font-semibold">Upload Icon</div>
        <input
          type="file"
          onChange={(event) => setFile(event.target.files?.[0] ?? null)}
        />
        <Button onClick={onSubmit} disabled={!file}>
          Upload
        </Button>
      </section>

      {uploadIcon.data ? (
        <section className="border rounded p-4 flex flex-col gap-3">
          <div className="text-lg font-semibold">Uploaded</div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {uploadIcon.data.map((icon) => (
              <div key={icon.imageUrl} className="border rounded p-3">
                <div className="text-sm break-all">{icon.imageUrl}</div>
                <img src={icon.imageUrl} alt="icon" className="mt-2 max-h-24" />
              </div>
            ))}
          </div>
        </section>
      ) : null}
    </div>
  );
}
