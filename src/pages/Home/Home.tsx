import { Button } from "@/components/common";
import { env } from "@/config/env";

export function HomePage() {
  return (
    <main>
      <h1>{env.appName}</h1>
      <p>Edit `src/pages/Home/Home.tsx` and save to test hot module replacement.</p>
      <Button onClick={() => alert("Hello from the template!")}>Click me</Button>
    </main>
  );
}
