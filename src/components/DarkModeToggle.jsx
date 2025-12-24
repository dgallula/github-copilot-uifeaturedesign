import React, { useEffect, useState } from "react";
import "../styles/darkmode.css";

export default function DarkModeToggle() {
  const [dark, setDark] = useState(() => {
    try {
      return localStorage.getItem("theme") === "dark";
    } catch {
      return false;
    }
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", dark ? "dark" : "light");
    try { localStorage.setItem("theme", dark ? "dark" : "light"); } catch {}
  }, [dark]);

  return (
    <label className="dm-toggle">
      <input aria-label="Toggle dark mode" type="checkbox" checked={dark} onChange={(e) => setDark(e.target.checked)} />
      <span className="dm-slider" />
    </label>
  );
}
