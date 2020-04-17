import io from "socket.io-client";

export const socketService = {
  connect
};
//window.location.hostname
function connect() {
  return new Promise((resolve, reject) => {
    const socket = io(process.env.HOST, {
      query: { token: JSON.parse(localStorage.getItem("user")).token }
    });
    socket.on("connect", () => {
      resolve(socket);
    });
  });
}
