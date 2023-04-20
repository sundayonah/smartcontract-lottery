import Image from "next/image"
import { Inter } from "next/font/google"
import { Header } from "@/component/Header"
import { MainHeader } from "@/component/MainHeader"

const inter = Inter({ subsets: ["latin"] })

export default function Home() {
    return (
        <main>
            <Header />
            <MainHeader />
        </main>
    )
}
