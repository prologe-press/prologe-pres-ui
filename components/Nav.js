import { Logo } from "./Logo";
import A from "./A";

// check nav in mobile browser before refactoring
export const Nav = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="relative flex flex-col justify-center items-center">
        <Logo />
        <A
          className="bluebar md:hidden"
          target="_blank"
          href="https://discord.gg/rf837mkdBW"
        >
          join our discord
        </A>
      </div>
    </div>
  );
};
