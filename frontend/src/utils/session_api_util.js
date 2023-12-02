import { crsfFetch } from "./csrf";

export const postSession = user => (
    crsfFetch("/api/session",{
        method: "POST",
        body: JSON.stringify(user)
    })
)

export const deleteSession = () => (
    crsfFetch("/api/session", {
        method: "DELETE"
    })
)