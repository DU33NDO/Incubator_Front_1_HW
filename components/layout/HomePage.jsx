"use client";
import InfoBlock from "@/components/layout/InfoBlock";
import React, { useState, useEffect } from "react";

export default function HomePage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/blocks");
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex flex-wrap justify-center md:justify-start mb-20">
      {data.map((item) => (
        <InfoBlock key={item.id} props={item} />
      ))}
    </div>
  );
}
