"use client";

export default function GlobalError({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-red-600 text-2xl font-bold">Something went wrong!</h1>
      <p className="text-gray-600 mt-2">{error.message}</p>

      <button
        onClick={reset}
        className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg"
      >
        Retry
      </button>
    </div>
  );
}
