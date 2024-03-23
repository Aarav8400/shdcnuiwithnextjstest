"use client"
import { AspectRatio } from "@radix-ui/react-aspect-ratio"
import { Button } from "./ui/button"

export default function Hero() {
    return (
        <AspectRatio ratio={16 / 3} className="bg-muted">
            <div className="absolute inset-0 flex items-center justify-center text-center">
                <div>
                    <h1 className="text-4xl font-bold mb-4">Welcome to Holo</h1>

                    <p className="text-lg">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere consectetur animi voluptas laborum sunt officia, voluptatem iste excepturi omnis, commodi debitis similique deserunt dolore placeat quae temporibus reprehenderit cum hic.</p>
                    <Button variant="destructive" className="mt-5" size="sm">Shop Now</Button>
                </div>
            </div>
        </AspectRatio>
    )
}
