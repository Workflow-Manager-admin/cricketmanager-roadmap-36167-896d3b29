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
        // Example player metrics data for the bar chart
        // You could expand with more metrics such as wickets, averages, etc.
        const playerStats = [
          { name: "A. Sharma", runs: 512, wickets: 7, avg: 56.9 },
          { name: "R. Kumar", runs: 405, wickets: 12, avg: 44.2 },
          { name: "P. Singh", runs: 370, wickets: 3, avg: 41.1 },
          { name: "L. James", runs: 180, wickets: 16, avg: 22.5 },
          { name: "S. Patel", runs: 298, wickets: 1, avg: 32.4 }
        ];

        // Inline SVG Bar Chart for Player Runs
        function PlayerStatsBarChart({ data, metric, barColor, accentColor, secondaryColor }) {
          // data: array of objects, e.g., [{name, runs}]
          // metric: string, property to visualize, e.g., "runs"
          const maxVal = Math.max(...data.map(d => d[metric]));
          const chartHeight = 170;
          const chartWidth = 420;
          const barGap = 10;
          const barWidth = 46;
          const labelFont = 13;
          return (
            <svg width={chartWidth} height={chartHeight + 42} style={{ width: "100%", maxWidth: chartWidth, display: "block", marginTop: 6 }}>
              {/* Axes */}
              <line x1="50" y1="16" x2="50" y2={chartHeight} stroke={secondaryColor} strokeWidth="1" />
              <line x1="50" y1={chartHeight} x2={chartWidth-18} y2={chartHeight} stroke={secondaryColor} strokeWidth="1" />
              {/* Bars */}
              {data.map((player, idx) => {
                const value = player[metric];
                const barH = (value / maxVal) * (chartHeight - 36);
                const x = 61 + idx * (barWidth + barGap);
                const y = chartHeight - barH;
                return (
                  <g key={player.name}>
                    {/* Bar */}
                    <rect
                      x={x}
                      y={y}
                      width={barWidth}
                      height={barH}
                      rx="7"
                      fill={barColor}
                      style={{ filter: `drop-shadow(0 2px 9px ${barColor}22)` }}
                    />
                    {/* Value label on top */}
                    <text
                      x={x + barWidth / 2}
                      y={y - 8}
                      fontSize={labelFont}
                      textAnchor="middle"
                      fill={accentColor}
                      fontWeight="bold"
                    >
                      {value}
                    </text>
                    {/* Player name label below */}
                    <text
                      x={x + barWidth / 2}
                      y={chartHeight + 22}
                      fontSize="12"
                      textAnchor="middle"
                      fill={secondaryColor}
                      fontWeight="500"
                    >
                      {player.name}
                    </text>
                  </g>
                );
              })}
              {/* Y-axis ticks */}
              {[0, 0.25, 0.5, 0.75, 1].map((t, i) => {
                const y = chartHeight - t * (chartHeight - 36);
                return (
                  <g key={i}>
                    <line x1="45" x2="50" y1={y} y2={y} stroke={secondaryColor} strokeWidth="1"/>
                    <text x="35" y={y+4} fontSize="11" textAnchor="end" fill={secondaryColor}>
                      {Math.round(maxVal * t)}
                    </text>
                  </g>
                );
              })}
              {/* X-axis label */}
              <text
                x={chartWidth / 2 + 14}
                y={chartHeight + 38}
                fontSize={13}
                textAnchor="middle"
                fill={accentColor}
                fontWeight="bold"
                letterSpacing="1"
              >
                Player
              </text>
              {/* Y-axis label */}
              <text
                x="12"
                y={chartHeight / 2 + 20}
                fontSize={13}
                textAnchor="middle"
                fill={barColor}
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
            <h2 style={{ color: COLORS.primary, marginBottom: 12 }}>Player Statistics</h2>
            <p style={{ color: COLORS.secondary, marginBottom: 24 }}>
              Visualize and compare key player performance metrics for the current season.
            </p>
            <div style={{
              background: "#f9fbfe",
              border: `1px solid ${COLORS.primary}19`,
              borderRadius: 14,
              padding: "32px 16px 36px 8px",
              marginBottom: 8,
              boxShadow: "0 2px 12px 0 #daf2ff13"
            }}>
              <label style={{
                color: COLORS.secondary,
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
                barColor={COLORS.primary}
                secondaryColor={COLORS.secondary}
                accentColor={COLORS.accent}
              />
              <div style={{ marginTop: 18, marginLeft: 18 }}>
                <span style={{
                  fontSize: "0.98em",
                  color: "#537"
                }}>
                  Chart above shows top player runs. More metrics (e.g., wickets/avg) coming soon!
                </span>
              </div>
            </div>
            {/* Optionally, show basic stats table below if required */}
          </section>
        );
      case "leaderboard":
        // Example leaderboard data (static sample for demo)
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
            <h2 style={{ color: COLORS.primary, marginBottom: 10 }}>Leaderboard</h2>
            <p style={{ color: COLORS.secondary, marginBottom: 22 }}>
              See team and player rankings based on performance this season.
            </p>

            {/* Team Leaderboard Table */}
            <div
              style={{
                overflowX: "auto",
                background: "#f7faff",
                borderRadius: 14,
                border: `1px solid ${COLORS.primary}18`,
                boxShadow: "0 1px 8px 0 rgba(30,136,229,0.07)",
                marginBottom: 32,
                padding: "18px 10px 8px 10px",
                maxWidth: 520
              }}
              aria-label="Team Leaderboard"
            >
              <label
                style={{
                  color: COLORS.secondary,
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
              <table
                style={{
                  width: "100%",
                  borderCollapse: "separate",
                  borderSpacing: 0,
                  background: "#fff",
                  borderRadius: 10,
                  overflow: "hidden",
                  boxShadow: "0 0.6px 4px 0 #e4edfc22"
                }}
              >
                <thead>
                  <tr style={{ background: COLORS.primary }}>
                    <th style={{
                      color: "#fff",
                      fontWeight: 600,
                      fontSize: "1.07em",
                      padding: "10px 8px",
                      borderTopLeftRadius: 10,
                      textAlign: "center"
                    }}>#</th>
                    <th style={{
                      color: "#fff",
                      fontWeight: 600,
                      fontSize: "1.07em",
                      padding: "10px 8px",
                      textAlign: "left"
                    }}>Team</th>
                    <th style={{
                      color: "#fff",
                      fontWeight: 600,
                      fontSize: "1.07em",
                      padding: "10px 8px",
                      textAlign: "center"
                    }}>Played</th>
                    <th style={{
                      color: "#fff",
                      fontWeight: 600,
                      fontSize: "1.07em",
                      padding: "10px 8px",
                      textAlign: "center"
                    }}>Won</th>
                    <th style={{
                      color: "#fff",
                      fontWeight: 600,
                      fontSize: "1.07em",
                      padding: "10px 8px",
                      textAlign: "center"
                    }}>Points</th>
                    <th style={{
                      color: "#fff",
                      fontWeight: 600,
                      fontSize: "1.07em",
                      padding: "10px 8px",
                      borderTopRightRadius: 10,
                      textAlign: "center"
                    }}>NRR</th>
                  </tr>
                </thead>
                <tbody>
                  {teamLeaderboard.map((team, i) => (
                    <tr
                      key={team.rank}
                      style={{
                        background: i % 2 === 0 ? "#f8fbff" : "#eaf3fd",
                        fontWeight: team.rank === 1 ? 600 : 500
                      }}
                    >
                      <td style={{
                        padding: "9.5px 8px",
                        color: COLORS.accent,
                        textAlign: "center",
                        fontWeight: 700
                      }}>{team.rank}</td>
                      <td style={{
                        padding: "9.5px 8px",
                        color: COLORS.primary,
                        fontWeight: 600
                      }}>{team.name}</td>
                      <td style={{
                        padding: "9.5px 8px",
                        color: "#223",
                        textAlign: "center"
                      }}>{team.played}</td>
                      <td style={{
                        padding: "9.5px 8px",
                        color: COLORS.secondary,
                        textAlign: "center"
                      }}>{team.won}</td>
                      <td style={{
                        padding: "9.5px 8px",
                        color: "#212121",
                        fontWeight: 600,
                        textAlign: "center"
                      }}>{team.pts}</td>
                      <td style={{
                        padding: "9.5px 8px",
                        color: "#3b2",
                        textAlign: "center"
                      }}>{team.nrr}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div style={{
                marginTop: 8,
                color: "#607199",
                fontSize: "0.96em",
                marginLeft: 6
              }}>
                <span>
                  <span style={{ color: COLORS.accent, fontWeight: 700 }}>{teamLeaderboard[0].name}</span> is currently on top of the table!
                </span>
              </div>
            </div>

            {/* Player Leaderboard Table */}
            <div
              style={{
                overflowX: "auto",
                background: "#f9fbfe",
                borderRadius: 14,
                border: `1px solid ${COLORS.accent}22`,
                boxShadow: "0 1px 8px 0 rgba(30,136,229,0.05)",
                padding: "18px 10px 8px 10px",
                maxWidth: 520
              }}
              aria-label="Player Leaderboard"
            >
              <label
                style={{
                  color: COLORS.primary,
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
              <table
                style={{
                  width: "100%",
                  borderCollapse: "separate",
                  borderSpacing: 0,
                  background: "#fff",
                  borderRadius: 10,
                  overflow: "hidden",
                  boxShadow: "0 0.5px 3px 0 #e4edfc22"
                }}
              >
                <thead>
                  <tr style={{ background: COLORS.accent }}>
                    <th style={{
                      color: "#584d1b",
                      fontWeight: 600,
                      fontSize: "1.06em",
                      padding: "10px 8px",
                      borderTopLeftRadius: 10,
                      textAlign: "center"
                    }}>#</th>
                    <th style={{
                      color: "#584d1b",
                      fontWeight: 600,
                      fontSize: "1.06em",
                      padding: "10px 8px",
                      textAlign: "left"
                    }}>Player</th>
                    <th style={{
                      color: "#584d1b",
                      fontWeight: 600,
                      fontSize: "1.06em",
                      padding: "10px 8px",
                      textAlign: "left"
                    }}>Team</th>
                    <th style={{
                      color: "#584d1b",
                      fontWeight: 600,
                      fontSize: "1.06em",
                      padding: "10px 8px",
                      textAlign: "center"
                    }}>Runs</th>
                    <th style={{
                      color: "#584d1b",
                      fontWeight: 600,
                      fontSize: "1.06em",
                      padding: "10px 8px",
                      borderTopRightRadius: 10,
                      textAlign: "center"
                    }}>Wickets</th>
                  </tr>
                </thead>
                <tbody>
                  {playerLeaderboard.map((player, i) => (
                    <tr
                      key={player.rank}
                      style={{
                        background: i % 2 === 0 ? "#faf8f1" : "#fff8e1",
                        fontWeight: player.rank === 1 ? 700 : 500
                      }}
                    >
                      <td style={{
                        padding: "9.5px 8px",
                        color: COLORS.accent,
                        textAlign: "center",
                        fontWeight: 700
                      }}>{player.rank}</td>
                      <td style={{
                        padding: "9.5px 8px",
                        color: COLORS.primary,
                        fontWeight: 600
                      }}>{player.name}</td>
                      <td style={{
                        padding: "9.5px 8px",
                        color: COLORS.secondary,
                        fontWeight: 500
                      }}>{player.team}</td>
                      <td style={{
                        padding: "9.5px 8px",
                        color: "#223",
                        textAlign: "center"
                      }}>{player.runs}</td>
                      <td style={{
                        padding: "9.5px 8px",
                        color: "#6d3",
                        textAlign: "center"
                      }}>{player.wickets}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div style={{
                marginTop: 8,
                color: "#896c11",
                fontSize: "0.96em",
                marginLeft: 6
              }}>
                <span>
                  <span style={{ color: COLORS.primary, fontWeight: 700 }}>{playerLeaderboard[0].name}</span> is leading the player charts!
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
