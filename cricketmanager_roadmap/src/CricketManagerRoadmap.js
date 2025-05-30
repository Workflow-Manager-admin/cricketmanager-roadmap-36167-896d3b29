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
            <h2 style={{ color: COLORS.primary, marginBottom: 8 }}>Team Management</h2>
            <p style={{ color: COLORS.secondary, marginBottom: 26 }}>
              Create, edit, and manage cricket teams, players, coaches, and staff.
            </p>
            <form
              style={{
                background: "#f7faff",
                borderRadius: 12,
                boxShadow: "0 1px 8px 0 rgba(30,136,229,0.07)",
                padding: "24px 20px",
                maxWidth: 440,
                marginTop: 8,
                border: `1px solid ${COLORS.primary}22`
              }}
              onSubmit={e => {
                e.preventDefault();
                // Basic validation: show alert if empty fields
                const form = e.target;
                const name = form.teamName.value.trim();
                const players = form.players.value.trim();
                if (!name) {
                  alert("Please enter a Team Name.");
                  form.teamName.focus();
                  return;
                }
                if (!players) {
                  alert("Please provide at least one Player.");
                  form.players.focus();
                  return;
                }
                alert("Team details submitted! (form state not saved in demo)");
                form.reset();
              }}
            >
              <div style={{ marginBottom: 18 }}>
                <label htmlFor="teamName" style={{ fontWeight: 600, color: COLORS.primary, display: "block", marginBottom: 6 }}>
                  Team Name<span style={{ color: COLORS.accent }}> *</span>
                </label>
                <input
                  id="teamName"
                  name="teamName"
                  type="text"
                  placeholder="e.g., Thunderbolts"
                  required
                  style={{
                    width: "100%",
                    padding: "10px 12px",
                    fontSize: "1rem",
                    borderRadius: 6,
                    border: `1px solid ${COLORS.primary}55`,
                    background: "#fff",
                    color: "#233",
                    marginTop: 1,
                    marginBottom: 0
                  }}
                />
              </div>
              <div style={{ marginBottom: 18 }}>
                <label htmlFor="players" style={{ fontWeight: 600, color: COLORS.primary, display: "block", marginBottom: 6 }}>
                  Players<span style={{ color: COLORS.accent }}> *</span>
                </label>
                <textarea
                  id="players"
                  name="players"
                  rows={3}
                  placeholder="Enter player names, one per line"
                  required
                  style={{
                    width: "100%",
                    padding: "10px 12px",
                    fontFamily: "inherit",
                    fontSize: "1rem",
                    borderRadius: 6,
                    border: `1px solid ${COLORS.primary}33`,
                    background: "#fff",
                    color: "#233"
                  }}
                />
                <small style={{ color: COLORS.secondary }}>Separate each player with a new line.</small>
              </div>
              <div style={{ marginBottom: 18 }}>
                <label htmlFor="coaches" style={{ fontWeight: 600, color: COLORS.primary, display: "block", marginBottom: 6 }}>
                  Coaches
                </label>
                <textarea
                  id="coaches"
                  name="coaches"
                  rows={2}
                  placeholder="Enter coach names, one per line"
                  style={{
                    width: "100%",
                    padding: "10px 12px",
                    fontFamily: "inherit",
                    fontSize: "1rem",
                    borderRadius: 6,
                    border: `1px solid ${COLORS.primary}33`,
                    background: "#fff",
                    color: "#233"
                  }}
                />
                <small style={{ color: COLORS.secondary }}>Optional: List one per line.</small>
              </div>
              <div style={{ marginBottom: 24 }}>
                <label htmlFor="staff" style={{ fontWeight: 600, color: COLORS.primary, display: "block", marginBottom: 6 }}>
                  Staff
                </label>
                <textarea
                  id="staff"
                  name="staff"
                  rows={2}
                  placeholder="Enter staff names, one per line"
                  style={{
                    width: "100%",
                    padding: "10px 12px",
                    fontFamily: "inherit",
                    fontSize: "1rem",
                    borderRadius: 6,
                    border: `1px solid ${COLORS.primary}33`,
                    background: "#fff",
                    color: "#233"
                  }}
                />
                <small style={{ color: COLORS.secondary }}>Optional: List one per line.</small>
              </div>
              <button
                type="submit"
                className="btn"
                style={{
                  backgroundColor: COLORS.primary,
                  color: "#fff",
                  border: "none",
                  borderRadius: 6,
                  padding: "10px 26px",
                  fontWeight: 600,
                  fontSize: "1.08rem",
                  cursor: "pointer",
                  boxShadow: `0 0 5px 0 ${COLORS.primary}13`,
                  marginTop: 8,
                }}
              >
                Save Team
              </button>
            </form>
          </section>
        );
      case "schedule":
        // Example match data (replace with backend integration as needed)
        const matches = [
          {
            match: "Match 1",
            dateTime: "2024-07-01 14:00",
            venue: "Eden Gardens",
            teams: "Thunderbolts vs Hurricanes",
          },
          {
            match: "Match 2",
            dateTime: "2024-07-03 17:30",
            venue: "Wankhede Stadium",
            teams: "Strikers vs Titans",
          },
          {
            match: "Match 3",
            dateTime: "2024-07-07 15:00",
            venue: "Chinnaswamy Stadium",
            teams: "Warriors vs Panthers",
          },
        ];
        return (
          <section>
            <h2 style={{ color: COLORS.primary, marginBottom: 10 }}>Match Scheduling</h2>
            <p style={{ color: COLORS.secondary, marginBottom: 30 }}>
              View and manage upcoming scheduled cricket matches.
            </p>
            <div
              style={{
                overflowX: "auto",
                background: "#f7faff",
                borderRadius: 12,
                boxShadow: "0 1px 6px 0 rgba(30,136,229,0.08)",
                border: `1px solid ${COLORS.primary}22`,
                padding: "18px 14px 8px 14px",
                minWidth: 440,
                marginBottom: 10,
              }}
            >
              <table
                style={{
                  width: "100%",
                  borderCollapse: "separate",
                  borderSpacing: 0,
                  background: "#fff",
                  boxShadow: "0 0.5px 3px 0 #e4edfc55",
                  borderRadius: 10,
                  overflow: "hidden",
                }}
                aria-label="Scheduled Matches Table"
              >
                <thead>
                  <tr style={{
                    background: COLORS.primary,
                  }}>
                    <th style={{
                      color: "#fff",
                      fontWeight: 600,
                      fontSize: "1.07em",
                      padding: "12px 10px",
                      borderTopLeftRadius: 10,
                      textAlign: "left",
                      letterSpacing: "0.5px",
                    }}>Match</th>
                    <th style={{
                      color: "#fff",
                      fontWeight: 600,
                      fontSize: "1.07em",
                      padding: "12px 10px",
                      textAlign: "left",
                    }}>Date/Time</th>
                    <th style={{
                      color: "#fff",
                      fontWeight: 600,
                      fontSize: "1.07em",
                      padding: "12px 10px",
                      textAlign: "left",
                    }}>Venue</th>
                    <th style={{
                      color: "#fff",
                      fontWeight: 600,
                      fontSize: "1.07em",
                      padding: "12px 10px",
                      borderTopRightRadius: 10,
                      textAlign: "left",
                    }}>Teams</th>
                  </tr>
                </thead>
                <tbody>
                  {matches.map((m, i) => (
                    <tr
                      key={m.match}
                      style={{
                        background: i % 2 === 0 ? "#f8fbff" : "#e9f1fb",
                        transition: "background 0.16s",
                      }}
                    >
                      <td style={{
                        padding: "11px 10px",
                        color: COLORS.secondary,
                        fontWeight: 500,
                        borderBottom: `1px solid ${COLORS.primary}11`,
                      }}>
                        {m.match}
                      </td>
                      <td style={{
                        padding: "11px 10px",
                        color: "#354",
                        fontWeight: 500,
                        borderBottom: `1px solid ${COLORS.primary}11`,
                        fontSize: "0.98em"
                      }}>
                        {m.dateTime}
                      </td>
                      <td style={{
                        padding: "11px 10px",
                        color: COLORS.primary,
                        fontWeight: 500,
                        borderBottom: `1px solid ${COLORS.primary}11`,
                      }}>
                        {m.venue}
                      </td>
                      <td style={{
                        padding: "11px 10px",
                        color: "#212121",
                        fontWeight: 500,
                        borderBottom: `1px solid ${COLORS.primary}11`,
                      }}>
                        {m.teams}
                      </td>
                    </tr>
                  ))}
                  {matches.length === 0 && (
                    <tr>
                      <td colSpan={4} style={{
                        padding: "14px 10px",
                        textAlign: "center",
                        color: COLORS.accent,
                        fontWeight: 500
                      }}>
                        No matches scheduled.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
            <div style={{
              color: COLORS.textSecondary,
              fontSize: "0.99em",
              marginTop: 4,
            }}>
              To schedule a match, please use the upcoming scheduling feature (coming soon).
            </div>
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
