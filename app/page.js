"use client"
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to '/home' when the page is loaded
    router.push('/Home');
  }, [router]);

  // Optional, since the user will be redirected immediately

  return (
    null
  );
}
