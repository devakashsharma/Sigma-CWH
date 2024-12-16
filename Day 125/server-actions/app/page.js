import { submitAction } from "@/actions/form";

export default function Home() {

  return (
    <div className="w-2/3 m-auto">
      <form action={submitAction} className="mt-[10%]">
        <div>
          <label htmlFor="name">Name: </label>
          <input type="text" name="name" id="name" className="text-black my-5" />
        </div>
        <div>
          <label htmlFor="add">Address: </label>
          <input type="text" name="add" id="add" className="text-black" />
        </div>
        <div>
          <button className="border border-white px-2 py-1 mt-5">Submit</button>
        </div>
      </form>
    </div>
  );
}
