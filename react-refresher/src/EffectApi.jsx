import React, { useEffect, useState } from "react";

const EffectApi = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchGithubData = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(
          "https://api.github.com/users/greeky-tarun",
        );
        if (!response.ok) throw new Error("Unable to load this profile.");
        const profile = await response.json();
        setData(profile);
      } catch (err) {
        setError(err.message || "Something went wrong. Please try again.");
      } finally {
        setIsLoading(false);
      }
    };
    fetchGithubData();
  }, []);

  return (
    <main className="profile-page">
      <style>{`
        * { box-sizing: border-box; }
        .profile-page {
          min-height: 100vh;
          display: grid;
          place-items: center;
          padding: 24px;
          background: #080d0a;
          color: #e7eee9;
          font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
        }
        .profile-card {
          width: min(100%, 440px);
          padding: 32px;
          border: 1px solid #1e3025;
          border-radius: 20px;
          background: linear-gradient(145deg, #101a13, #0c130f 72%);
          box-shadow: 0 24px 70px #0008;
        }
        .profile-top { display: flex; align-items: center; gap: 18px; }
        .avatar {
          width: 76px;
          height: 76px;
          flex: 0 0 auto;
          border-radius: 50%;
          border: 2px solid #3ddc84;
          object-fit: cover;
          background: #17231b;
        }
        .eyebrow { margin: 0 0 5px; color: #70dc9c; font-size: 11px; font-weight: 700; letter-spacing: .14em; text-transform: uppercase; }
        .name { margin: 0; font-size: 22px; line-height: 1.25; letter-spacing: -.03em; }
        .handle { margin: 5px 0 0; color: #94a49a; font-size: 14px; }
        .bio { margin: 24px 0; color: #b7c4bb; font-size: 14px; line-height: 1.65; }
        .stats { display: grid; grid-template-columns: repeat(3, 1fr); padding: 18px 0; border-top: 1px solid #203128; border-bottom: 1px solid #203128; }
        .stat { text-align: center; }
        .stat + .stat { border-left: 1px solid #203128; }
        .stat-value { display: block; color: #f0f6f1; font-size: 18px; font-weight: 700; }
        .stat-label { display: block; margin-top: 4px; color: #91a197; font-size: 11px; }
        .profile-link {
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 44px;
          margin-top: 22px;
          border-radius: 10px;
          background: #3ddc84;
          color: #07120b;
          font-size: 13px;
          font-weight: 700;
          text-decoration: none;
          transition: background .2s, transform .2s;
        }
        .profile-link:hover { background: #63e99e; transform: translateY(-1px); }
        .status { margin: 0; color: #aab8ae; font-size: 14px; text-align: center; }
        .status.error { color: #ff9a9a; }
        @media (max-width: 480px) { .profile-card { padding: 24px; } .name { font-size: 19px; } }
      `}</style>

      <section className="profile-card" aria-live="polite">
        {isLoading && <p className="status">Loading GitHub profile…</p>}
        {!isLoading && error && <p className="status error">{error}</p>}
        {!isLoading && !error && data && (
          <>
            <div className="profile-top">
              <img
                className="avatar"
                src={data.avatar_url}
                alt={`${data.login}'s avatar`}
              />
              <div>
                <p className="eyebrow">GitHub profile</p>
                <h1 className="name">{data.name || data.login}</h1>
                <p className="handle">@{data.login}</p>
              </div>
            </div>
            <p className="bio">
              {data.bio || "Building and exploring on GitHub."}
            </p>
            <div className="stats">
              <div className="stat">
                <span className="stat-value">{data.public_repos}</span>
                <span className="stat-label">Repositories</span>
              </div>
              <div className="stat">
                <span className="stat-value">{data.followers}</span>
                <span className="stat-label">Followers</span>
              </div>
              <div className="stat">
                <span className="stat-value">{data.following}</span>
                <span className="stat-label">Following</span>
              </div>
            </div>
            <a
              className="profile-link"
              href={data.html_url}
              target="_blank"
              rel="noreferrer"
            >
              View GitHub profile <span aria-hidden="true">&nbsp;↗</span>
            </a>
          </>
        )}
      </section>
    </main>
  );
};

export default EffectApi;
