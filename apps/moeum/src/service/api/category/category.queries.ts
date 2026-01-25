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

export const useCreateCategory = () => {
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: (category: CategoryCreateRequest) => CategoryApi.createCategory(category),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['category-tree'] })
        }
    })
}

export const useUpdateCategory = (categoryId: number) => {
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: (category: CategoryUpdateRequest) => CategoryApi.updateCategory(categoryId, category),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['category'] })
            queryClient.invalidateQueries({ queryKey: ['category-tree'] })
        }
    })
}

export const useChangeCategory = (categoryId: number) => {
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: (category: CategoryChangeRequest) => CategoryApi.changeCategory(categoryId, category),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['category-tree'] })
        }
    })
}
