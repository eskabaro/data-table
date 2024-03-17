import { FC, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { IEmployee, StatusEnum } from "@/store/slices/table/interfaces";
import { ReactComponent as Edit } from "@/assets/edit.svg";
import { ReactComponent as Delet } from "@/assets/delet.svg";
import { ReactComponent as Check } from "@/assets/check.svg";
import { Modal } from "@/ui/modal/Modal";
import { useAppDispatch } from "@/store/hooks";
import { remove, update } from "@/store/slices/table/table-slice";
import styles from "./Item.module.scss";
import cn from "classnames";

const statusColors: { [key in StatusEnum]: string } = {
    [StatusEnum.FREE]: "#0064FF",
    [StatusEnum.BUSY]: "#F63F3F",
    [StatusEnum.WORKIN]: "#404D61",
    [StatusEnum.ON_VACATION]: "#F9A348",
};

interface ITableItem extends IEmployee {
    isEvent: boolean;
}

interface IFormFields extends Omit<IEmployee, "id" | "email"> {}

export const TableItem: FC<ITableItem> = ({
    id,
    name,
    email,
    status,
    role,
    isEvent,
}) => {
    const [open, setOpen] = useState<boolean>(false);
    const [isReadonly, setIsReadonly] = useState<boolean>(true);
    const { register, handleSubmit, watch } = useForm<IFormFields>({
        reValidateMode: "onBlur",
        defaultValues: {
            name,
            status,
            role,
        },
    });

    const dispatch = useAppDispatch();

    const handleRemove = () => {
        dispatch(remove(id));
        setOpen(false);
    };

    const onSubmit: SubmitHandler<IFormFields> = (data: IFormFields) => {
        dispatch(update({ ...data, id, email }));
        setIsReadonly(true);
    };

    return (
        <tr
            className={cn(styles.wrapper, {
                [styles.event]: isEvent,
            })}
        >
            <td>
                <input
                    {...register("name", { required: true })}
                    readOnly={isReadonly}
                    className={cn({
                        [styles.active]: !isReadonly,
                    })}
                    type="text"
                />
            </td>
            <td>{email}</td>
            <td>
                <select
                    {...register("status", { required: true })}
                    defaultValue={status}
                    disabled={isReadonly}
                    style={{ color: statusColors[watch("status")] }}
                    className={cn({
                        [styles.active]: !isReadonly,
                    })}
                >
                    {Object.entries(StatusEnum).map(([key, value]) => (
                        <option
                            style={{ color: statusColors[value] }}
                            key={key}
                            value={value as string}
                        >
                            {value}
                        </option>
                    ))}
                </select>
            </td>
            <td>
                <input
                    type="text"
                    {...register("role", { required: true })}
                    readOnly={isReadonly}
                    className={cn({
                        [styles.active]: !isReadonly,
                    })}
                />

                <div className={styles.services}>
                    {isReadonly ? (
                        <button
                            title="Edit"
                            onClick={() => setIsReadonly(!isReadonly)}
                        >
                            <Edit width={16} height={16} />
                        </button>
                    ) : (
                        <button title="Save" onClick={handleSubmit(onSubmit)}>
                            <Check width={16} height={16} />
                        </button>
                    )}
                    <button title="Delete" onClick={() => setOpen(true)}>
                        <Delet width={16} height={16} />
                    </button>
                </div>

                <Modal isOpen={open} setIsOpen={setOpen}>
                    <p>You really want to remove the user {name}?</p>
                    <div className={styles["modal-btns-box"]}>
                        <button onClick={handleRemove}>Yes</button>
                        <button onClick={() => setOpen(false)}>Cancel</button>
                    </div>
                </Modal>
            </td>
        </tr>
    );
};
