import { ReactNode } from 'react';
import { GenericCardProps } from './menu';

export type NavItemType = {
  id?: string;
  icon?: GenericCardProps['iconPrimary'];
  target?: boolean;
  external?: boolean;
  url?: string | undefined;
  type?: string;
  title?: ReactNode | string;
  color?: 'primary' | 'secondary' | 'default' | undefined;
  caption?: ReactNode | string;
  breadcrumbs?: boolean;
  disabled?: boolean;
  // chip?: ChipProps;
  children?: NavItemType[];
  elements?: NavItemType[];
  search?: string;
  permission?: Permissions | undefined;
};
