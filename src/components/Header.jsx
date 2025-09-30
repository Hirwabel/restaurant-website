export default function Header() {
  return (
    <header style={{
      padding: "25px 20px",
      backgroundColor: "#e63946", // tomato red
      color: "#fff",
      textAlign: "center",
      boxShadow: "0 2px 6px rgba(0,0,0,0.2)"
    }}>
      <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "2.5rem", margin: 0 }}>
        🍴 My Restaurant
      </h1>
      <p style={{ fontFamily: "'Open Sans', sans-serif", marginTop: "5px", fontSize: "1.1rem" }}>
        Fine dining & authentic flavors
      </p>
    </header>
  );
}
