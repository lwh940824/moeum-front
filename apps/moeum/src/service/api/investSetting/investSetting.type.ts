import type { YnType } from "@moeum/api";
import type { CategoryResponse } from "../category/category.type";

export interface InvestSettingCreateRequest {
  categoryId: number;
}

export interface InvestSettingResponse {
  id: number;
  showYn: YnType;
  useYn: YnType;
  categoryResponseDto: CategoryResponse;
}
