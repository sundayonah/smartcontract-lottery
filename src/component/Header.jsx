import { useEffect } from "react"
import { useMoralis } from "react-moralis"

export const Header = () => {
    const {
        enableWeb3,
        account,
        isWeb3Enabled,
        Moralis,
        deactivateWeb3,
        isWeb3EnableLoading,
    } = useMoralis()

    useEffect(() => {
        if (isWeb3Enabled) return
        if (typeof window != "undefined") {
            if (window.localStorage.getItem("Connected")) {
                enableWeb3()
            }
        }
    }, [isWeb3Enabled])

    useEffect(() => {
        Moralis.onAccountChanged((account) => {
            if (account == null) {
                window.localStorage.removeItem("Connected")
            }
        })
    }, [])

    return (
        <>
            {account ? (
                <div>
                    Connected to {account.slice(0, 6)}...
                    {account.slice(account.length - 4)}
                </div>
            ) : (
                <button
                    onClick={async () => {
                        await enableWeb3()
                        if (typeof window !== "undefined") {
                            window.localStorage.setItem("Connected", "injected")
                        }
                    }}
                    disabled={isWeb3EnableLoading}
                >
                    Connect Wallet
                </button>
            )}
        </>
    )
}
