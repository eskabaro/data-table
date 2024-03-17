import { FC } from "react";
import { SearchType } from "@/store/slices/table/interfaces";
import styles from "./SearchResult.module.scss";

interface ISearchResultProps extends SearchType {}

export const SearchResult: FC<ISearchResultProps> = ({ value, quantity }) => {
    return (
        <div className={styles.wrapper}>
            <h2>{value}</h2>
            <span>{quantity} results found</span>
        </div>
    );
};
