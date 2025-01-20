import React from "react";
import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError() as { message: string };

  return (
    <div className="w-full min-h-screen flex items-center justify-center">
      <pre className="text-2xl font-semibold text-red-500">{error.message}</pre>
    </div>
  );
};

export default Error;
