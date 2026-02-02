import { Button, Input, ToggleGroup, ToggleGroupItem } from "@moeum/ui";
import { useMemo, useState } from "react";
import { useQueryClient, useMutation } from "@tanstack/react-query";
import { CategoryApi } from "../../service/api/category";
import { useCreateCategory, useGetCategoryTree } from "../../service/api/category/category.queries";
import type { CategoryCreateRequest, CategoryResponse, CategoryType } from "../../service/api/category/category.type";
import type { YnType } from "@moeum/api";

const buildEmptyForm = () => ({
  name: "",
  categoryType: "EXPENSE" as CategoryType,
  imageUrl: "",
  parentCategoryId: "",
  investmentYn: "N" as YnType,
});

export default function Category() {
  const { data, isLoading } = useGetCategoryTree();
  const createCategory = useCreateCategory();
  const queryClient = useQueryClient();

  const [form, setForm] = useState(buildEmptyForm());

  const changeCategory = useMutation({
    mutationFn: (payload: { id: number; useYn: "Y" | "N" }) =>
      CategoryApi.changeCategory(payload.id, { useYn: payload.useYn }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["category-tree"] });
    },
  });

  const grouped = useMemo(() => {
    const income: CategoryResponse[] = [];
    const expense: CategoryResponse[] = [];

    (data ?? []).forEach((category) => {
      if (category.categoryType === "INCOME") {
        income.push(category);
      } else {
        expense.push(category);
      }
    });

    return { income, expense };
  }, [data]);

  const onSubmit = () => {
    if (!form.name.trim() || !form.imageUrl.trim()) return;

    const payload: CategoryCreateRequest = {
      name: form.name.trim(),
      imageUrl: form.imageUrl.trim(),
      categoryType: form.categoryType,
      investmentYn: form.investmentYn,
    };

    const parentId = Number(form.parentCategoryId);
    if (!Number.isNaN(parentId) && form.parentCategoryId.trim() !== "") {
      payload.parentCategoryId = parentId;
    }

    createCategory.mutate(payload, {
      onSuccess: () => setForm(buildEmptyForm()),
    });
  };

  const renderCategory = (category: CategoryResponse) => (
    <div key={category.id} className="border rounded p-3 flex flex-col gap-2">
      <div className="flex items-center justify-between">
        <div className="font-medium">{category.name}</div>
        <Button
          variant="ghost"
          className="border"
          onClick={() => changeCategory.mutate({ id: category.id, useYn: "N" })}
        >
          Deactivate
        </Button>
      </div>
      {category.children?.length ? (
        <div className="pl-4 flex flex-col gap-2">
          {category.children.map((child) => (
            <div key={child.id} className="border rounded p-2 flex items-center justify-between">
              <span>{child.name}</span>
              <Button
                variant="ghost"
                className="border"
                onClick={() => changeCategory.mutate({ id: child.id, useYn: "N" })}
              >
                Deactivate
              </Button>
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );

  return (
    <div className="w-full max-w-4xl flex flex-col gap-6">
      <section className="border rounded p-4 flex flex-col gap-3">
        <div className="text-lg font-semibold">Create Category</div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <Input
            placeholder="Name"
            value={form.name}
            onChange={(event) => setForm({ ...form, name: event.target.value })}
          />
          <Input
            placeholder="Image URL"
            value={form.imageUrl}
            onChange={(event) => setForm({ ...form, imageUrl: event.target.value })}
          />
          <Input
            placeholder="Parent Category Id (optional)"
            value={form.parentCategoryId}
            onChange={(event) =>
              setForm({ ...form, parentCategoryId: event.target.value })
            }
          />
          <ToggleGroup 
            type="single"
            onValueChange={(value) => setForm({ ...form, categoryType: value as CategoryType })}
          >
            <ToggleGroupItem value="INCOME">
              수입
            </ToggleGroupItem>
            <ToggleGroupItem value="EXPENSE">
              지출
            </ToggleGroupItem>
          </ToggleGroup>
          <Input 
            type="text"
            onChange={(event) => setForm({...form, investmentYn: event.target.value as YnType})}
          />
        </div>
        <Button onClick={onSubmit} disabled={createCategory.isPending}>
          Create
        </Button>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="border rounded p-4 flex flex-col gap-3">
          <div className="text-lg font-semibold">Income</div>
          {isLoading ? <div>Loading...</div> : grouped.income.map(renderCategory)}
        </div>
        <div className="border rounded p-4 flex flex-col gap-3">
          <div className="text-lg font-semibold">Expense</div>
          {isLoading ? <div>Loading...</div> : grouped.expense.map(renderCategory)}
        </div>
      </section>
    </div>
  );
}

