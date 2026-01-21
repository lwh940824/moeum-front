import type { YnType } from "@moeum/api";

export type CategoryType = "INCOME" | "EXPENSE";

export interface CategoryCreateRequest {
    parentCategoryId?: number;
    name: string;
    categoryType: CategoryType;
    imageUrl: string;
    useYn: string;
    investmentYn: string;
}

export interface CategoryUpdateRequest {
    parentCategoryId?: number;
    name?: string;
    categoryType?: CategoryType;
    imageUrl?: string;
}

export interface CategoryResponse {
    id: number;
    parentCategoryId?: number;
    name: string;
    categoryType: CategoryType;
    imageUrl: string;
    children: CategoryResponse[];
}

export interface CategoryChangeRequest {
    useYn: YnType;
}