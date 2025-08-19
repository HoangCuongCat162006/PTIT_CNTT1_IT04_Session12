import React from "react";

export const UserLayout: React.FC = () => {
  const Header = () => (
    <header
      style={{
        color: "grey",
        backgroundColor: "#cbd5e1",
        padding: "10px",
        textAlign: "center",
        marginTop: "20px",
      }}
    >
      Header
    </header>
  );
  const Nav = () => (
    <nav style={{ color: "grey", backgroundColor: "#5e6269ff" }}>
      Navigation
    </nav>
  );

  const Menu = () => (
    <aside
      style={{
        color: "black",
        backgroundColor: "#16a34a",
        padding: "10px",
        minWidth: "150px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      Menu
    </aside>
  );

  const Cart = () => (
    <div
      style={{
        background: "#f3f4f6",
        border: "1px solid #e5e7eb",
        borderRadius: "4px",
        padding: "20px",
        textAlign: "center",
      }}
    >
      Cart
    </div>
  );

    const Main = () => (
    <main
      style={{
        flex: 1,
        padding: "20px",
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "8px",
        background: "#fef2f2",
        color:"black"
      }}
    >
      {Array.from({ length: 12 }).map((_, index) => (
        <Cart key={index} />
      ))}
    </main>
  );

    const Article = () => (
    <aside
      style={{
        background: "#93c5fd",
        minWidth: "150px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color:"black"
      }}
    >
      Article
    </aside>
    )



  return (
    <div>
      <Header />
      <Nav />

      <div style={{display:"flex"}}>
        <Menu />
        <Main/>
        <Article/>
      </div>
    </div>
  );
};
