import { io } from "socket.io-client";
import { BACKEND_URI } from "./helper";

const socket = io(BACKEND_URI);

socket.on('connect', () => {
    // console.log('Connected to Socket');
});

export default socket;