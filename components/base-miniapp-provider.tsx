"use client"

import { useEffect } from "react"
import { sdk } from "@farcaster/miniapp-sdk"

export function BaseMiniappProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Initialize Base mini-app SDK and signal that app is ready
    const initSDK = async () => {
      try {
        // Signal that the app is ready to display
        // This will hide the loading splash screen
        await sdk.actions.ready()
      } catch (error) {
        console.error("Failed to initialize Base mini-app SDK:", error)
      }
    }

    initSDK()
  }, [])

  return <>{children}</>
}

