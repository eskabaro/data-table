import { Dispatch, FC, SetStateAction } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useAppDispatch } from "@/store/hooks";
import { create } from "@/store/slices/table/table-slice";
import styles from "./Form.module.scss";
import cn from "classnames";

interface IFormAddEmployeeProps {
    setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export interface IFormFields {
    name: string;
    email: string;
    role: string;
}

export const FormAddEmployee: FC<IFormAddEmployeeProps> = ({ setIsOpen }) => {
    const dispatch = useAppDispatch();
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<IFormFields>({
        reValidateMode: "onBlur",
    });

    const onSubmit: SubmitHandler<IFormFields> = (data) => {
        dispatch(create(data));
        setIsOpen(false);
        reset();
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={styles.wrapper}>
            <h1>Add New Employee</h1>
            <div
                className={cn(styles.wrapper_field, {
                    [styles.error]: errors.name,
                })}
            >
                <label>Name:</label>
                <input
                    type="text"
                    {...register("name", {
                        required: true,
                    })}
                />
            </div>
            <div
                className={cn(styles.wrapper_field, {
                    [styles.error]: errors.email,
                })}
            >
                <label>Email:</label>
                <input
                    type="email"
                    {...register("email", {
                        required: true,
                        pattern: {
                            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                            message: "Incorrectly entered email",
                        },
                    })}
                />
            </div>
            <div
                className={cn(styles.wrapper_field, {
                    [styles.error]: errors.role,
                })}
            >
                <label>Role:</label>
                <input
                    type="text"
                    {...register("role", {
                        required: true,
                    })}
                />
            </div>

            <button type="submit">Add Employee</button>
        </form>
    );
};
