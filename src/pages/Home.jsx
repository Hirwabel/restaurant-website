import React from "react";
import MenuItem from "../components/MenuItem";
import dishes from "../data/dishes";

export default function Home() {
  return (
    <div style={{ fontFamily: "'Open Sans', sans-serif", color: "#1d1d1d" }}>
      {/* Hero Section */}
      <div 
        style={{
          position: "relative",
          width: "100%",
          height: "500px",
          backgroundImage: "url('/images/restaurant.jpg')",
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
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          color: "#ffe066",
          textAlign: "center",
          padding: "20px"
        }}>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "3rem", color: "#ffe066" }}>
            🍴 My Restaurant
          </h1>
          <p style={{ fontSize: "1.3rem", margin: "10px 0", color: "#ffe066" }}>
            Fine dining & authentic flavors
          </p>
          <button style={{
            padding: "12px 25px",
            fontSize: "1rem",
            backgroundColor: "#e63946",
            color: "#fff",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            marginTop: "15px"
          }}>
            Reserve a Table
          </button>
        </div>
      </div>

      {/* Featured Section */}
      <div style={{ maxWidth: "1200px", margin: "0 auto 50px" }}>
        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "2.5rem", marginBottom: "20px" }}>
          Featured Dishes
        </h2>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
          {dishes.slice(0, 4).map((dish, index) => (
            <MenuItem 
              key={index}
              name={dish.name}
              description={dish.description}
              price={dish.price}
              image={dish.image}
            />
          ))}
        </div>
      </div>

      {/* Chef’s Special */}
      <div style={{ maxWidth: "1200px", margin: "0 auto 50px", display: "flex", gap: "30px", flexWrap: "wrap", alignItems: "center" }}>
        <div style={{ flex: "1 1 380px", minWidth: "280px" }}>
          <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.8rem", marginBottom: "12px", color: "#1d1d1d" }}>
            Chef's Special
          </h3>
          <p style={{ fontSize: "1rem", color: "#555", marginBottom: "15px" }}>
            Our chef has crafted a seasonal dish using the freshest ingredients:
            <strong> Truffle Pasta with Parmesan Cream</strong>. A true culinary experience.
          </p>
          <button style={{
            padding: "10px 20px",
            fontSize: "1rem",
            backgroundColor: "#e63946",
            color: "#fff",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer"
          }}>
            Order Now
          </button>
        </div>
        <div style={{ flex: "1 1 380px", minWidth: "280px" }}>
          <img src="/images/chef-special.jpg" alt="Chef Special" style={{ width: "100%", borderRadius: "12px" }} />
        </div>
      </div>

      {/* Menu Preview */}
      <div style={{ maxWidth: "1200px", margin: "0 auto 50px" }}>
        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "2.5rem", marginBottom: "20px" }}>
          Our Menu
        </h2>
        <div style={{ display: "flex", gap: "15px", marginBottom: "20px" }}>
          <button style={{ padding: "10px 20px", border: "1px solid #e63946", borderRadius: "6px", backgroundColor: "#fff", cursor: "pointer" }}>All</button>
          <button style={{ padding: "10px 20px", border: "1px solid #e63946", borderRadius: "6px", backgroundColor: "#fff", cursor: "pointer" }}>Pizza</button>
          <button style={{ padding: "10px 20px", border: "1px solid #e63946", borderRadius: "6px", backgroundColor: "#fff", cursor: "pointer" }}>Pasta</button>
          <button style={{ padding: "10px 20px", border: "1px solid #e63946", borderRadius: "6px", backgroundColor: "#fff", cursor: "pointer" }}>Salad</button>
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
          {dishes.slice(0, 6).map((dish, index) => (
            <MenuItem 
              key={index}
              name={dish.name}
              description={dish.description}
              price={dish.price}
              image={dish.image}
            />
          ))}
        </div>
      </div>

      {/* Testimonials */}
      <div style={{ maxWidth: "1200px", margin: "0 auto 50px", textAlign: "center" }}>
        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "2.5rem", marginBottom: "30px" }}>
          Testimonials
        </h2>
        <div style={{ display: "flex", gap: "30px", flexWrap: "wrap", justifyContent: "center" }}>
          <div style={{ flex: "1 1 300px", border: "1px solid #ddd", borderRadius: "12px", padding: "20px" }}>
            <p>"Best dining experience ever! Amazing flavors and service."</p>
            <strong>- John Doe</strong>
          </div>
          <div style={{ flex: "1 1 300px", border: "1px solid #ddd", borderRadius: "12px", padding: "20px" }}>
            <p>"I come here every week. The chef’s specials are out of this world!"</p>
            <strong>- Jane Smith</strong>
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div style={{
        width: "100%",
        backgroundColor: "#e63946",
        color: "#fff",
        textAlign: "center",
        padding: "40px 20px",
        borderRadius: "12px",
        marginBottom: "50px"
      }}>
        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "2rem", marginBottom: "15px" }}>
          Ready to Taste Excellence?
        </h2>
        <p style={{ fontSize: "1.2rem", marginBottom: "20px" }}>Book your table today and enjoy our fine dining experience.</p>
        <button style={{
          padding: "12px 25px",
          fontSize: "1rem",
          backgroundColor: "#fff",
          color: "#e63946",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer"
        }}>
          Reserve Now
        </button>
      </div>
    </div>
  );
}
