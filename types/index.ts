import { StaticImageData } from "next/image";

export interface CustomAuthProps {
  name: string;
  image: StaticImageData;
  redirectUrl: string;
  signingMethod: string;
}
