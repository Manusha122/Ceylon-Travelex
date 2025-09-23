import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="text-center animate-fade-in">
          <div className="mb-8">
            <h1 className="font-heading text-8xl lg:text-9xl font-bold bg-gradient-luxury bg-clip-text text-transparent mb-4">
              404
            </h1>
            <h2 className="font-heading text-2xl lg:text-3xl font-semibold text-foreground mb-4">
              Destination Not Found
            </h2>
            <p className="font-body text-lg text-muted-foreground max-w-md mx-auto leading-relaxed">
              The page you're looking for seems to have wandered off the beaten path. 
              Let's get you back to exploring Ceylon's wonders.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild variant="default" size="lg" className="min-w-[160px]">
              <Link to="/">
                <Home className="mr-2 w-5 h-5" />
                Return Home
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="min-w-[160px]">
              <Link to="/destinations">
                <ArrowLeft className="mr-2 w-5 h-5" />
                View Destinations
              </Link>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
