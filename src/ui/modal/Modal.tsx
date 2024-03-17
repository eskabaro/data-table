import { Dispatch, FC, PropsWithChildren, SetStateAction } from "react";
import styles from "./Modal.module.scss";
import cn from "classnames";

interface IModalProps extends PropsWithChildren<unknown> {
    isOpen: boolean;
    setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export const Modal: FC<IModalProps> = ({ isOpen, setIsOpen, children }) => {
    return (
        <div
            onClick={() => setIsOpen(false)}
            className={cn(styles.wrapper, {
                [styles.active]: isOpen,
            })}
        >
            <div
                onClick={(e) => e.stopPropagation()}
                className={cn(styles.wrapper_modal, {
                    [styles.active]: isOpen,
                })}
            >
                {children}
            </div>
        </div>
    );
};
