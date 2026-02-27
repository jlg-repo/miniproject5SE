const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-10">
      <div className="footer footer-center bg-base-200 text-base-content rounded-box p-6">
        <div className="max-w-2xl">
          <p className="font-semibold">Movie Browser</p>
          <p className="text-sm opacity-70">
            Browse, filter, and sort movies by genre, age rating, and IMDb score.
          </p>
          <p className="text-xs opacity-60 mt-2">© {year} Movie Browser</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
