export interface ItemMenu {
  label: string;
  icon?: string;
  link?: string;
  items?: ItemMenu[];
  admin?: boolean;
}
