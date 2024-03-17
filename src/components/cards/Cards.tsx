import { FC } from "react";
import { ReactComponent as Arrow } from "@/assets/arrow-down.svg";
import { items } from "./card-items";
import styles from "./Cards.module.scss";

export const Cards: FC = () => {
    return (
        <div className={styles.wrapper}>
            {items.map((item) => (
                <div className={styles.wrapper_item} key={item.title}>
                    <h2>
                        {item.title}
                        <Arrow width={18} height={18} fill={item.color} />
                    </h2>
                    <span>{item.sum}</span>
                </div>
            ))}
        </div>
    );
};
