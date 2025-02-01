export interface SettingItemProps {
    title: string;
    icon?: string;
    description?: string;
    onClick?: () => void;
  }
  
  export interface SettingSectionProps {
    title: string;
    items: SettingItemProps[];
  }
  
  export interface ContactMethodProps {
    icon: string;
    text: string;
    link?: string;
  }