import React from "react";

const luxeItems = [
  {
    icon: "✈️",
    title: "Private Charter Flights",
    desc: "Take the liberty to present your own preferred flight schedules, and at command, we can extend our private flight charter offers for you.",
  },
  {
    icon: "🛥️",
    title: "Private Yacht Charter",
    desc: "Conquer the seas on your voyage with our fleet of Private yachts, and journey across the oceans in luxurious serenity.",
  },
  {
    icon: "🚗",
    title: "Luxury Car Rentals",
    desc: "Select from an intricate array of luxury cars, and dominate the roads driven at your own comfort and pace.",
  },
  {
    icon: "🧳",
    title: "Airport Runway Pickup",
    desc: "From the minute you step out of your flight, at your arrival, you can be greeted by our chauffeurs to escort you to your private vehicle.",
  },
  {
    icon: "🛡️",
    title: "Security & Safety",
    desc: "Your safety and comfort is our top priority, hence our elite team of trained professionals will ensure your protection throughout your entire journey.",
  },
  {
    icon: "🏡",
    title: "Luxury Home Rentals",
    desc: "Our myriad of deluxe residences, villas or private country-estates will accommodate you with luxury homely arrangements for your indulgence.",
  },
  {
    icon: "💎",
    title: "Luxury Gem & Jewelry Shopping",
    desc: "Indulge in an opulent and grandiose shopping experience, to find the treasured masterpieces that suits your disposition.",
  },
];

export default function LuxeProvisionsSection() {
  return (
    <section style={{ padding: "60px 0", background: "#fff", color: "#232a13" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", textAlign: "center" }}>
        <h2 style={{ fontSize: "2.5rem", fontWeight: 700, letterSpacing: "0.05em", marginBottom: 0 }}>
          OUR <span style={{ color: "#6a7c3a" }}>LUXE</span>
        </h2>
        <h3 style={{ fontSize: "2rem", fontWeight: 400, marginBottom: "16px", letterSpacing: "0.05em" }}>PROVISIONS</h3>
        <hr style={{ border: "none", borderTop: "2px solid #6a7c3a", width: "320px", margin: "0 auto 32px auto" }} />
        <div style={{ background: "#6a7c3a", color: "#fff", borderRadius: "24px 24px 24px 24px", padding: "16px 32px", display: "inline-block", marginBottom: "40px", fontSize: "1.1rem" }}>
          Introducing CeylonTravelex's exclusive services to ensure that our clients receive the utmost care and protection for their ultimate journeys.
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "48px 32px" }}>
          {luxeItems.map((item) => (
            <div key={item.title} style={{ width: "260px", marginBottom: "32px" }}>
              <div style={{ fontSize: "2.5rem", marginBottom: "12px" }}>{item.icon}</div>
              <div style={{ fontWeight: 600, fontSize: "1.15rem", marginBottom: "8px" }}>{item.title}</div>
              <div style={{ fontSize: "1rem", color: "#232a13" }}>{item.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
