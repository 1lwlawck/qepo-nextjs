import Link from "next/link";

export const Header = () => {
  return (
    <header className="md:h-15 flex h-16 items-center justify-between border-b-2 border-border bg-secondary px-4 md:px-8">
      <Link
        href={"/"}
        className="text-2xl font-bold text-primary hover:cursor-pointer md:text-3xl"
      >
        Qepo
      </Link>
    </header>
  );
};
