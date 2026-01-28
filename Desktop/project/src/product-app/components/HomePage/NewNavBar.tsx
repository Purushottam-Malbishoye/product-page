const Navbar = () => {
  return (
    <nav className="w-full h-[72px] bg-gray-dark px-8 flex items-center justify-between">
      {/* Logo */}
      <div className="text-foreground font-semibold text-xl">
        FirstScience AI
      </div>

      {/* Navigation Links */}
      <div className="flex items-center gap-10">
        <a href="#" className="text-foreground text-sm font-medium hover:opacity-80">
          Home
        </a>
        <a href="#" className="text-foreground text-sm font-medium hover:opacity-80">
          Industries
        </a>
        <a href="#" className="text-foreground text-sm font-medium hover:opacity-80">
          How it works
        </a>
        <a href="#" className="text-foreground text-sm font-medium hover:opacity-80">
          Features
        </a>
      </div>

      {/* CTA Buttons */}
      <div className="flex items-center gap-3">
        <button className="btn-primary-small">
          Login
        </button>
        <button className="btn-primary-small">
          Watch Demo
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
