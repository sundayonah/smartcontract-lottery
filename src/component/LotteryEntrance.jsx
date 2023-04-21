import { useWeb3Contract, useMoralis, useChain } from "react-moralis"
import { contractAddresses, abi } from "../../constants"
import { useEffect, useState } from "react"

export const LotteryEntrance = () => {
    const { chainId: chainHex, isWeb3Enabled } = useMoralis()
    const [entranceFee, setEntranceFee] = useState("0")
    const chainId = parseInt(chainHex)
    const raffleAddress =
        chainId in contractAddresses ? contractAddresses[chainId][0] : null
    const { runContractFunction: enterRaffle } = useWeb3Contract({
        abi: abi,
        contractAddress: contractAddresses,
        functionName: "enterRaffle",
        params: {},
        // msgValue://
    })

    const { runContractFunction: getEntranceFee } = useWeb3Contract({
        abi: abi,
        contractAddress: contractAddresses,
        functionName: " getEntranceFee",
        params: {},
    })

    useEffect(() => {
        if (isWeb3Enabled) {
            //try to rad the raffle entrance fee
            async function updateUi() {
                const entranceFeeFromCall = await getEntranceFee().toString()
                setEntranceFee(ethers.utils.formatUnits(entranceFeeFromCall))
            }
        }
    }, [isWeb3Enabled])

    return <div>LotteryEntrance Fee: {entranceFee} ETH</div>
}
