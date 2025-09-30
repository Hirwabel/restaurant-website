export default function Contact() {
  return (
    <div className="container" style={{ maxWidth: "1200px", margin: "0 auto", padding: "20px" }}>
      <h1>Contact Us</h1>
      <p style={{ fontSize: "1.1rem", lineHeight: "1.6", marginTop: "15px" }}>
        Have questions or want to book a table? Reach out to us via phone or email.
      </p>

      <div style={{ marginTop: "20px" }}>
        <p><strong>Phone:</strong> +1 234 567 890</p>
        <p><strong>Email:</strong> contact@myrestaurant.com</p>
        <p><strong>Address:</strong> 123 Main Street, Food City</p>
      </div>

      <div style={{ marginTop: "20px" }}>
        <img 
          src="/images/restaurant-front.jpg" 
          alt="Restaurant front" 
          style={{ 
            width: "100%", 
            height: "400px", 
            objectFit: "cover", 
            borderRadius: "12px", 
            boxShadow: "0 4px 12px rgba(0,0,0,0.2)" 
          }}
        />
      </div>
    </div>
  );
}
