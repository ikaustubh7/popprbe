import Image from "next/image";
import styles from "./styles/page.module.css";
import Navbar from "./components/navbar";
import VideoCard from "./components/VideoCard";
import { BackgroundGradientAnimation } from "./ui/backgroundgradient/background-gradient-animation";


export default function Home() {
  return (
    <BackgroundGradientAnimation>

    <main>
    <Navbar />
    <VideoCard/>

    </main>
    </BackgroundGradientAnimation>

  );
}
