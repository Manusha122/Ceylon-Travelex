import React from "react";
import bgImg from "../assets/new.jpg";

const sectionStyle: React.CSSProperties = {
  backgroundImage: `url(${bgImg})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  color: "#232a13",
  padding: "60px 0 40px 0",
  textAlign: "center",
  position: "relative",
};

const overlayStyle: React.CSSProperties = {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  background: "rgba(255,255,255,0.7)",
  zIndex: 1,
};

const contentStyle: React.CSSProperties = {
  position: "relative",
  zIndex: 2,
  maxWidth: "900px",
  margin: "0 auto",
};

const partnerLogos = [
  "AMAN", "ANANTARA", "Cinnamon", "Hilton", "Jetwing", "Malabar Hill", "Radisson", "Resplendent", "Shangri-La", "W15", "Uga"
];

export default function PartnersSection() {
  return (
    <section style={sectionStyle}>
      <div style={overlayStyle}></div>
      <div style={contentStyle}>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", background: "#f5f5f0", borderRadius: "16px", marginBottom: "32px", boxShadow: "0 2px 8px rgba(0,0,0,0.04)", padding: "18px 0" }}>
          <div style={{ flex: 1, textAlign: "center" }}>
            <div style={{ fontSize: "1.1rem", fontWeight: 500, color: "#232a13" }}>OUR PRINCIPLE</div>
            <div style={{ fontSize: "1.5rem", fontWeight: 700, color: "#6a7c3a" }}>PARTNER</div>
          </div>
          <div style={{ flex: 2, fontSize: "2.2rem", fontWeight: 600, color: "#232a13" }}>
            <span style={{ fontFamily: 'serif', letterSpacing: "0.05em" }}>EMPRESS CREST</span>
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "center", gap: "48px", marginBottom: "32px" }}>
          <div>
            <span style={{ fontSize: "1.1rem", color: "#6a7c3a" }}>OUR EXCURSION PARTNERS</span>
          </div>
          <div>
            <span style={{ fontSize: "1.1rem", color: "#6a7c3a" }}>OUR HOTEL PARTNERS</span>
          </div>
          <div>
            <span style={{ fontSize: "1.1rem", color: "#6a7c3a" }}>OUR LOGISTIC PARTNERS</span>
          </div>
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "40px 56px", marginBottom: "16px" }}>
          {partnerLogos.map((name) => (
            <div key={name} style={{ fontSize: "1.5rem", fontWeight: 500, color: "#232a13", minWidth: "120px" }}>{name}</div>
          ))}
        </div>
      </div>
    </section>
  );
}
