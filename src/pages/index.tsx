import { MAIN_COLORS } from "constants/colors";
import { type NextPage } from "next";
import Discord from "next-auth/providers/discord";
import Head from "next/head";
import Link from "next/link";
import Banner from "~/components/containers/Banner";
import Header from "~/components/containers/Header";
import BitcoinIcon from "~/components/icons/BitcoinIcon";
import CalendarIcon from "~/components/icons/CalendarIcon";
import CardIcon from "~/components/icons/CardIcon";
import DiscordIcon from "~/components/icons/DiscordIcon";
import DribbleIcon from "~/components/icons/DribbleIcon";
import FigmaIcon from "~/components/icons/FigmaIcon";
import GithubIcon from "~/components/icons/GithubIcon";
import LinkedInIcon from "~/components/icons/LinkedInIcon";
import LocationIcon from "~/components/icons/LocationIcon";
import MessageIcon from "~/components/icons/MessageIcon";
import PlayIcon from "~/components/icons/PlayIcon";
import TelegramIcon from "~/components/icons/TelegramIcon";
import TwitterIcon from "~/components/icons/TwitterIcon";
import { api } from "~/utils/api";

const Home: NextPage = () => {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });

  const styles = {
    mainPage: `flex min-h-screen overflow-hidden flex-col items-center bg-gradient-to-b from-[${String(
      MAIN_COLORS.DARK_GREY
    )}] to-[${String(MAIN_COLORS.DARK_GREY)}]`,
    mainHeader: `font-Fira text-[${MAIN_COLORS.WHITE.toString()}] text-2xl`,
  };

  return (
    <>
      <Head>
        <title>Kioko Mutinda</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.mainPage}>
        <Header />
        <Banner />
      </main>
    </>
  );
};

export default Home;
