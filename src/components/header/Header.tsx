import { FC, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useAppDispatch } from "@/store/hooks";
import { search } from "@/store/slices/table/table-slice";
import { ReactComponent as Search } from "@/assets/search.svg";
import { ReactComponent as Cancel } from "@/assets/cancel.svg";
import { FormAddEmployee } from "./form-add-employee/From";
import { Modal } from "@/ui/modal/Modal";
import styles from "./Header.module.scss";

interface IFormFields {
    value: string;
}

export const Header: FC = () => {
    const [open, setOpen] = useState<boolean>(false);
    const dispatch = useAppDispatch();

    const { register, handleSubmit, watch, resetField } =
        useForm<IFormFields>();

    const onSubmit: SubmitHandler<IFormFields> = ({ value }) => {
        dispatch(search(value));
    };

    return (
        <>
            <header className={styles.wrapper}>
                <div className={styles.wrapper_head}>
                    <h1>Data Table</h1>
                </div>
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className={styles.wrapper_form}
                >
                    <Search style={{ minWidth: "24px" }} />
                    <input
                        {...register("value", {
                            pattern: /^\S.*$/,
                        })}
                        type="text"
                        placeholder="Search by name..."
                    />
                    {watch("value") && (
                        <Cancel
                            className={styles.cancel}
                            onClick={() => resetField("value")}
                        />
                    )}
                </form>
                <div className={styles["wrapper_btn-box"]}>
                    <button onClick={() => setOpen(!open)}>Add Employee</button>
                </div>
            </header>
            <Modal isOpen={open} setIsOpen={setOpen}>
                <FormAddEmployee setIsOpen={setOpen} />
            </Modal>
        </>
    );
};
