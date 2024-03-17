import { FC } from "react";
import { items } from "./nav-items";
import { NavItem } from "./nav-item/NavItem";
import { ReactComponent as ReactLogo } from "@/assets/settings.svg";
import { ReactComponent as Support } from "@/assets/support.svg";
import { ReactComponent as SignOut } from "@/assets/sign-out.svg";
import styles from "./Navbar.module.scss";

export const Navbar: FC = () => {
    return (
        <aside className={styles.wrapper}>
            <div className={styles.wrapper_user}>
                <img src="/user.png" width={40} height={40} alt="avatar" />
                <div className={styles.wrapper_user_head}>
                    <span>Welcome back,</span>
                    <h1>Drax</h1>
                </div>
                <button>
                    <ReactLogo />
                </button>
            </div>
            <nav className={styles.wrapper_navigation}>
                <ul>
                    {items.map((item) => (
                        <li key={item.title}>
                            <NavItem {...item} />
                        </li>
                    ))}
                </ul>
            </nav>
            <div className={styles.wrapper_services}>
                <button>
                    <Support style={{ width: "17px", height: "17px" }} />
                    Support
                </button>
                <button>
                    <SignOut style={{ width: "17px", height: "17px" }} />
                    Sign Out
                </button>
            </div>
        </aside>
    );
};
