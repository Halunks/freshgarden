import React from "react";

export default function useWindowSize() {
  if (typeof window !== "undefined") {
    return { width: 1200, height: 800 };
  }
}