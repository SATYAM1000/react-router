import React from "react";
import { Form, redirect, useLoaderData } from "react-router-dom";
export const loader = async ({ request, params }: any) => {
  const searchParams = new URL(request.url).searchParams;
  const id = searchParams.get("id");
  const isLoggedIn = true;
  if (!isLoggedIn) {
    throw redirect("/");
  }
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos`);
  const data = await res.json();

  return data;
};
export const action = async ({ request, params }: any) => {
  console.log("action is called");
  const formData = await request.formData();
  console.log("formdata data is ", Object.fromEntries(formData));
  const title = formData.get("title");
  const email = formData.get("email");
  const files = formData.getAll("files[]");
  files.forEach((file: any) => {
    console.log(file);
  });
  console.log(title, email);
  return null;
  //   return redirect("/");
};

export const Items = () => {
  const data = useLoaderData();
  return (
    <div>
      Item
      <div className="w-full flex items-center justify-center">
        <Form method="post">
          <input
            type="text"
            name="title"
            className="mr-2 flex items-center border border-gray-200 placeholder:text-gray-500 text-black"
          />
          <input
            type="email"
            name="email"
            className="mr-2 flex items-center border border-gray-200 placeholder:text-gray-500 text-black"
          />
          <input
            type="file"
            name="files[]"
            multiple
            className="mr-2 flex items-center border border-gray-200 placeholder:text-gray-500 text-black"
          />
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Submit
          </button>
        </Form>
      </div>
    </div>
  );
};
