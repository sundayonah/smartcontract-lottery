import React from "react"
import { MainHeader } from "../components/MainHeader"
// import { LotteryEntrance } from "../component/MainHeader"
// import { Header } from "@/component/Header"
import { LotteryEntrance } from "@/components/LotteryEntrance"

// const inter = Inter({ subsets: ["latin"] })

export default function Home() {
    return (
        <main>
            {/* <Header /> */}
            <MainHeader />
            <LotteryEntrance />
        </main>
    )
}
