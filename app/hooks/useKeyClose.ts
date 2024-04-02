import { useEffect } from "react";

export const useKeyEscClose = (closeThing : any) => {
    useEffect(() => {
        const escKeyModalClose = (e : KeyboardEvent) => {
            const key = e.key || e.keyCode;
            if (key === 'Escape' || key === 27) {
                closeThing();
            }
        };
        window.addEventListener("keydown", escKeyModalClose);
        return () => window.removeEventListener("keydown", escKeyModalClose);
    }, []);
};