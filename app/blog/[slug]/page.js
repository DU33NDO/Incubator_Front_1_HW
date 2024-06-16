"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function Post({ params }) {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const reverseSlug = (slug) => {
    return slug
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  const normalSlug = reverseSlug(params.slug.toLowerCase());

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(
          `/api/blocks?title=${encodeURIComponent(normalSlug)}`
        );
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setPost(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [normalSlug]);

  if (loading) {
    return <p className="text-gray-500">Loading...</p>;
  }

  if (error) {
    return <p className="text-red-500">Error: {error}</p>;
  }

  if (!post) {
    return <p className="text-gray-500">Post not found.</p>;
  }

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-md mt-10">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">{post.title}</h1>
      <p className="text-gray-500 mb-2">{post.author}</p>
      <p className="text-gray-500 mb-6">{post.date}</p>
      <p className="text-gray-700 leading-relaxed">{post.description}</p>
    </div>
  );
}
