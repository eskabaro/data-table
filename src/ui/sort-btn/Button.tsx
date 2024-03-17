import { FC } from "react";
import { useAppDispatch } from "@/store/hooks";
import { EmployeeWithoutIdEmailType } from "@/store/slices/table/interfaces";
import { sort } from "@/store/slices/table/table-slice";
import { ReactComponent as Arrow } from "@/assets/arrow-down.svg";
import styles from "./Button.module.scss";
import cn from "classnames";

interface ISortButtonProps {
    title: string;
    isActive: boolean;
    onClick: () => void;
}

export const SortButton: FC<ISortButtonProps> = ({
    title,
    onClick,
    isActive,
}) => {
    const dispatch = useAppDispatch();

    const handleSort = () => {
        dispatch(
            sort({
                value: isActive,
                field: title.toLocaleLowerCase() as EmployeeWithoutIdEmailType,
            })
        );
        onClick();
    };

    return (
        <button
            onClick={handleSort}
            className={cn(styles.button, {
                [styles.active]: isActive,
            })}
        >
            {title}
            <Arrow width={12} height={12} />
        </button>
    );
};
