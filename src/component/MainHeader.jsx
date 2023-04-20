import { ConnectButton } from "web3uikit"

export const MainHeader = () => {
    return (
        <div>
            <h1>Decentralize Lottery</h1>
            <ConnectButton moralisAuth={false} />
        </div>
    )
}
