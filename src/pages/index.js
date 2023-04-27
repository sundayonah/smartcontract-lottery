import React from "react"
import { MainHeader } from "../component/MainHeader"
// import { LotteryEntrance } from "../component/MainHeader"
// import { Header } from "@/component/Header"
import { LotteryEntrance } from "@/component/LotteryEntrance"

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
