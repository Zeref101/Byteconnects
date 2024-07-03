import { StaticImageData } from "next/image";
import { User } from 'firebase/auth';
export interface CustomAuthProps {
  name: string;
  image: StaticImageData;
  redirectUrl: string;
  signingMethod: string;
  handleClick: () => void;
}

export interface AuthContextType {
  emailSignUp?: (
    username: string,
    email: string,
    password: string
  ) => Promise<void>;
  signInWithGoogle: () => Promise<void>;
  loading: boolean;
  emailSignIn?: (
    email: string,
    password: string
  ) => Promise<void>;
  user?: User;
}