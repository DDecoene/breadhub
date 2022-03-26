import React from "react";
import Nav from "../components/nav";

export default function Home() {
  return (
      <main>
        <nav>
          <Nav />
        </nav>
        <article>Body</article>
        <aside>Aside</aside>
      </main>
  );
};
