import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { Plus, MapPin, Calendar, Users, Download } from "lucide-react"

export default function DashboardPage() {
  // Mock data for demonstration
  const recentItineraries = [
    {
      id: 1,
      destination: "Tokyo, Japan",
      duration: "7 days",
      travelers: "2 people",
      date: "Dec 15-22, 2024",
      status: "Completed",
    },
    {
      id: 2,
      destination: "Paris, France",
      duration: "5 days",
      travelers: "Solo",
      date: "Jan 10-15, 2025",
      status: "In Progress",
    },
    {
      id: 3,
      destination: "Bali, Indonesia",
      duration: "10 days",
      travelers: "Family (4)",
      date: "Mar 5-15, 2025",
      status: "Draft",
    },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <div className="flex-1 py-8 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto space-y-8">
          {/* Header */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <h1 className="text-3xl font-bold text-foreground">Welcome back, John!</h1>
              <p className="text-muted mt-1">Ready to plan your next adventure?</p>
            </div>
            <Button asChild>
              <Link href="/travel-form">
                <Plus className="mr-2 h-4 w-4" />
                New Itinerary
              </Link>
            </Button>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center space-x-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  <div>
                    <p className="text-2xl font-bold text-card-foreground">12</p>
                    <p className="text-sm text-muted">Destinations</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center space-x-2">
                  <Calendar className="h-5 w-5 text-primary" />
                  <div>
                    <p className="text-2xl font-bold text-card-foreground">45</p>
                    <p className="text-sm text-muted">Travel Days</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center space-x-2">
                  <Users className="h-5 w-5 text-primary" />
                  <div>
                    <p className="text-2xl font-bold text-card-foreground">8</p>
                    <p className="text-sm text-muted">Travel Companions</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center space-x-2">
                  <Download className="h-5 w-5 text-primary" />
                  <div>
                    <p className="text-2xl font-bold text-card-foreground">5</p>
                    <p className="text-sm text-muted">Downloaded PDFs</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Recent Itineraries */}
          <Card>
            <CardHeader>
              <CardTitle>Recent Itineraries</CardTitle>
              <CardDescription>Your latest travel plans and adventures</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentItineraries.map((itinerary) => (
                  <div
                    key={itinerary.id}
                    className="flex flex-col sm:flex-row sm:items-center justify-between p-4 border border-border rounded-lg hover:bg-secondary/50 transition-colors"
                  >
                    <div className="space-y-1">
                      <h3 className="font-semibold text-card-foreground">{itinerary.destination}</h3>
                      <div className="flex flex-wrap gap-4 text-sm text-muted">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {itinerary.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="h-3 w-3" />
                          {itinerary.duration}
                        </span>
                        <span className="flex items-center gap-1">
                          <Users className="h-3 w-3" />
                          {itinerary.travelers}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 mt-3 sm:mt-0">
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-medium ${
                          itinerary.status === "Completed"
                            ? "bg-green-100 text-green-800"
                            : itinerary.status === "In Progress"
                              ? "bg-blue-100 text-blue-800"
                              : "bg-gray-100 text-gray-800"
                        }`}
                      >
                        {itinerary.status}
                      </span>
                      <Button variant="outline" size="sm" asChild>
                        <Link href={`/itinerary/${itinerary.id}`}>View</Link>
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="p-6">
                <div className="text-center space-y-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                    <Plus className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-card-foreground">Create New Itinerary</h3>
                    <p className="text-sm text-muted">Start planning your next adventure</p>
                  </div>
                  <Button asChild className="w-full">
                    <Link href="/travel-form">Get Started</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="p-6">
                <div className="text-center space-y-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-card-foreground">Manage Profile</h3>
                    <p className="text-sm text-muted">Update your travel preferences</p>
                  </div>
                  <Button asChild variant="outline" className="w-full bg-transparent">
                    <Link href="/profile">View Profile</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
