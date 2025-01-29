export interface SidebarItemProps {
  icon: string;
  text: string;
  path?: string;
  isActive?: boolean;
}

export interface FieldDataProps {
  name: string;
  location: string;
  size: string;
  cropType: string;
}

export interface SearchBarProps {
  placeholder: string;
  searchIcon: string;
}

export interface NavIconProps {
  image: string;
  altText: string;
  className?: string;
}

export interface SettingsItemProps {
  text: string;
  icon: string;
  iconAlt: string;
}

export interface ContactMethodProps {
  icon: string;
  title: string;
  description: string;
  hasArrow?: boolean;
}

export interface SettingsSectionProps {
  title: string;
  children: React.ReactNode;
}