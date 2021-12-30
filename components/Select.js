import React from "react";
import { bgColor } from "../utils/BgTailwind";

export default function Select({ label, defaultValue, set }) {
  return (
    <div className="mt-2">
      <label className="text-sm font-medium text-white ">{label}</label>
      <select
        className="mt-1 block py-1 text-sm rounded-md outline-none ring-0 focus-none focus:ring-0 border-transparent"
        defaultValue={defaultValue}
        onChange={(e) => set(e.target.value)}
      >
        {bgColor.map((bg, id) => {
          return (
            <option value={bg} key={id}>
              {bg}
            </option>
          );
        })}
      </select>
    </div>
  );
}
