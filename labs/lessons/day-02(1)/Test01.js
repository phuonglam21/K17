const INFORMATIONAL_MIN = 100;
const INFORMATIONAL_MAX = 200;

const SUCCESS_MIN = 200;
const SUCCESS_MAX = 300;

const REDIRECTION_MIN = 300;
const REDIRECTION_MAX = 400;

const CLIENT_ERROR_MIN = 400;
const CLIENT_ERROR_MAX = 500;

const SERVER_ERROR_MIN = 500;
const SERVER_ERROR_MAX = 600;

const statusCode = 201;

if (statusCode >= INFORMATIONAL_MIN && statusCode < INFORMATIONAL_MAX) {
    console.log("Mã trạng thái thông tin (Informational)");
} else if (statusCode >= SUCCESS_MIN && statusCode < SUCCESS_MAX) {
    console.log("Mã trạng thái thành công (Success)");
} else if (statusCode >= REDIRECTION_MIN && statusCode < REDIRECTION_MAX) {
    console.log("Mã chuyển hướng (Redirection)");
} else if (statusCode >= CLIENT_ERROR_MIN && statusCode < CLIENT_ERROR_MAX) {
    console.log("Lỗi từ phía Client (Client Errors)");
} else if (statusCode >= SERVER_ERROR_MIN && statusCode < SERVER_ERROR_MAX) {
    console.log("Lỗi từ phía Server (Server Errors)");
} else {
    console.log("Status code không hợp lệ");
}
