import React, { useState, useContext } from "react";
import { ThemeContext } from "./App";

/**
 * CricketManagerRoadmap
 * Main dashboard container for the CricketManager app.
 * Features: Team Management, Match Scheduling, Player Statistics, Leaderboard.
 * Supports light and dark theme via context.
 */

// PUBLIC_INTERFACE
function CricketManagerRoadmap() {
  const { theme, setTheme } = useContext(ThemeContext);
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

  // Theme toggle UI
  function renderThemeToggle() {
    return (
      <button
        className="theme-toggle-btn"
        type="button"
        aria-label="Toggle light/dark theme"
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      >
        {theme === "light" ? (
          <>
            🌙 Dark
          </>
        ) : (
          <>
            ☀️ Light
          </>
        )}
      </button>
    );
  }

  // Placeholder content for dashboard features
  function renderContent() {
    switch (selected) {
      case "team":
        return (
          <section>
            <h2 style={{ color: "var(--primary)", marginBottom: 8 }}>Team Management</h2>
            <p style={{ color: "var(--secondary)", marginBottom: 26 }}>
              Create, edit, and manage cricket teams, players, coaches, and staff.
            </p>
            <form
              style={{
                background: "var(--surface)",
                borderRadius: 12,
                boxShadow: "var(--box-shadow)",
                padding: "24px 20px",
                maxWidth: 440,
                marginTop: 8,
                border: "1px solid var(--primary)"
              }}
              onSubmit={e => {
                e.preventDefault();
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
                <label htmlFor="teamName" style={{ fontWeight: 600, color: "var(--primary)", display: "block", marginBottom: 6 }}>
                  Team Name<span style={{ color: "var(--accent)" }}> *</span>
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
                    border: "1px solid var(--input-border)",
                    background: "var(--input-bg)",
                    color: "var(--text-primary)",
                    marginTop: 1,
                    marginBottom: 0
                  }}
                />
              </div>
              <div style={{ marginBottom: 18 }}>
                <label htmlFor="players" style={{ fontWeight: 600, color: "var(--primary)", display: "block", marginBottom: 6 }}>
                  Players<span style={{ color: "var(--accent)" }}> *</span>
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
                    border: "1px solid var(--input-border)",
                    background: "var(--input-bg)",
                    color: "var(--text-primary)"
                  }}
                />
                <small>Separate each player with a new line.</small>
              </div>
              <div style={{ marginBottom: 18 }}>
                <label htmlFor="coaches" style={{ fontWeight: 600, color: "var(--primary)", display: "block", marginBottom: 6 }}>
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
                    border: "1px solid var(--input-border)",
                    background: "var(--input-bg)",
                    color: "var(--text-primary)"
                  }}
                />
                <small>Optional: List one per line.</small>
              </div>
              <div style={{ marginBottom: 24 }}>
                <label htmlFor="staff" style={{ fontWeight: 600, color: "var(--primary)", display: "block", marginBottom: 6 }}>
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
                    border: "1px solid var(--input-border)",
                    background: "var(--input-bg)",
                    color: "var(--text-primary)"
                  }}
                />
                <small>Optional: List one per line.</small>
              </div>
              <button
                type="submit"
                className="btn"
                style={{
                  marginTop: 8,
                }}
              >
                Save Team
              </button>
            </form>
          </section>
        );
      case "schedule":
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
            <h2 style={{ color: "var(--primary)", marginBottom: 10 }}>Match Scheduling</h2>
            <p style={{ color: "var(--secondary)", marginBottom: 30 }}>
              View and manage upcoming scheduled cricket matches.
            </p>
            <div
              style={{
                overflowX: "auto",
                background: "var(--surface)",
                borderRadius: 12,
                boxShadow: "var(--box-shadow)",
                border: "1px solid var(--primary)",
                padding: "18px 14px 8px 14px",
                minWidth: 440,
                marginBottom: 10,
              }}
            >
              <table className="table" aria-label="Scheduled Matches Table">
                <thead>
                  <tr>
                    <th>Match</th>
                    <th>Date/Time</th>
                    <th>Venue</th>
                    <th>Teams</th>
                  </tr>
                </thead>
                <tbody>
                  {matches.map((m, i) => (
                    <tr key={m.match}>
                      <td style={{
                        color: "var(--secondary)",
                        fontWeight: 500,
                      }}>
                        {m.match}
                      </td>
                      <td style={{
                        color: "var(--text-primary)",
                        fontWeight: 500,
                        fontSize: "0.98em"
                      }}>
                        {m.dateTime}
                      </td>
                      <td style={{
                        color: "var(--primary)",
                        fontWeight: 500,
                      }}>
                        {m.venue}
                      </td>
                      <td style={{
                        color: "var(--text-primary)",
                        fontWeight: 500,
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
                        color: "var(--accent)",
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
              color: "var(--text-secondary)",
              fontSize: "0.99em",
              marginTop: 4,
            }}>
              To schedule a match, please use the upcoming scheduling feature (coming soon).
            </div>
          </section>
        );
      case "stats":
        const playerStats = [
          { name: "A. Sharma", runs: 512, wickets: 7, avg: 56.9 },
          { name: "R. Kumar", runs: 405, wickets: 12, avg: 44.2 },
          { name: "P. Singh", runs: 370, wickets: 3, avg: 41.1 },
          { name: "L. James", runs: 180, wickets: 16, avg: 22.5 },
          { name: "S. Patel", runs: 298, wickets: 1, avg: 32.4 }
        ];

        function PlayerStatsBarChart({ data, metric }) {
          const maxVal = Math.max(...data.map(d => d[metric]));
          const chartHeight = 170;
          const chartWidth = 420;
          const barGap = 10;
          const barWidth = 46;
          const labelFont = 13;
          return (
            <svg width={chartWidth} height={chartHeight + 42} style={{ width: "100%", maxWidth: chartWidth, display: "block", marginTop: 6 }}>
              <line x1="50" y1="16" x2="50" y2={chartHeight} stroke="var(--secondary)" strokeWidth="1" />
              <line x1="50" y1={chartHeight} x2={chartWidth - 18} y2={chartHeight} stroke="var(--secondary)" strokeWidth="1" />
              {data.map((player, idx) => {
                const value = player[metric];
                const barH = (value / maxVal) * (chartHeight - 36);
                const x = 61 + idx * (barWidth + barGap);
                const y = chartHeight - barH;
                return (
                  <g key={player.name}>
                    <rect
                      x={x}
                      y={y}
                      width={barWidth}
                      height={barH}
                      rx="7"
                      fill="var(--primary)"
                      style={{ filter: "drop-shadow(0 2px 9px var(--primary-20, #1e88e533))" }}
                    />
                    <text
                      x={x + barWidth / 2}
                      y={y - 8}
                      fontSize={labelFont}
                      textAnchor="middle"
                      fill="var(--accent)"
                      fontWeight="bold"
                    >
                      {value}
                    </text>
                    <text
                      x={x + barWidth / 2}
                      y={chartHeight + 22}
                      fontSize="12"
                      textAnchor="middle"
                      fill="var(--secondary)"
                      fontWeight="500"
                    >
                      {player.name}
                    </text>
                  </g>
                );
              })}
              {[0, 0.25, 0.5, 0.75, 1].map((t, i) => {
                const y = chartHeight - t * (chartHeight - 36);
                return (
                  <g key={i}>
                    <line x1="45" x2="50" y1={y} y2={y} stroke="var(--secondary)" strokeWidth="1" />
                    <text x="35" y={y + 4} fontSize="11" textAnchor="end" fill="var(--secondary)">
                      {Math.round(maxVal * t)}
                    </text>
                  </g>
                );
              })}
              <text
                x={chartWidth / 2 + 14}
                y={chartHeight + 38}
                fontSize={13}
                textAnchor="middle"
                fill="var(--accent)"
                fontWeight="bold"
                letterSpacing="1"
              >
                Player
              </text>
              <text
                x="12"
                y={chartHeight / 2 + 20}
                fontSize={13}
                textAnchor="middle"
                fill="var(--primary)"
                fontWeight="bold"
                transform={`rotate(-90 12,${chartHeight / 2 + 20})`}
              >
                {metric.charAt(0).toUpperCase() + metric.slice(1)}
              </text>
            </svg>
          );
        }

        return (
          <section>
            <h2 style={{ color: "var(--primary)", marginBottom: 12 }}>Player Statistics</h2>
            <p style={{ color: "var(--secondary)", marginBottom: 24 }}>
              Visualize and compare key player performance metrics for the current season.
            </p>
            <div style={{
              background: "var(--surface)",
              border: "1px solid var(--primary)",
              borderRadius: 14,
              padding: "32px 16px 36px 8px",
              marginBottom: 8,
              boxShadow: "var(--box-shadow)"
            }}>
              <label style={{
                color: "var(--secondary)",
                fontWeight: "bold",
                letterSpacing: "1px",
                fontSize: "1rem",
                display: "block",
                marginBottom: "10px",
                marginLeft: 18
              }}>
                Runs (bar chart)
              </label>
              <PlayerStatsBarChart
                data={playerStats}
                metric="runs"
              />
              <div style={{ marginTop: 18, marginLeft: 18 }}>
                <span style={{
                  fontSize: "0.98em",
                  color: "var(--secondary)"
                }}>
                  Chart above shows top player runs. More metrics (e.g., wickets/avg) coming soon!
                </span>
              </div>
            </div>
          </section>
        );
      case "leaderboard":
        const teamLeaderboard = [
          { rank: 1, name: "Thunderbolts", played: 8, won: 7, pts: 14, nrr: "+1.62" },
          { rank: 2, name: "Strikers", played: 8, won: 6, pts: 12, nrr: "+1.11" },
          { rank: 3, name: "Panthers", played: 8, won: 5, pts: 10, nrr: "+0.85" },
          { rank: 4, name: "Hurricanes", played: 8, won: 4, pts: 8, nrr: "+0.42" }
        ];
        const playerLeaderboard = [
          { rank: 1, name: "A. Sharma", team: "Thunderbolts", runs: 502, wickets: 9 },
          { rank: 2, name: "R. Kumar", team: "Strikers", runs: 433, wickets: 7 },
          { rank: 3, name: "L. James", team: "Panthers", runs: 389, wickets: 14 },
          { rank: 4, name: "S. Patel", team: "Hurricanes", runs: 341, wickets: 3 }
        ];
        return (
          <section>
            <h2 style={{ color: "var(--primary)", marginBottom: 10 }}>Leaderboard</h2>
            <p style={{ color: "var(--secondary)", marginBottom: 22 }}>
              See team and player rankings based on performance this season.
            </p>
            {/* Team Leaderboard Table */}
            <div
              style={{
                overflowX: "auto",
                background: "var(--surface)",
                borderRadius: 14,
                border: "1px solid var(--primary)",
                boxShadow: "var(--box-shadow)",
                marginBottom: 32,
                padding: "18px 10px 8px 10px",
                maxWidth: 520
              }}
              aria-label="Team Leaderboard"
            >
              <label
                style={{
                  color: "var(--secondary)",
                  fontWeight: 700,
                  letterSpacing: "1px",
                  fontSize: "1.07rem",
                  display: "block",
                  marginLeft: 18,
                  marginBottom: 12
                }}
              >
                Team Rankings
              </label>
              <table className="table">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Team</th>
                    <th>Played</th>
                    <th>Won</th>
                    <th>Points</th>
                    <th>NRR</th>
                  </tr>
                </thead>
                <tbody>
                  {teamLeaderboard.map((team, i) => (
                    <tr
                      key={team.rank}
                      style={{
                        fontWeight: team.rank === 1 ? 600 : 500
                      }}
                    >
                      <td style={{
                        color: "var(--accent)",
                        textAlign: "center",
                        fontWeight: 700
                      }}>{team.rank}</td>
                      <td style={{
                        color: "var(--primary)",
                        fontWeight: 600
                      }}>{team.name}</td>
                      <td style={{
                        color: "var(--text-primary)",
                        textAlign: "center"
                      }}>{team.played}</td>
                      <td style={{
                        color: "var(--secondary)",
                        textAlign: "center"
                      }}>{team.won}</td>
                      <td style={{
                        color: "var(--text-primary)",
                        fontWeight: 600,
                        textAlign: "center"
                      }}>{team.pts}</td>
                      <td style={{
                        color: "var(--secondary)",
                        textAlign: "center"
                      }}>{team.nrr}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div style={{
                marginTop: 8,
                color: "var(--text-secondary)",
                fontSize: "0.96em",
                marginLeft: 6
              }}>
                <span>
                  <span style={{ color: "var(--accent)", fontWeight: 700 }}>{teamLeaderboard[0].name}</span> is currently on top of the table!
                </span>
              </div>
            </div>
            {/* Player Leaderboard Table */}
            <div
              style={{
                overflowX: "auto",
                background: "var(--surface)",
                borderRadius: 14,
                border: "1px solid var(--accent)",
                boxShadow: "var(--box-shadow)",
                padding: "18px 10px 8px 10px",
                maxWidth: 520
              }}
              aria-label="Player Leaderboard"
            >
              <label
                style={{
                  color: "var(--primary)",
                  fontWeight: 700,
                  letterSpacing: "1px",
                  fontSize: "1.06rem",
                  display: "block",
                  marginLeft: 18,
                  marginBottom: 12
                }}
              >
                Top Players
              </label>
              <table className="table">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Player</th>
                    <th>Team</th>
                    <th>Runs</th>
                    <th>Wickets</th>
                  </tr>
                </thead>
                <tbody>
                  {playerLeaderboard.map((player, i) => (
                    <tr
                      key={player.rank}
                      style={{
                        fontWeight: player.rank === 1 ? 700 : 500
                      }}
                    >
                      <td style={{
                        color: "var(--accent)",
                        textAlign: "center",
                        fontWeight: 700
                      }}>{player.rank}</td>
                      <td style={{
                        color: "var(--primary)",
                        fontWeight: 600
                      }}>{player.name}</td>
                      <td style={{
                        color: "var(--secondary)",
                        fontWeight: 500
                      }}>{player.team}</td>
                      <td style={{
                        color: "var(--text-primary)",
                        textAlign: "center"
                      }}>{player.runs}</td>
                      <td style={{
                        color: "var(--secondary)",
                        textAlign: "center"
                      }}>{player.wickets}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div style={{
                marginTop: 8,
                color: "var(--text-accent)",
                fontSize: "0.96em",
                marginLeft: 6
              }}>
                <span>
                  <span style={{ color: "var(--primary)", fontWeight: 700 }}>{playerLeaderboard[0].name}</span> is leading the player charts!
                </span>
              </div>
            </div>
          </section>
        );
      default:
        return null;
    }
  }

  return (
    <div
      className={theme === "dark" ? "dark" : "light"}
      style={{
        display: "flex",
        minHeight: "100vh",
        background: "var(--background)",
        color: "var(--text-primary)"
      }}
    >
      {/* Sidebar Navigation */}
      <nav
        className="sidebar"
        aria-label="Sidebar navigation"
      >
        <div
          style={{
            padding: "32px 8px 16px 24px",
            fontWeight: 700,
            fontSize: "1.3rem",
            color: "var(--primary)",
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
            className={`sidebar-nav-btn${selected === item.key ? " selected" : ""}`}
            aria-current={selected === item.key ? "page" : undefined}
            onClick={() => setSelected(item.key)}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12
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
            color: "var(--accent)",
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
              color: "var(--secondary)",
              fontWeight: "bold",
              fontSize: "1.2rem",
              letterSpacing: "1px"
            }}
          >
            {navItems.find((i) => i.key === selected).label}
          </span>
          {renderThemeToggle()}
        </header>
        <section
          className="main-surface"
          style={{
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
