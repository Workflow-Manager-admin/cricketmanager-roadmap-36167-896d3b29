import React, { useState } from "react";

/**
 * CricketManagerRoadmap
 * Main dashboard container for the CricketManager app.
 * Features: Team Management, Match Scheduling, Player Statistics, Leaderboard.
 * Theme: Light, uses provided color palette.
 */

// Color palette constants
const COLORS = {
  primary: "#1e88e5",
  secondary: "#43a047",
  accent: "#fbc02d",
  background: "#f6f9fc",
  sidebarBg: "#e3eaf4"
};

// PUBLIC_INTERFACE
function CricketManagerRoadmap() {
  const [selected, setSelected] = useState("team");

  // Navigation items
  const navItems = [
    {
      key: "team",
      label: "Team Management",
      icon: (
        <span role="img" aria-label="team">
          🏏
        </span>
      )
    },
    {
      key: "schedule",
      label: "Match Scheduling",
      icon: (
        <span role="img" aria-label="calendar">
          📅
        </span>
      )
    },
    {
      key: "stats",
      label: "Player Statistics",
      icon: (
        <span role="img" aria-label="chart">
          📊
        </span>
      )
    },
    {
      key: "leaderboard",
      label: "Leaderboard",
      icon: (
        <span role="img" aria-label="trophy">
          🏆
        </span>
      )
    }
  ];

  // Placeholder content for dashboard features
  function renderContent() {
    switch (selected) {
      case "team":
        return (
          <section>
            <h2>Team Management</h2>
            <p>
              Create, edit, and manage cricket teams, players, coaches, and staff.
            </p>
            {/* Future: List teams / team actions */}
          </section>
        );
      case "schedule":
        return (
          <section>
            <h2>Match Scheduling</h2>
            <p>
              Schedule matches, set venues, and manage match timings.
            </p>
            {/* Future: Match calendar / schedule actions */}
          </section>
        );
      case "stats":
        return (
          <section>
            <h2>Player Statistics</h2>
            <p>
              View and analyze player stats such as runs, wickets, averages.
            </p>
            {/* Future: Stats table/chart */}
          </section>
        );
      case "leaderboard":
        return (
          <section>
            <h2>Leaderboard</h2>
            <p>
              See team and player rankings based on performance.
            </p>
            {/* Future: Rankings table */}
          </section>
        );
      default:
        return null;
    }
  }

  return (
    <div style={{
      display: "flex",
      minHeight: "100vh",
      background: COLORS.background,
      color: "#222"
    }}>
      {/* Sidebar Navigation */}
      <nav
        aria-label="Sidebar navigation"
        style={{
          minWidth: 210,
          background: COLORS.sidebarBg,
          borderRight: `1px solid #d1e1f5`,
          display: "flex",
          flexDirection: "column",
          alignItems: "stretch",
          paddingTop: 0,
          boxShadow: "0 0 10px 0 rgba(30,136,229,0.04)"
        }}
      >
        <div
          style={{
            padding: "32px 8px 16px 24px",
            fontWeight: 700,
            fontSize: "1.3rem",
            color: COLORS.primary,
            letterSpacing: "2px"
          }}
        >
          <span role="img" aria-label="cricket" style={{ marginRight: 8 }}>
            🏏
          </span>
          CricketManager
        </div>
        {navItems.map((item) => (
          <button
            key={item.key}
            aria-current={selected === item.key ? "page" : undefined}
            onClick={() => setSelected(item.key)}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              background: selected === item.key ? COLORS.primary : "transparent",
              color: selected === item.key ? "#fff" : "#223",
              border: "none",
              outline: "none",
              textAlign: "left",
              padding: "14px 24px",
              margin: "2px 0",
              cursor: "pointer",
              fontSize: "1.1rem",
              fontWeight: 500,
              borderRadius: "0 24px 24px 0",
              transition: "background 0.15s"
            }}
          >
            <span style={{ fontSize: "1.25em" }}>{item.icon}</span>
            {item.label}
          </button>
        ))}
        <div style={{ flex: 1 }} />
        <div
          style={{
            textAlign: "center",
            padding: "12px",
            color: COLORS.accent,
            fontSize: "0.97rem"
          }}
        >
          <span>CricketManager Roadmap</span>
        </div>
      </nav>

      {/* Main content area */}
      <main
        style={{
          flex: 1,
          margin: "0",
          padding: "40px 36px 24px 36px",
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh"
        }}
      >
        {/* Top nav for quick info or user actions */}
        <header
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "32px"
          }}
        >
          <span
            style={{
              color: COLORS.secondary,
              fontWeight: "bold",
              fontSize: "1.2rem",
              letterSpacing: "1px"
            }}
          >
            {navItems.find((i) => i.key === selected).label}
          </span>
          <span
            style={{
              background: COLORS.accent,
              color: "#212121",
              borderRadius: 8,
              fontWeight: 600,
              fontSize: 13,
              padding: "8px 16px"
            }}
          >
            Light Theme
          </span>
        </header>
        <section
          style={{
            background: "#fff",
            borderRadius: 16,
            boxShadow: "0 2px 16px 0 rgba(30,136,229,0.06)",
            padding: "36px 32px",
            flex: 1,
            minHeight: 220
          }}
        >
          {renderContent()}
        </section>
      </main>
    </div>
  );
}

export default CricketManagerRoadmap;
