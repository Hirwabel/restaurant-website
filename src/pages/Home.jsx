import React, { useState } from "react";
import MenuItem from "../components/MenuItem";
import dishes from "../data/dishes";

export default function Home() {
  const [filter, setFilter] = useState("All");

  const featuredDishes = dishes.slice(0, 3); // first 3 dishes as featured
  const filteredDishes =
    filter === "All" ? dishes : dishes.filter(dish => dish.category === filter);

  return (
    <div
      style={{
        fontFamily: "'Open Sans', sans-serif",
        color: "#333",
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "20px",
      }}
    >
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
          marginBottom: "40px",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0,0,0,0.4)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            color: "#fff",
            textAlign: "center",
            padding: "20px",
          }}
        >
          <h1
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "3rem",
              color: "#fff",
              textShadow: "2px 2px 4px rgba(0,0,0,0.7)",
            }}
          >
            🍴 My Restaurant
          </h1>
          <p
            style={{
              fontFamily: "'Open Sans', sans-serif",
              fontSize: "1.3rem",
              margin: "10px 0",
              color: "#f1f1f1",
            }}
          >
            Fine dining & authentic flavors
          </p>
          <button
            style={{
              padding: "12px 25px",
              fontSize: "1rem",
              backgroundColor: "#e63946",
              color: "#fff",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              marginTop: "15px",
            }}
          >
            Reserve a Table
          </button>
        </div>
      </div>

      {/* FEATURED SECTION */}
<h2 
  style={{ 
    fontFamily: "'Playfair Display', serif", 
    fontSize: "2rem", 
    marginBottom: "20px", 
    textAlign: "center"  // 👈 centers the text
  }}
>
      
        ✨ Featured Dishes
      </h2>
      <div
        style={{
          display: "flex",
          overflowX: "auto",
          gap: "20px",
          paddingBottom: "20px",
          marginBottom: "40px",
        }}
      >
        {featuredDishes.map((dish, index) => (
          <div
            key={index}
            style={{
              minWidth: "300px",
              borderRadius: "12px",
              overflow: "hidden",
              border: "1px solid #ddd",
              backgroundColor: "#fff",
              boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
            }}
          >
            <img
              src={dish.image}
              alt={dish.name}
              style={{ width: "100%", height: "220px", objectFit: "cover" }}
            />
            <div style={{ padding: "15px", textAlign: "center" }}>
              <h4
                style={{
                  margin: 0,
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "1.2rem",
                }}
              >
                {dish.name}
              </h4>
              <p style={{ fontSize: "0.9rem", color: "#555" }}>
                {dish.description}
              </p>
              <strong style={{ color: "#e63946" }}>${dish.price}</strong>
            </div>
          </div>
        ))}
      </div>

      {/* MENU PREVIEW SECTION */}
<h2 
  style={{ 
    fontFamily: "'Playfair Display', serif", 
    fontSize: "2rem", 
    marginBottom: "15px", 
    textAlign: "center"   // centers the heading
  }}
>
  📋 Our Menu
</h2>

<div style={{ marginBottom: "20px", textAlign: "center" }}> {/* centers the buttons */}
  {["All", "Pizza", "Pasta", "Salad"].map(category => (
    <button
      key={category}
      onClick={() => setFilter(category)}
      style={{
        margin: "0 8px",
        padding: "8px 15px",
        borderRadius: "8px",
        border: filter === category ? "2px solid #e63946" : "1px solid #ccc",
        backgroundColor: filter === category ? "#e63946" : "#fff",
        color: filter === category ? "#fff" : "#333",
        cursor: "pointer",
        transition: "all 0.3s",  // smooth hover transition
      }}
      onMouseEnter={e => {
        e.target.style.backgroundColor = filter === category ? "#e63946" : "#f0f0f0";
        e.target.style.transform = "scale(1.05)";
      }}
      onMouseLeave={e => {
        e.target.style.backgroundColor = filter === category ? "#e63946" : "#fff";
        e.target.style.transform = "scale(1)";
      }}
    >
      {category}
    </button>
  ))}
</div>

<div style={{ display: "flex", flexWrap: "wrap", gap: "20px", justifyContent: "center" }}>
  {filteredDishes.map((dish, index) => (
    <div key={index} className="menu-card" style={{
      flex: "1 1 250px",
      borderRadius: "12px",
      overflow: "hidden",
      border: "1px solid #ddd",
      transition: "transform 0.3s",
      cursor: "pointer"
    }}>
      <img src={dish.image} alt={dish.name} style={{ width: "100%", height: "180px", objectFit: "cover" }} />
      <div style={{ padding: "10px" }}>
        <h4 style={{ margin: "0 0 5px 0", fontFamily: "'Playfair Display', serif" }}>{dish.name}</h4>
        <p style={{ margin: "0 0 5px 0", color: "#555", fontSize: "0.9rem" }}>{dish.description}</p>
        <strong>${dish.price}</strong>
      </div>
    </div>
  ))}
</div>

      {/* CHEF'S SPECIAL */}
<h2 
  style={{ 
    fontFamily: "'Playfair Display', serif", 
    fontSize: "2rem", 
    margin: "40px 0 20px 0", 
    textAlign: "center"  // 👈 centers the text
  }}
>
  👨‍🍳 Chef's Special
</h2>
      <div
        style={{
          display: "flex",
          gap: "30px",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        <div style={{ flex: "1 1 380px", minWidth: "280px" }}>
          <h3
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "1.8rem",
              marginBottom: "12px",
              color: "#1d1d1d",
            }}
          >
            Truffle Pasta
          </h3>
          <p style={{ color: "#555", marginBottom: "15px" }}>
            Our chef has crafted a seasonal dish using the freshest ingredients:{" "}
            <strong>Truffle Pasta with Parmesan Cream</strong>. A true culinary
            experience.
          </p>
          <button
            style={{
              padding: "10px 20px",
              fontSize: "1rem",
              backgroundColor: "#e63946",
              color: "#fff",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
            }}
          >
            Order Now
          </button>
        </div>
       <div style={{ flex: "1 1 380px", minWidth: "280px", display: "flex", justifyContent: "center" }}>
  <img 
    src="/images/truffle-pasta.jpg" 
    alt="Chef Special" 
    style={{ 
      width: "100%", 
      maxWidth: "420px",   // 👈 limits the size
      borderRadius: "12px", 
      boxShadow: "0 4px 12px rgba(0,0,0,0.15)", 
      objectFit: "cover" 
    }} 
  />
</div>

      </div>

      {/* TESTIMONIALS */}
<h2 
  style={{ 
    fontFamily: "'Playfair Display', serif", 
    fontSize: "2rem", 
    margin: "40px 0 20px 0", 
    textAlign: "center"   // 👈 centers the heading
  }}
>
  💬 Testimonials
</h2>
      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        <div
          style={{
            flex: "1 1 280px",
            padding: "15px",
            borderRadius: "12px",
            backgroundColor: "#f9f9f9",
          }}
        >
          <p>"Best dining experience I've ever had! Highly recommend."</p>
          <strong>- Sarah K.</strong>
        </div>
        <div
          style={{
            flex: "1 1 280px",
            padding: "15px",
            borderRadius: "12px",
            backgroundColor: "#f9f9f9",
          }}
        >
          <p>"Amazing flavors and cozy ambiance. Will come again!"</p>
          <strong>- John D.</strong>
        </div>
      </div>
    </div>
  );
}
