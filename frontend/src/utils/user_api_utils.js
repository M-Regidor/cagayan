import { crsfFetch } from "./csrf";

export const postUser = user => (
    crsfFetch("/api/users", {
        method: "POST",
        body: JSON.stringify(user)
    })
)
