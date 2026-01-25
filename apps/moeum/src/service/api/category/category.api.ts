import { api } from "@moeum/api";
import type { CategoryResponse, CategoryUpdateRequest, CategoryChangeRequest, CategoryCreateRequest } from "./category.type";

export const CategoryApi = {
    getCategoryTree: () => api.get<CategoryResponse[]>('/category'),

    getCategory: (id: number) => api.get<CategoryResponse>(`/category/${id}`),

    createCategory: (category: CategoryCreateRequest) => api.post<CategoryResponse>(`/category`, category),

    updateCategory: (id: number, category: CategoryUpdateRequest) => api.put<CategoryResponse>(`/category/${id}`, category),

    changeCategory: (id: number, category: CategoryChangeRequest) => api.patch<void>(`/category/${id}`, category)
}
