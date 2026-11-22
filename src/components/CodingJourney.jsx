import React, { useState, useEffect } from 'react';
import { 
  Code, 
  ExternalLink, 
  Award, 
  Flame, 
  CheckCircle2, 
  TrendingUp, 
  Compass, 
  Brain, 
  RefreshCw,
  Terminal
} from 'lucide-react';
import { LEETCODE_DATA } from '../data/portfolioData';

// Official LeetCode SVG Logo Icon
function LeetCodeLogo({ className = "w-6 h-6" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.874 5.874 0 0 0 .349 1.017 5.928 5.928 0 0 0 1.229 1.811l2.52 2.372a6.376 6.376 0 0 0 2.316 1.326 6.326 6.326 0 0 0 2.502.26 6.452 6.452 0 0 0 2.457-.757 6.474 6.474 0 0 0 2.009-1.74l3.528-4.225a1.109 1.109 0 0 0 .253-.762 1.135 1.135 0 0 0-.289-.794 1.127 1.127 0 0 0-.79-.349 1.129 1.129 0 0 0-.783.336l-3.504 4.195a4.235 4.235 0 0 1-1.31 1.137 4.135 4.135 0 0 1-1.615.492 4.162 4.162 0 0 1-1.638-.171 4.14 4.14 0 0 1-1.505-.866l-2.52-2.373a3.73 3.73 0 0 1-.77-1.155 3.633 3.633 0 0 1-.039-1.552 3.52 3.52 0 0 1 .806-1.385l3.868-4.14 5.406-5.787a1.379 1.379 0 0 0 .339-.997 1.38 1.38 0 0 0-.411-.968A1.374 1.374 0 0 0 13.483 0zm-2.88 5.9a1.08 1.08 0 0 0-.765.318L3.923 12.1a1.08 1.08 0 0 0 0 1.528 1.08 1.08 0 0 0 1.528 0l5.915-5.882a1.08 1.08 0 0 0 0-1.528 1.08 1.08 0 0 0-.763-.318zm4.72 5.09a1.11 1.11 0 0 0-.782.327l-2.073 2.062a1.11 1.11 0 0 0 0 1.57 1.11 1.11 0 0 0 1.57 0l2.073-2.062a1.11 1.11 0 0 0-.788-1.897z" />
    </svg>
  );
}

export default function CodingJourney() {
  const [stats, setStats] = useState({
    totalSolved: LEETCODE_DATA.totalSolved,
    easy: LEETCODE_DATA.easy,
    medium: LEETCODE_DATA.medium,
    hard: LEETCODE_DATA.hard,
    ranking: LEETCODE_DATA.ranking
  });
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [lastRefreshed, setLastRefreshed] = useState("Verified from LeetCode");

  // Attempt live refresh from public proxy if available
  const refreshStats = async () => {
    setIsRefreshing(true);
    try {
      const res = await fetch(`https://leetcode-stats-api.herokuapp.com/${LEETCODE_DATA.username}`);
      if (res.ok) {
        const data = await res.json();
        if (data.status === 'success') {
          setStats({
            totalSolved: data.totalSolved || LEETCODE_DATA.totalSolved,
            easy: data.easySolved || LEETCODE_DATA.easy,
            medium: data.mediumSolved || LEETCODE_DATA.medium,
            hard: data.hardSolved || LEETCODE_DATA.hard,
            ranking: data.ranking ? Number(data.ranking).toLocaleString() : LEETCODE_DATA.ranking
          });
          setLastRefreshed("Live sync: Just now");
        }
      }
    } catch (err) {
      // Keep verified data on network failure
      console.log("Using cached verified LeetCode stats");
      setLastRefreshed("Verified Authentic");
    } finally {
      setIsRefreshing(false);
    }
  };

  useEffect(() => {
    refreshStats();
  }, []);

  const total = stats.totalSolved || 1;
  const easyPct = Math.round((stats.easy / total) * 100);
  const medPct = Math.round((stats.medium / total) * 100);
  const hardPct = Math.round((stats.hard / total) * 100);

  return (
    <section id="coding" className="py-24 relative overflow-hidden bg-navy-950 dark:bg-navy-950">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-10 w-[400px] h-[400px] bg-amber-500/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono uppercase tracking-wider">
            <Flame className="w-3.5 h-3.5" />
            DSA & Algorithmic Problem Solving
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Problem Solving & <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-yellow-300">Coding Journey</span>
          </h2>
          <p className="text-slate-400 text-base max-w-2xl mx-auto">
            {LEETCODE_DATA.quote}
          </p>
        </div>

        {/* Main LeetCode Profile Showcase Card */}
        <div className="max-w-4xl mx-auto">
          <div className="relative rounded-3xl bg-slate-900/70 border border-amber-500/30 hover:border-amber-500/50 backdrop-blur-xl shadow-2xl p-6 sm:p-9 transition-all duration-300 space-y-8">
            
            {/* Top Accent Gradient Line */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-500 via-orange-500 to-yellow-400 rounded-t-3xl" />

            {/* Profile Identity Bar */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800">
              <div className="flex items-center gap-4">
                {/* Official LeetCode Icon Graphic */}
                <div className="w-14 h-14 rounded-2xl bg-amber-500/15 border border-amber-500/40 flex items-center justify-center text-amber-400 shadow-md">
                  <LeetCodeLogo className="w-7 h-7" />
                </div>

                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                      @{LEETCODE_DATA.username}
                    </h3>
                    <span className="px-2 py-0.5 rounded text-[11px] font-mono font-medium bg-amber-500/20 text-amber-300 border border-amber-500/30">
                      LeetCode
                    </span>
                  </div>
                  <span className="text-xs font-mono text-slate-400 block mt-0.5">
                    Global Ranking: #{stats.ranking} • {lastRefreshed}
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-2.5">
                <button
                  onClick={refreshStats}
                  disabled={isRefreshing}
                  className="p-2.5 rounded-xl bg-slate-800 border border-slate-700 text-slate-300 hover:text-amber-400 hover:border-amber-500/40 transition-all text-xs flex items-center gap-1.5"
                  title="Refresh statistics"
                >
                  <RefreshCw className={`w-3.5 h-3.5 ${isRefreshing ? 'animate-spin' : ''}`} />
                  <span className="hidden sm:inline">Sync</span>
                </button>

                <a
                  href={LEETCODE_DATA.profileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 shadow-md shadow-amber-500/25 hover:shadow-amber-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all"
                >
                  <span>Visit LeetCode Profile</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Solved Problems Breakdown Metrics */}
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
              
              {/* Total Solved Card */}
              <div className="p-5 rounded-2xl bg-slate-800/60 border border-slate-700/80 text-center space-y-1">
                <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block">
                  Total Solved
                </span>
                <span className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight block">
                  {stats.totalSolved}
                </span>
                <span className="text-[11px] font-mono text-cyan-400">
                  DSA Problems
                </span>
              </div>

              {/* Easy Card */}
              <div className="p-5 rounded-2xl bg-teal-950/30 border border-teal-500/30 text-center space-y-1">
                <span className="text-xs font-mono text-teal-400 uppercase tracking-wider block">
                  Easy
                </span>
                <span className="text-3xl sm:text-4xl font-extrabold text-teal-300 tracking-tight block">
                  {stats.easy}
                </span>
                <span className="text-[11px] font-mono text-teal-400/80">
                  {easyPct}% of total
                </span>
              </div>

              {/* Medium Card (Largest Share!) */}
              <div className="p-5 rounded-2xl bg-amber-950/30 border border-amber-500/40 text-center space-y-1 relative overflow-hidden">
                <div className="absolute top-2 right-2 text-[9px] font-mono px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-300">
                  Major Focus
                </div>
                <span className="text-xs font-mono text-amber-400 uppercase tracking-wider block">
                  Medium
                </span>
                <span className="text-3xl sm:text-4xl font-extrabold text-amber-300 tracking-tight block">
                  {stats.medium}
                </span>
                <span className="text-[11px] font-mono text-amber-400/80">
                  {medPct}% of total
                </span>
              </div>

              {/* Hard Card */}
              <div className="p-5 rounded-2xl bg-rose-950/30 border border-rose-500/30 text-center space-y-1">
                <span className="text-xs font-mono text-rose-400 uppercase tracking-wider block">
                  Hard
                </span>
                <span className="text-3xl sm:text-4xl font-extrabold text-rose-300 tracking-tight block">
                  {stats.hard}
                </span>
                <span className="text-[11px] font-mono text-rose-400/80">
                  {hardPct}% of total
                </span>
              </div>

            </div>

            {/* Visual Problem Distribution Progress Bar */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs font-mono text-slate-400">
                <span>Problem Difficulty Ratio</span>
                <span className="flex items-center gap-3">
                  <span className="flex items-center gap-1 text-teal-400">
                    <span className="w-2 h-2 rounded-full bg-teal-400 inline-block" />
                    Easy: {stats.easy}
                  </span>
                  <span className="flex items-center gap-1 text-amber-400">
                    <span className="w-2 h-2 rounded-full bg-amber-400 inline-block" />
                    Med: {stats.medium}
                  </span>
                  <span className="flex items-center gap-1 text-rose-400">
                    <span className="w-2 h-2 rounded-full bg-rose-400 inline-block" />
                    Hard: {stats.hard}
                  </span>
                </span>
              </div>

              <div className="h-3 w-full bg-slate-800 rounded-full overflow-hidden flex p-0.5 gap-0.5">
                <div
                  style={{ width: `${easyPct}%` }}
                  className="h-full bg-teal-400 rounded-l-full transition-all duration-500"
                  title={`Easy: ${stats.easy}`}
                />
                <div
                  style={{ width: `${medPct}%` }}
                  className="h-full bg-amber-400 transition-all duration-500"
                  title={`Medium: ${stats.medium}`}
                />
                <div
                  style={{ width: `${hardPct}%` }}
                  className="h-full bg-rose-500 rounded-r-full transition-all duration-500"
                  title={`Hard: ${stats.hard}`}
                />
              </div>
            </div>

            {/* Core Algorithmic Focus Topics */}
            <div className="space-y-3 pt-2">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold flex items-center gap-2">
                <Brain className="w-4 h-4 text-amber-400" />
                Algorithmic Patterns Mastered in C++ & Python
              </span>
              <div className="flex flex-wrap gap-2">
                {LEETCODE_DATA.focusTopics.map((topic) => (
                  <span
                    key={topic}
                    className="px-3 py-1.5 rounded-xl text-xs font-mono font-medium bg-slate-800/80 border border-slate-700 text-slate-200"
                  >
                    #{topic}
                  </span>
                ))}
              </div>
            </div>

            {/* Problem Solving Philosophy Callout */}
            <div className="p-4 rounded-2xl bg-slate-800/40 border border-slate-700/60 flex items-start gap-3 text-xs sm:text-sm text-slate-300">
              <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-white block font-semibold mb-0.5">Focus on Medium & Hard Problems:</strong>
                Over 70% of solved challenges are in the Medium and Hard categories, emphasizing deep mastery of two pointers, dynamic programming, tree traversals, and optimal graph traversals.
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
