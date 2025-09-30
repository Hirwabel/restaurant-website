import MenuItem from "../components/MenuItem"; // your MenuItem component
import dishes from "../data/dishes"; // your dishes array

export default function Home() {
  return (
    <div className="container" style={{ maxWidth: "1200px", margin: "0 auto", padding: "20px" }}>

      {/* HERO SECTION */}
      <div 
        style={{
          position: "relative",
          width: "100%",
          height: "500px",
          backgroundImage: "url('/images/restaurant.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderRadius: "12px",
          marginBottom: "30px",
          overflow: "hidden"
        }}
      >
        {/* Gradient overlay for better contrast */}
        <div style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.3))",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          padding: "20px"
        }}>
          <h1 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "3rem",
            margin: 0,
            color: "#fff", // bright white heading
            textShadow: "2px 2px 5px rgba(0,0,0,0.7)"
          }}>
            🍴 My Restaurant
          </h1>
          <p style={{
            fontFamily: "'Open Sans', sans-serif",
            fontSize: "1.3rem",
            margin: "10px 0",
            color: "#fff", // bright white paragraph
            textShadow: "1px 1px 4px rgba(0,0,0,0.7)"
          }}>
            Fine dining & authentic flavors
          </p>
          <button style={{
            padding: "12px 25px",
            fontSize: "1rem",
            backgroundColor: "#ff6b6b",
            color: "#fff",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            marginTop: "15px",
            fontFamily: "'Open Sans', sans-serif",
            boxShadow: "0 4px 6px rgba(0,0,0,0.3)"
          }}>
            Reserve a Table
          </button>
        </div>
      </div>

      {/* WELCOME SECTION */}
      <section style={{ marginBottom: "40px", textAlign: "center" }}>
        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "2rem", color: "#1d1d1d" }}>
          Welcome to Our Restaurant
        </h2>
        <p style={{ fontFamily: "'Open Sans', sans-serif", fontSize: "1.1rem", lineHeight: "1.6", marginTop: "10px", color: "#555" }}>
          Experience the finest dishes made with fresh ingredients and passion. Explore our menu and discover your new favorite dish.
        </p>
      </section>

      {/* FEATURED DISHES */}
      <section>
        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "2rem", marginBottom: "20px", textAlign: "center", color: "#1d1d1d" }}>
          Featured Dishes
        </h2>
        <div style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "25px"
        }}>
          {dishes.map((dish, index) => (
            <MenuItem 
              key={index}
              name={dish.name}
              description={dish.description}
              price={dish.price}
              image={dish.image}
            />
          ))}
        </div>
      </section>

    </div>
  );
}
