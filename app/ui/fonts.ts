import { Inter, Lusitana } from "next/font/google";

export const inter = Inter({ subset: ["latin"] });

export const lusitana = Lusitana({
  subset: ["latin"],
  weight: ["400", "700"],
  preload: true,
});
