"use client";

import React, { useState } from "react";
import { SearchManufacturer } from ".";
import Image from "next/image";
import { useRouter } from "next/navigation";

const SearchButton = ({ otherClasses }: { otherClasses: string }) => {
  return (
    <button type="submit" className={`-m-3 z-10 ${otherClasses}`}>
      <Image
        src="/magnifying-glass.svg"
        width={40}
        height={40}
        alt="magnifying glass"
      />
    </button>
  );
};

function SearchBar() {
  const [manufacturer, setManufacturer] = useState("");
  const [model, setModel] = useState("");
  const router = useRouter();

  const handelSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (manufacturer === "" && model === "") {
      alert("Please enter a manufacturer or model or both");
    } else {
      updateSearchParams(model.toLowerCase(), manufacturer.toLowerCase());
    }
  };

  const updateSearchParams = (model: string, manufacturer: string) => {
    const searchParams = new URLSearchParams(window.location.search);
    searchParams.set("limit", "10");

    if (model) {
      searchParams.set("model", model);
    } else {
      searchParams.delete("model");
    }

    if (manufacturer) {
      searchParams.set("manufacturer", manufacturer);
    } else {
      searchParams.delete("manufacturer");
    }

    const newPathName = `${
      window.location.pathname
    }?${searchParams.toString()}`;
    router.push(newPathName);
  };
  return (
    <form className="searchbar" onSubmit={handelSearch}>
      <div className="searchbar__item">
        <SearchManufacturer
          manufacturer={manufacturer}
          setManufacturer={setManufacturer}
        />
        <SearchButton otherClasses=" sm:hidden" />
      </div>
      <div className="searchbar__item">
        <Image
          src="/model-icon.png"
          width={25}
          height={25}
          alt="model icon"
          className=" absolute ml-4"
        />
        <input
          type="text"
          placeholder="Tiguan"
          className="searchbar__input"
          onChange={(e) => setModel(e.target.value)}
          value={model}
        />
        <SearchButton otherClasses=" sm:hidden" />
      </div>
      <SearchButton otherClasses=" max-sm:hidden" />
    </form>
  );
}

export default SearchBar;
