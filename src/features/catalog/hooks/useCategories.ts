import { useQuery } from '@tanstack/react-query';
import { catalogApi } from '../api/catalog.api';

export const catalogKeys = {
  list: (parentId: string | null) => ['catalog', 'list', parentId] as const,
  one: (id: string) => ['catalog', 'one', id] as const,
};
export const useCategories = (parentId: string | null) =>
  useQuery({ queryKey: catalogKeys.list(parentId), queryFn: () => catalogApi.list(parentId) });
export const useCategory = (id: string) =>
  useQuery({ queryKey: catalogKeys.one(id), queryFn: () => catalogApi.byId(id) });
