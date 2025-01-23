import { Button } from "~/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export default function Home() {
  const { setTheme } = useTheme();
  return (
    <>
      <main className="bg-background absolute inset-0 flex h-full min-h-screen w-full flex-col items-center justify-center gap-y-8 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]">
        <h1 className="sm:text-[5rem text-4xl font-extrabold tracking-tight text-black dark:text-white">
          Hello World
        </h1>
        <Button>Ayo sentuh aku</Button>
        <Button onClick={() => setTheme("dark")} size="icon">
          <Moon />
        </Button>
        <Button onClick={() => setTheme("light")} size="icon">
          <Sun />
        </Button>
      </main>
    </>
  );
}
