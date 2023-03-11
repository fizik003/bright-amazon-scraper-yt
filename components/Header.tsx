"use client";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import React, { FormEvent, useRef } from "react";

export const Header = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const input = inputRef.current?.value;
    if (input) {
      inputRef.current.value = "";
    }

    try {
    } catch (error) {}
  };

  return (
    <header>
      <form
        className="flex items-center space-x-2 justify-center rounded-full py-2 px-4 bg-indigo-100 max-w-md mx-auto"
        onSubmit={handleSearch}
      >
        <input
          type="text"
          placeholder="Search..."
          className="flex-1 outline-none bg-transparent text-indigo-400 placeholder:text-indigo-300"
          ref={inputRef}
        />
        <button hidden> search</button>
        <MagnifyingGlassIcon className="h-6 w-6 text-indigo-300" />
      </form>
    </header>
  );
};
