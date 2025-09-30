export default function About() {
  return (
    <div className="container" style={{ maxWidth: "1200px", margin: "0 auto", padding: "20px" }}>
      <h1>About Us</h1>
      <p style={{ fontSize: "1.1rem", lineHeight: "1.6", marginTop: "15px" }}>
        We are passionate about bringing authentic flavors and a memorable dining experience.
      </p>
      <div style={{ marginTop: "20px" }}>
        <img 
          src="/images/chef.jpg" 
          alt="Chef at work" 
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
