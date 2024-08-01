export interface SidebarItemType {
    path: string
    label: string
    Icon: React.FC<React.SVGProps<SVGElement>>
    ActiveIcon: React.FC<React.SVGProps<SVGElement>>
}