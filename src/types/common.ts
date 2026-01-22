import { ReactNode } from 'react';

export type Size = 'small' | 'medium' | 'large';
export type Severity = 'info' | 'success' | 'warning' | 'error';
export type ThemeMode = 'light' | 'dark' | 'system';

export interface BaseComponentProps {
  className?: string;
  children?: ReactNode;
  id?: string;
}

export interface PaginationParams {
  page: number;
  pageSize: number;
  total: number;
}

export interface SortParams<T> {
  field: keyof T;
  direction: 'asc' | 'desc';
}
