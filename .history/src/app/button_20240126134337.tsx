import { css,cva } from "../../styled-system/css"

export const button = cva({
    base: {
        display: "flex",
        borderWidth: "1px",
        borderColor: "gray",
    },
    variants: {
    type: {
        default: { color: "gray" },
        danger: { color: "red", borderColor: "red" },
    },
    size: {
        small: { padding: "8px", fontSize: "12px" },
        large: { padding: "16px", fontSize: "16px" },
    },
    },
    defaultVariants: {
        type: "default",
        size: "small",
    },
});