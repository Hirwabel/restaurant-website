import { useState } from "react";
import MenuItem from "../components/MenuItem";
import dishes from "../data/dishes";

export default function Menu() {
  const [filter, setFilter] = useState("All");

  const categories = [
    "All",
    "Appetizers",
    "Starters",
    "Main Courses",
    "Pasta",
    "Pizza",
    "Salads",
    "Desserts",
    "Beverages",
    "Wine List"
  ];

  const filteredDishes =
    filter === "All"
      ? dishes
      : dishes.filter(dish => dish.category === filter);

  // Featured / Chef's Picks
  const featuredDishes = dishes.filter(dish => dish.isFeatured).slice(0, 3);

  return (
    <div style={{ fontFamily: "'Open Sans', sans-serif", maxWidth: "1200px", margin: "0 auto", padding: "20px" }}>

      {/* HERO SECTION */}
      <div 
        style={{
          position: "relative",
          width: "100%",
          height: "300px",
          backgroundImage: "url('/images/menu-hero.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderRadius: "12px",
          marginBottom: "40px"
        }}
      >
        <div style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "rgba(0,0,0,0.4)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          color: "#fff",
          padding: "20px"
        }}>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "3rem", marginBottom: "10px" }}>🍽️ Our Menu</h1>
          <p style={{ fontSize: "1.2rem", color: "#fff" }}>Exquisite dishes crafted with passion and precision</p>
        </div>
      </div>

      {/* CATEGORY FILTER */}
      
<div 
  style={{ 
    display: "flex", 
    justifyContent: "center", 
    flexWrap: "wrap", 
    gap: "12px", 
    marginBottom: "40px",
    marginTop: "55px" // ✅ added top margin to create space from hero
  }}
>
  {categories.map((cat, index) => (
    <button
      key={index}
      onClick={() => setFilter(cat)}
      style={{
        padding: "10px 20px",
        fontFamily: "'Open Sans', sans-serif",
        backgroundColor: filter === cat ? "#e63946" : "#f0f0f0",
        color: filter === cat ? "#fff" : "#333",
        border: "none",
        borderRadius: "8px",
        cursor: "pointer",
        transition: "0.3s",
        boxShadow: filter === cat ? "0 4px 6px rgba(0,0,0,0.3)" : "none"
      }}
    >
      {cat}
    </button>
  ))}
</div>

      {/* FEATURED / CHEF'S PICKS */}
      <h2 style={{ textAlign: "center", fontFamily: "'Playfair Display', serif", fontSize: "2rem", marginBottom: "20px" }}>✨ Featured Dishes</h2>
      <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "20px", marginBottom: "50px" }}>
        {featuredDishes.map((dish, index) => (
          <div key={index} style={{ minWidth: "300px", position: "relative", borderRadius: "12px", overflow: "hidden", boxShadow: "0 4px 8px rgba(0,0,0,0.2)" }}>
            <img src={dish.image} alt={dish.name} style={{ width: "100%", height: "220px", objectFit: "cover" }} />
            <div style={{ position: "absolute", bottom: "10px", left: "50%", transform: "translateX(-50%)", backgroundColor: "rgba(255,255,255,0.85)", padding: "8px 12px", borderRadius: "8px", textAlign: "center" }}>
              <h4 style={{ margin: 0, fontFamily: "'Playfair Display', serif'" }}>{dish.name}</h4>
              <span style={{ fontSize: "0.85rem", backgroundColor: "#e63946", padding: "2px 6px", borderRadius: "6px", marginTop: "4px", display: "inline-block" }}>Chef’s Special</span>
            </div>
          </div>
        ))}
      </div>

      {/* MENU GRID */}
      <h2 style={{ textAlign: "center", fontFamily: "'Playfair Display', serif", fontSize: "2rem", marginBottom: "20px" }}>📋 Our Menu</h2>
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "25px", marginBottom: "50px" }}>
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

      {/* SEASONAL / TASTING MENU */}
      <div style={{ textAlign: "center", marginBottom: "50px" }}>
        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "2rem", marginBottom: "15px" }}>🍴 Seasonal & Tasting Menu</h2>
        <p style={{ fontSize: "1.1rem", color: "#555", maxWidth: "800px", margin: "0 auto" }}>
          Explore our chef’s seasonal creations, carefully crafted to offer an exquisite culinary journey. Pricing varies per menu.
        </p>
      </div>

      {/* CALL TO ACTION */}
      <div style={{ textAlign: "center", padding: "40px", backgroundColor: "#ffeaea", borderRadius: "12px" }}>
        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "2rem", marginBottom: "15px" }}>Reserve Your Table Today!</h2>
        <p style={{ fontSize: "1.1rem", marginBottom: "20px", color: "#555" }}>Book a table or order online and savor our delicious dishes.</p>
        <button style={{
          padding: "12px 25px",
          fontSize: "1rem",
          backgroundColor: "#e63946",
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
