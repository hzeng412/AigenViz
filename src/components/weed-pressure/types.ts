export interface WeedTypeCardProps {
  name: string;
  description: string;
  imageSrc: string;
  isLast?: boolean;
}

export interface LegendItemProps {
  color: string;
  text: string;
}

export interface FieldSelectorProps {
  // 如果需要添加属性
}

/* eslint-disable @typescript-eslint/no-empty-interface */
export interface YourInterfaceName {
  // 如果真的需要空接口，添加注释说明原因
  id?: string;
}
/* eslint-enable @typescript-eslint/no-empty-interface */