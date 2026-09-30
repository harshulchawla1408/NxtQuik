import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }) => {
    const slug = params.slug === "gabrulooks" ? "gabru-looks" : params.slug;
    throw redirect({ to: "/work/$slug", params: { slug }, statusCode: 301 });
  },
});
