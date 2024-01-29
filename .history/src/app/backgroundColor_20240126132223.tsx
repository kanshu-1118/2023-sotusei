import { css,cva } from "../../styled-system/css"

export const backgroundColor = cva({
    base: {
        fontWeight: "bold",
        fontSize: "2xl",
    },
    variants: {
        color: {
        gray: { bgColor: "gray.200" },
        red: { bgColor: "red.200" },
    },
    },
})