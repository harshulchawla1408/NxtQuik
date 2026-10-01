import { Link } from "react-router-dom";
import { Mark } from "@/components/site/Brand";
import { useSEO } from "@/lib/seo";

export function NotFoundPage() {
  useSEO({
    title: "404 — Page Not Found | NxtQuik",
    description: "The page you're looking for doesn't exist or has been moved.",
    path: "/404",
    noindex: true,
  });

  return (
    <div className="surface-navy flex min-h-screen items-center justify-center px-4">
      <div className="max-w-md text-center">
        <Mark transparent className="mx-auto h-16" />
        <h1 className="mt-8 font-display text-7xl font-semibold">404</h1>
        <h2 className="mt-4 text-xl font-semibold">Looks like this page went somewhere else.</h2>
        <p className="mt-2 text-sm text-navy-muted">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-8">
          <Link to="/" className="btn-base btn-primary">
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}
