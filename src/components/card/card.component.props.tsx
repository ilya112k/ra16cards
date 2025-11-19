import {PropsWithChildren} from "react";

export type CardComponentProps = PropsWithChildren & {
    href: string,
    title: string,
    width: string,
    button: string,
    description: string,
}