import { lazy } from "react";

export const PostPageAsync = lazy(() => new Promise((resolve) => {
    //@ts-ignore имитация долгой загрузки
    setTimeout(() => resolve(import('./PostPage')), 1500)
}))