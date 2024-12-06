import { useState } from "react";
import { useForm } from "react-hook-form";
import "./App.css";

function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const delay = (d) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, d * 1000);
    });
  };

  const onSubmit = async (data) => {
    await delay(2);
    console.log(data);
  }

  return (
    <>
      <div className="container">
        <form action="" onSubmit={handleSubmit(onSubmit)}>
          <input
            placeholder="username"
            {...register("username", {
              required: { value: true, message: "This field is required!" },
              minLength: { value: 3, message: "Minimum length is 3" },
              maxLength: { value: 8, message: "Maximum length is 3" },
            })}
            type="text"
            name="username"
          />
          {/* {errors.username && <div className='red'>There is some error</div>} */}
          {errors.username && (
            <div className="red">{errors.username.message}</div>
          )}
          <br />
          <input
            placeholder="password"
            {...register("password")}
            type="password"
            name="password"
            id=""
          />
          <br />
          <input type="submit" value="submit" />
        </form>
      </div>
    </>
  );
}

export default App;
