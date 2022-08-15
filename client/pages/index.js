import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Greeting from "../components/Greeting";

export default function Home() {
  return (
    <>
      <Greeting />
      <Link href="/questionsAndAnswers">Questions and Answers</Link>
      <Link href="/about">About The Cabin</Link>
    </>
  );
}
