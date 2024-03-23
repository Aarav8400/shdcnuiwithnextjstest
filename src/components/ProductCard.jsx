import { Card, CardFooter, CardHeader, CardTitle } from "./ui/card";
import Image from "next/image";
import { Button } from "./ui/button";

const products = [
    {
        title: "laptops and computers",
        href: "https://source.unsplash.com/250x200/?product&1",
        price: 1452.56
    },
    {
        title: "laptops and computers",
        href: "https://source.unsplash.com/250x200/?product&1",
        price: 1452.56
    },
    {
        title: "laptops and computers",
        href: "https://source.unsplash.com/250x200/?product&1",
        price: 1452.56
    },
    {
        title: "laptops and computers",
        href: "https://source.unsplash.com/250x200/?product&1",
        price: 1452.56
    },
    {
        title: "laptops and computers",
        href: "https://source.unsplash.com/250x200/?product&1",
        price: 1452.56
    },
    {
        title: "laptops and computers",
        href: "https://source.unsplash.com/250x200/?product&1",
        price: 1452.56
    },
    {
        title: "laptops and computers",
        href: "https://source.unsplash.com/250x200/?product&1",
        price: 1452.56
    },

]

export default function ProductCard() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6">
            {
                products.map((product) => (
                    <Card key={product.title}>
                        <CardHeader>
                            <Image src={product.href} width={250} height={200} alt="pic" className="object-cover w-full rounded" />
                        </CardHeader>
                        <CardTitle className="text-center text-xl">{product.title}</CardTitle>
                        <CardFooter className="flex justify-between mt-5 ">
                            <p className="text-lg font-semibold">Rs. {product.price}</p>
                            <Button variant="destructive">Buy Now</Button>
                        </CardFooter>
                    </Card>
                ))
            }
        </div>
    )
}
