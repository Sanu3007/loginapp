import React from "react";

const Loginpage = ({
  email,
  password,
  setEmail,
  setPassword,
  handleSubmit,
}) => {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Login page</h1>
      <form
        onSubmit={(e) => handleSubmit(e, email, password)}
        style={{
          // border: "2px solid black",
          display: "grid",
          placeItems: "center",
        }}
      >
        <div
          style={{
            // border: "2px solid green",
            margin: "1rem",
            display: "grid",
            gridTemplateColumns: "1fr 2fr",
            columnGap: "1rem",
            padding: "1px 6px",
          }}
        >
          <label id="email" style={{ fontSize: "2rem" }}>
            Email
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ fontSize: "1.2rem", padding: "3px" }}
          />
        </div>
        <div
          style={{
            // border: "2px solid green",
            margin: "1rem",
            display: "grid",
            gridTemplateColumns: "1fr 2fr",
            padding: "1px 6px",
            columnGap: "1rem",
          }}
        >
          <label id="password" style={{ fontSize: "2rem" }}>
            Password
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ fontSize: "1.2rem", padding: "3px" }}
          />
        </div>
        <button
          type="submit"
          style={{
            background: "transparent",
            border: "none",
            backgroundColor: "green",
            fontSize: "1.4rem",
            padding: ".5rem 2.4rem",
            color: "white",
            borderRadius: ".5rem",
            cursor: "pointer",
          }}
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Loginpage;
