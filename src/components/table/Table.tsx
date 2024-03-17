import { FC, memo, useState } from "react";
import { useAppSelector } from "@/store/hooks";
import { TableItem } from "./table-item/Item";
import { SortButton } from "@/ui/sort-btn/Button";
import styles from "./Table.module.scss";

export const Table: FC = memo(() => {
    const { sortedTable } = useAppSelector((state) => state.table);

    const [activeButton, setActiveButton] = useState<string | null>(null);

    const handleSort = (title: string) => {
        setActiveButton(title === activeButton ? null : title);
    };

    return (
        <table className={styles.wrapper}>
            <thead className={styles.wrapper_head}>
                <tr>
                    <th>
                        <SortButton
                            title="Name"
                            isActive={activeButton === "Name"}
                            onClick={() => handleSort("Name")}
                        />
                    </th>
                    <th>Email</th>
                    <th>
                        <SortButton
                            title="Status"
                            isActive={activeButton === "Status"}
                            onClick={() => handleSort("Status")}
                        />
                    </th>
                    <th>
                        <SortButton
                            title="Role"
                            isActive={activeButton === "Role"}
                            onClick={() => handleSort("Role")}
                        />
                    </th>
                </tr>
            </thead>
            <tbody>
                {sortedTable.map((item, idx) => (
                    <TableItem
                        {...item}
                        key={item.id}
                        isEvent={idx % 2 === 0}
                    />
                ))}
            </tbody>
        </table>
    );
});
