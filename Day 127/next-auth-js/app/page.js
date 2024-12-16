"use client"
import { useSession, signIn, signOut } from "next-auth/react"

export default function Component() {
  const { data: session } = useSession()
  console.log(session);
  if(session) {
    return <>
      Signed in as {session.user.email} <br/>
      <button onClick={() => signOut()}>Sign out</button>
    </>
  }
  return <>
    Not signed in <br/>
    {/* it will ask for sign in */}
    {/* <button onClick={() => signIn()}>Sign in</button> */} 

    {/* once authorized, then it will directly sign in without asking by giving name inside the signIn() */}
    <button onClick={() => signIn("github")}>Sign in using Github</button>
    <button onClick={() => signIn("google")}>Sign in using using</button>

  </>
}