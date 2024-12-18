import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Shield, Zap, BarChart } from 'lucide-react'
import ExchangeRateChart from './components/exchange-rate-chart'
import TestImg from './images/guide-rail.png'

export default function Home() {
  return (
    <div className="gradient-bg min-h-screen">
      {/* Hero Section */}
      <section className="container mx-auto px-6 py-16 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">Elevating Your Elevator Solutions</h1>
        <p className="text-xl mb-8">Premium elevator components for seamless vertical transportation</p>
        <Button asChild>
          <Link href="/products">Explore Our Products <ArrowRight className="ml-2" /></Link>
        </Button>
      </section>

      {/* Featured Products */}
      <section className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Guide Rails</CardTitle>
              <CardDescription>Precision-engineered for smooth operation</CardDescription>
            </CardHeader>
            <CardContent>
              <Image src="/images/guide-rail.png" width={300} height={200} alt="Guide Rails" className="rounded-lg" />
            </CardContent>
            <CardFooter>
              <Button asChild>
                <Link href="/products/guide-rails">Learn More</Link>
              </Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Elevator Machines</CardTitle>
              <CardDescription>Powerful and efficient elevator motors</CardDescription>
            </CardHeader>
            <CardContent>
              <Image src="/images/guide-rail.png" width={300} height={200} alt="Elevator Machines" className="rounded-lg" />
            </CardContent>
            <CardFooter>
              <Button asChild>
                <Link href="/products/machines">Learn More</Link>
              </Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Control Chips</CardTitle>
              <CardDescription>Advanced technology for smart elevators</CardDescription>
            </CardHeader>
            <CardContent>
              <Image src="/images/guide-rail.png" width={300} height={200} alt="Control Chips" className="rounded-lg" />
            </CardContent>
            <CardFooter>
              <Button asChild>
                <Link href="/products/chips">Learn More</Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8 text-center">Why Choose Samax Engineering?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center">
              <Shield className="w-16 h-16 mb-4 text-blue-600" />
              <h3 className="text-xl font-semibold mb-2">Quality Assurance</h3>
              <p>Our products meet the highest industry standards for safety and reliability.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Zap className="w-16 h-16 mb-4 text-blue-600" />
              <h3 className="text-xl font-semibold mb-2">Innovation</h3>
              <p>We continuously innovate to bring you the latest in elevator technology.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <BarChart className="w-16 h-16 mb-4 text-blue-600" />
              <h3 className="text-xl font-semibold mb-2">Global Expertise</h3>
              <p>With years of experience, we offer solutions tailored to your needs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Live Exchange Rate */}
      <section className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Live USD to INR Exchange Rate</h2>
        <ExchangeRateChart />
      </section>

      {/* Testimonials */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8 text-center">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="pt-6">
                <p className="italic mb-4">"Samax Engineering has consistently delivered top-notch elevator components. Their guide rails have significantly improved the performance of our elevators."</p>
                <p className="font-semibold">- John Doe, Chief Engineer at SkyScraper Co.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <p className="italic mb-4">"The control chips from Samax have revolutionized our smart elevator systems. We couldn't be happier with the results."</p>
                <p className="font-semibold">- Jane Smith, CTO at Elevatetech</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-6 py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Elevate Your Project?</h2>
        <p className="text-xl mb-8">Contact us today to discuss your elevator component needs.</p>
        <Button asChild size="lg">
          <Link href="/contact">Get in Touch</Link>
        </Button>
      </section>
    </div>
  )
}
