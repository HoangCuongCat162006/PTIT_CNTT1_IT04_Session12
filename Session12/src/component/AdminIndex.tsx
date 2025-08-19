import React from "react";

const AdminIndex: React.FC = () => {
  const Header = () => (
    <header
      style={{
        background: "#d1d5db",
        padding: "10px",
        textAlign: "center",
        color:"black"
      }}
    >
      Header
    </header>
  );

  const Menu = () => (
    <aside
      style={{
        background: "#1e3a8a",
        color: "black",
        padding: "10px",
        minWidth: "200px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      Menu
    </aside>
  );

  const Main = () => (
    <main
      style={{
        flex: 1,
        padding: "20px",
        background: "#ffffff",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color:"black"
      }}
    >
      Main
    </main>
  );

  const Footer = () => (
    <footer
      style={{
        background: "#cbd5e1",
        padding: "10px",
        textAlign: "center",
        color:"black"
      }}
    >
      Footer
    </footer>
  );

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <Header />
      <div style={{ display: "flex", flex: 1 }}>
        <Menu />
        <Main />
      </div>
      <Footer />
    </div>
  );
};

export default AdminIndex;
