"use client"
import Button from "@/components/Button";
import { useSession, signIn, signOut } from "next-auth/react"

export default function Home() {
  return (
    <>
      <div className="flex flex-col justify-center items-center text-white h-[44vh] gap-4">
        <div className="capitalize font-bold text-5xl flex justify-center items-center">
          Buy me a Chai{" "}
          <span>
            <img src="/tea.gif" alt="tea" width={90} />
          </span>{" "}
        </div>
        <p>
          A crowdfunding platform for creators. Get funded by your fans and
          followers. Start Now!
        </p>
        <div>
          <Button title="Start Now" />
          <Button title="Read More" />
        </div>
      </div>
      <hr className="opacity-30" />

      <div className="text-white container mx-auto pb-20 pt-14">
        <h1 className="text-2xl font-bold text-center mb-11">
          Your fans can buy you a Chai
        </h1>
        <div className="flex gap-5 justify-around">
          <div className="item space-y-3 flex flex-col items-center justify-center">
            <img
              className="bg-slate-400 rounded-full p-2"
              src="/man.gif"
              alt=""
              width={90}
            />
            <p className="font-bold">Fund Yourself</p>
            <p className="text-center">
              Your fans are available for you to help you
            </p>
          </div>

          <div className="item space-y-3 flex flex-col items-center justify-center">
            <img
              className="bg-slate-400 rounded-full p-2"
              src="/coin.gif"
              alt=""
              width={90}
            />
            <p className="font-bold">Fund Yourself</p>
            <p className="text-center">
              Your fans are available for you to help you
            </p>
          </div>

          <div className="item space-y-3 flex flex-col items-center justify-center">
            <img
              className="bg-slate-400 rounded-full p-2"
              src="/group.gif"
              alt=""
              width={90}
            />
            <p className="font-bold">Fund Yourself</p>
            <p className="text-center">
              Your fans are available for you to help you
            </p>
          </div>
        </div>
      </div>

      <hr className="opacity-30" />

      <div className="text-white container mx-auto pb-20 pt-14">
        <h1 className="text-2xl font-bold text-center mb-11">
          Your fans can buy you a Chai
        </h1>
        <div className="flex gap-5 justify-around">
          <div className="item space-y-3 flex flex-col items-center justify-center">
            <img
              className="bg-slate-400 rounded-full p-2"
              src="/man.gif"
              alt=""
              width={90}
            />
            <p className="font-bold">Fund Yourself</p>
            <p className="text-center">
              Your fans are available for you to help you
            </p>
          </div>

          <div className="item space-y-3 flex flex-col items-center justify-center">
            <img
              className="bg-slate-400 rounded-full p-2"
              src="/coin.gif"
              alt=""
              width={90}
            />
            <p className="font-bold">Fund Yourself</p>
            <p className="text-center">
              Your fans are available for you to help you
            </p>
          </div>

          <div className="item space-y-3 flex flex-col items-center justify-center">
            <img
              className="bg-slate-400 rounded-full p-2"
              src="/group.gif"
              alt=""
              width={90}
            />
            <p className="font-bold">Fund Yourself</p>
            <p className="text-center">
              Your fans are available for you to help you
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
