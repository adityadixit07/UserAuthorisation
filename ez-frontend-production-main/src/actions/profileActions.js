import { MAIN_URI } from "../services/helper";

export const usernameUpdate = (username) => async () => {
    try {
        const CustomHeader = new Headers();
        CustomHeader.append("Content-Type", "application/json");
        CustomHeader.append(
            "ez_token",
            JSON.parse(localStorage.getItem("auth_token"))
        );

        const config = {
            method: "POST",
            headers: CustomHeader,
            body: JSON.stringify({ username }),
            redirect: "follow",
        };

        return fetch(`${MAIN_URI}/checkusername`, config)
            .then((response) => response.json())
            .then((result) => {
                return Promise.resolve(result);
            })
            .catch((error) => {
                return Promise.reject(error);
            });
    } catch (error) {
        return error.message;
    }
};

// const handleUsernameAPI = (username) => {
//     if (username.length < 6) {
//         return toast.error("Username must be atleast 6 characters long!");
//     }
//     setLoading(true);
//     dispatch(usernameUpdate(username))
//         .then((response) => {
//             if (response.success) {
//                 toast.success(response.message);
//             }
//             if (!response.success) {
//                 toast.error(response.message);
//             }
//         })
//         .catch((error) => {
//             toast.error(error);
//         })
//         .finally(() => {
//             setLoading(false);
//         });
// };