export default function NotFound() {
  return (
    <div style={{ backgroundColor: "var(--off-white)", display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
      <div>
        <img
          className="bg-light img-fluid m-2"
          src="./assets/images/404.svg"
          alt="404"
        />
        <h1 className="text-center mt-3">Oops! Page not found</h1>
      </div>
    </div>
  );
}
