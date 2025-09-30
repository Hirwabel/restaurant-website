export default function MenuItem({ name, description, price, image }) {
  return (
    <div style={{
      border: "1px solid #ddd",
      borderRadius: "8px",
      padding: "15px",
      width: "250px",          // ✅ fixed card width
      textAlign: "center",
      backgroundColor: "#fff",
      boxShadow: "0 2px 6px rgba(0,0,0,0.1)"
    }}>
      <img 
        src={image} 
        alt={name} 
        style={{ 
          width: "100%", 
          height: "200px",     // ✅ fixed height
          objectFit: "cover", 
          borderRadius: "8px"
        }}
      />
      <h3 style={{ margin: "15px 0 10px" }}>{name}</h3>
      <p>{description}</p>
      <p style={{ fontWeight: "bold", marginTop: "10px" }}>${price}</p>
    </div>
  );
}
