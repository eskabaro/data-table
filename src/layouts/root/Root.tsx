import { FC, PropsWithChildren } from "react";
import { Navbar } from "@/components/navbar/Navbar";
import styels from "./Root.module.scss";

export const RootLayout: FC<PropsWithChildren<unknown>> = ({ children }) => {
    return (
        <div className={styels.wrapper}>
            <Navbar />
            <main>{children}</main>
        </div>
    );
};
