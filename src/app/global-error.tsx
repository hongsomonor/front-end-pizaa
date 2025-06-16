// app/global-error.tsx

"use client"; // This must be a client component

import { useEffect } from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    // ឧ. បញ្ជូនកំហុសទៅ logging service
    console.error("Global error:", error);
  }, [error]);

  return (
    <html>
      <body>
        <h2>មានបញ្ហាមួយកើតឡើង!</h2>
        <p>{error.message}</p>
        <button onClick={() => reset()}>សាកល្បងម្ដងទៀត</button>
      </body>
    </html>
  );
}
