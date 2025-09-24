import React from "react";
import footerImg from "../assets/footer.jpg";

const sectionStyle: React.CSSProperties = {
  backgroundImage: `url(${footerImg})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  color: "white",
  padding: "80px 0 60px 0",
  textAlign: "center",
  position: "relative",
};

const overlayStyle: React.CSSProperties = {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  background: "rgba(30, 40, 20, 0.6)",
  zIndex: 1,
};

const contentStyle: React.CSSProperties = {
  position: "relative",
  zIndex: 2,
  maxWidth: "900px",
  margin: "0 auto",
};

export default function WhoWeAreSection() {
  return (
    <section style={sectionStyle}>
      <div style={overlayStyle}></div>
      <div style={contentStyle}>
        <h2 style={{ fontSize: "3rem", fontWeight: 700, letterSpacing: "0.2em", marginBottom: "32px" }}>WHO WE ARE</h2>
        <div style={{ display: "flex", justifyContent: "center", gap: "40px", flexWrap: "wrap", marginBottom: "32px" }}>
          <div>
            <span>⭐</span>
            <div>Over 15 years of experience</div>
          </div>
          <div>
            <span>📝</span>
            <div>Personalized Service</div>
          </div>
          <div>
            <span>⚡</span>
            <div>Fast Service</div>
          </div>
          <div>
            <span>📄</span>
            <div>Hands-free documentation</div>
          </div>
          <div>
            <span>🛂</span>
            <div>Visa Process Handling</div>
          </div>
          <div>
            <span>📞</span>
            <div>24/7 Customer Service</div>
          </div>
        </div>
        <p style={{ fontSize: "1rem", lineHeight: 1.7, maxWidth: "700px", margin: "0 auto" }}>
          We go beyond what is expected for a tourism agency. Not only do we prepare a mind-blowing experience – the future of luxury travel lies right here, in front of you. At CEYLON TRAVELEX, the riches of the true paradise uniquely ensconced near Pearl of the Indian Ocean, is meticulously configured, as we often do assume, that you may wish your own adventure with our guidance and support. Our unique custom travel itinerary planning and personalization ensures that you will be charted to everything you need. Where do you want to go? How do you wish to travel? We will help you find your preferred route, plan your journey efficiently, and your perfect journey is guaranteed.
        </p>
      </div>
    </section>
  );
}
