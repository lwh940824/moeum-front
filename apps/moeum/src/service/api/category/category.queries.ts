import { CategoryApi } from "./category.api"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import type { CategoryChangeRequest, CategoryCreateRequest, CategoryUpdateRequest } from "./category.type"

export const useGetCategoryTree = () => {
    return useQuery({
        queryKey: ['category-tree'],
        queryFn: () => CategoryApi.getCategoryTree()
    })
}

export const useGetCategory = (id: number) => {
    return useQuery({
        queryKey: ['category', id],
        queryFn: () => CategoryApi.getCategory(id),
        enabled: !!id,
    })
}

export const useCreateCategory = (categoryId: number) => {
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: (category: CategoryCreateRequest) => CategoryApi.createCategory(categoryId, category),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['category'] })
        }
    })
}

export const useUpdateCategory = (categoryId: number) => {
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: (category: CategoryUpdateRequest) => CategoryApi.updateCategory(categoryId, category),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['category'] })
        }
    })
}

export const useChangeCategory = (categoryId: number) => {
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: (category: CategoryChangeRequest) => CategoryApi.changeCategory(categoryId, category),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['category'] })
        }
    })
}