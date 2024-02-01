export const Layout = () => {
  return (
    <div
      style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}
    >
      <header>header</header>
      <main style={{ flexGrow: 1 }}>main</main>
      <footer>footer</footer>
    </div>
  );
};
