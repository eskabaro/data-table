import { RootLayout } from "./layouts/root/Root";
import { Header } from "./components/header/Header";
import { SearchResult } from "./components/search-result/SearchResult";
import { Table } from "./components/table/Table";
import { useAppSelector } from "./store/hooks";
import { Cards } from "./components/cards/Cards";

export const App = () => {
    const { search } = useAppSelector((state) => state.table);

    return (
        <RootLayout>
            <Header />
            {search.value && <SearchResult {...search} />}
            <Cards />
            <Table />
        </RootLayout>
    );
};
