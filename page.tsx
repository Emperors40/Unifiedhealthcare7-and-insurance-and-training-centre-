'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export default function Insurance() {
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = () => {
    // Here you would typically handle the payment process
    // For this example, we'll just set the subscribed state to true
    setSubscribed(true)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Healthcare Insurance</h1>
      <p className="mb-4">Subscribe to our comprehensive healthcare insurance for only ₦10,000 per year.</p>
      {!subscribed ? (
        <div className="max-w-md">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="Enter your email" className="mb-4" />
          <Button onClick={handleSubscribe}>Subscribe for ₦10,000/year</Button>
        </div>
      ) : (
        <div>
          <p className="text-green-600 mb-4">Thank you for subscribing to our healthcare insurance!</p>
          <Button href="/training-center" as="a">Proceed to Training Center</Button>
        </div>
      )}
    </div>
  )
}

