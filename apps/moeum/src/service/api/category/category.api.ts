import { api } from "@moeum/api";
import type { CategoryResponse, CategoryUpdateRequest, CategoryChangeRequest, CategoryCreateRequest } from "./category.type";
import { categoryResponseSchema } from "./category.zod";

export const CategoryApi = {
    getCategoryTree: () => api.get<CategoryResponse[]>('/category', {
        schema: categoryResponseSchema.array()
    }),

    getCategory: (id: number) => api.get<CategoryResponse>(`/category/${id}`, {
        schema: categoryResponseSchema
    }),

    createCategory: (category: CategoryCreateRequest) => api.post<CategoryResponse>(`/category`, category, {
        schema: categoryResponseSchema
    }),

    updateCategory: (id: number, category: CategoryUpdateRequest) => api.put<CategoryResponse>(`/category/${id}`, category, {
        schema: categoryResponseSchema
    }),

    changeCategory: (id: number, category: CategoryChangeRequest) => api.put<CategoryResponse>(`/category/${id}`, category, {
        schema: categoryResponseSchema
    })
}