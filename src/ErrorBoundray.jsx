import React, { useState, useEffect } from "react";

function ErrorBoundary({ children }) {
  const [hasError, setHasError] = useState(false);
  async function fetchMoives() {
    try {
      let data = await fetch("jfalfhagalgjlKHK");

      return data;
    } catch (error) {
      setHasError(true);
    }
  }

  useEffect(() => {
    fetchMoives();
  }, []);

  return hasError ? <div>Ah, Something wrong happend!!</div> : children;
}

export default ErrorBoundary;
