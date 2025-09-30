import { useState } from "react";
import MenuItem from "../components/MenuItem";
import dishes from "../data/dishes";

export default function Menu() {
  const [filter, setFilter] = useState("All");

  const categories = ["All", "Pizza", "Pasta", "Salad"];

  // Filter dishes based on category
  const filteredDishes = filter === "All"
    ? dishes
    : dishes.filter(dish => dish.category === filter);

  return (
    <div className="container" style={{ maxWidth: "1200px", margin: "0 auto", padding: "20px" }}>

      {/* MENU HERO */}
      <div 
        style={{
          position: "relative",
          width: "100%",
          height: "250px",
          backgroundImage: "url('/images/menu-hero.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderRadius: "12px",
          marginBottom: "30px"
        }}
      >
        <div style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.2))",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "#fff",
          textAlign: "center",
          padding: "20px"
        }}>
          <h1 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "2.5rem",
            textShadow: "2px 2px 5px rgba(0,0,0,0.7)"
          }}>
            🍽️ Our Menu
          </h1>
        </div>
      </div>

      {/* CATEGORY FILTER */}
      <div style={{ display: "flex", justifyContent: "center", gap: "15px", marginBottom: "30px", zIndex: 1, position: "relative" }}>
        {categories.map((cat, index) => (
          <button
            key={index}
            onClick={() => setFilter(cat)}
            style={{
              padding: "10px 20px",
              fontFamily: "'Open Sans', sans-serif",
              backgroundColor: filter === cat ? "#ff6b6b" : "#f0f0f0",
              color: filter === cat ? "#fff" : "#333",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              transition: "0.3s"
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* DISHES GRID */}
      <div style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: "25px",
        marginTop: "20px" // Added margin to separate from filter buttons
      }}>
        {filteredDishes.map((dish, index) => (
          <MenuItem
            key={index}
            name={dish.name}
            description={dish.description}
            price={dish.price}
            image={dish.image}
          />
        ))}
      </div>

      {/* CALL TO ACTION */}
      <div style={{
        marginTop: "50px",
        textAlign: "center",
        padding: "30px",
        backgroundColor: "#ffeaea",
        borderRadius: "12px"
      }}>
        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "2rem", marginBottom: "15px" }}>
          Enjoy Our Delicious Dishes Today!
        </h2>
        <p style={{ fontFamily: "'Open Sans', sans-serif", fontSize: "1.1rem", marginBottom: "20px", color: "#555" }}>
          Book a table or order online and savor the flavors from the comfort of your home.
        </p>
        <button style={{
          padding: "12px 25px",
          fontSize: "1rem",
          backgroundColor: "#ff6b6b",
          color: "#fff",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          fontFamily: "'Open Sans', sans-serif",
          boxShadow: "0 4px 6px rgba(0,0,0,0.3)"
        }}>
          Reserve Now
        </button>
      </div>

    </div>
  );
}
