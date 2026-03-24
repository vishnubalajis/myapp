import React, { useEffect } from "react";
import confetti from "canvas-confetti";
import { motion } from "framer-motion";
import "./WeddingCard.module.css";

const WeddingCard = () => {

  useEffect(() => {
    // Fireworks burst
    const duration = 3 * 1000;
    const end = Date.now() + duration;

    const colors = ["#f8b500", "#ff6f61", "#b76e79", "#ffd700"];

    (function frame() {
      confetti({
        particleCount: 5,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: colors
      });

      confetti({
        particleCount: 5,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: colors
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    })();
  }, []);

  return (
    <div className="container">
      <motion.div
        className="card"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >         

  <h1 className="title">Wedding Invitation</h1>
<br/>
  <p className="invite-text">
    With the divine blessings of our parents
  </p>

  <h2 className="couple">
    Vishnu <span>&</span> Pinky
  </h2>

  <p className="parents">
    Son of Mr. Subramani & Mrs. Mallika <br />
    Daughter of Mr. Ramesh Babu & Mrs. Anitha
  </p>

  <p className="description">
    Together with their families, request the pleasure of your company
    at their wedding ceremony.
  </p>

  <div className="details">
    <p><strong>📅 Date:</strong> 18 May 2026</p>
    <p><strong>🕰 Time:</strong> 09:30 AM</p>
    <p><strong>📍 Venue:</strong> Salaiperumal Rengasamy-Rukmani Sowrashtra Sabha Mahal , Dindigul</p>
  </div>

  <div className="events">
    <h3>Wedding Events</h3>
    <p><strong>Engagement:</strong> 17 May 2026</p>
    <p><strong>Muhurtham:</strong> 18 May 2026, 09:30 AM</p>
    <p><strong>Reception:</strong> 22 May 2026</p>
  </div>

  <p className="quote">
    "Two hearts, one soul, and a lifetime of togetherness"
  </p>

  <p className="footer">
    We eagerly await your presence to bless us on this auspicious occasion ❤️
  </p>
      </motion.div>
    </div>
  );
};

export default WeddingCard;