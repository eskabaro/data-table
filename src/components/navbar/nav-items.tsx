import { ReactElement } from "react";
import { ReactComponent as Search } from "@/assets/search.svg";
import { ReactComponent as DataTable } from "@/assets/data-table.svg";
import { ReactComponent as Product } from "@/assets/product.svg";
import { ReactComponent as Analytics } from "@/assets/analytics.svg";
import { ReactComponent as Calender } from "@/assets/calendar.svg";
import { ReactComponent as Messanger } from "@/assets/message.svg";
import { ReactComponent as Crypto } from "@/assets/crypto.svg";

export interface INavItem {
    title: string;
    icon: ReactElement;
    isActive?: boolean;
}

const size = { width: "17px", height: "17px" };

export const items: INavItem[] = [
    {
        title: "Search",
        icon: <Search style={size} />,
    },
    {
        title: "Data Table",
        icon: <DataTable style={size} />,
        isActive: true,
    },
    {
        title: "Product",
        icon: <Product style={size} />,
    },
    {
        title: "Analytics",
        icon: <Analytics style={size} />,
    },
    {
        title: "Calender",
        icon: <Calender style={size} />,
    },
    {
        title: "Messanger",
        icon: <Messanger style={size} />,
    },
    {
        title: "Crypto",
        icon: <Crypto style={size} />,
    },
];
