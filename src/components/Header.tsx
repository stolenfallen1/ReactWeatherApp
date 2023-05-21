import React from "react";

interface HeaderProps {
  location: string;
  setLocation: (location: string) => void;
  getLocation: (event: React.KeyboardEvent<HTMLInputElement>) => void;
}

const Header = ({ location, setLocation, getLocation }: HeaderProps) => {
  return (
    <div className="text-center pt-10">
      <h1 className="tracking-tighter pb-3 text-5xl font-bold text-white">
        WEATHER APP
      </h1>
      <input
        className="px-3 py-1 rounded text-xl bg-transparent border-2 text-white"
        value={location}
        onChange={(event) => setLocation(event.target.value)}
        onKeyPress={getLocation}
        type="text"
        placeholder="Search here...."
      />
    </div>
  );
};

export default Header;
