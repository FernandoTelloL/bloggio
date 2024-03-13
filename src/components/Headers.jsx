import { Navbar } from "./Navbar";
import { Logo } from "./Logo";

export const Headers = () => {
  return (
    <header className="flex justify-between items-center mb-14 md:mb-0 ">
      <Logo />
      <Navbar />
    </header>
  );
};
