export type MenuProps = {
  selectedItem: string[];
  selectedID: string | null;
  drawerOpen: boolean;
  error: null;
  menuDashboard: NavItemType;
};

export type NavItemType = {
  id?: string;
  icon?: GenericCardProps['iconPrimary'];
  target?: boolean;
  external?: boolean;
  url?: string | undefined;
  type?: string;
  title?: string;
  color?: 'primary' | 'secondary' | 'default' | undefined;
  caption?: string;
  breadcrumbs?: boolean;
  disabled?: boolean;
  // chip?: ChipProps;
  children?: NavItemType[];
  elements?: NavItemType[];
  search?: string;
  permission?: Permissions | undefined;
};

export interface GenericCardProps {
  title?: string;
  primary?: string | number | undefined;
  secondary?: string;
  content?: string;
  image?: string;
  dateTime?: string;
  iconPrimary?: string; // for icon
  color?: string;
  size?: string;
}
