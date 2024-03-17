import { FC } from "react";
import { INavItem } from "../nav-items";
import { ReactComponent as Menu } from "@/assets/menu.svg";
import styles from "./NavItem.module.scss";
import cn from "classnames";

interface INavItemProps extends INavItem {}

export const NavItem: FC<INavItemProps> = ({ title, icon, isActive }) => {
    return (
        <a
            href="/"
            className={cn(styles.wrapper, {
                [styles.active]: isActive,
            })}
        >
            {icon}
            <span>{title}</span>
            <Menu className={styles.wrapper_icon} />
        </a>
    );
};
