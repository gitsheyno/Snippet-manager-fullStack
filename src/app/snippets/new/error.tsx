"use client";

type ErrorProps = {
  error: Error;
  reset: () => void;
};
export default function ErrorPage({ error }: ErrorProps) {}
