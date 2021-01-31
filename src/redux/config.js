let url;

if (process.env.NODE_ENV === "development") {
  url = "http://localhost:8000";
} else if (process.env.NODE_ENV === "production") {
  url = "https://egbin-api.herokuapp.com";
}
const token = `Bearer ${localStorage.getItem("key")}`;

export { url, token };
