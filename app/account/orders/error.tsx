"use client";

function Error({ error }: { error: Error }) {
  return (
    <div className="flex h-full items-center justify-center">
      <p className="text-center text-2xl text-gray-700">{error.message}</p>
    </div>
  );
}

export default Error;
