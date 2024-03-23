import { Button } from "@/components/ui/button"
import { DownloadIcon, TrashIcon } from "@radix-ui/react-icons"
import Link from "next/link"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"



export default function Test() {
    return (
        <div>
            <Button variant="outline">Button</Button>
            <Button variant="destructive">Button</Button>
            <Button variant="default">Button</Button>
            <Button variant="link">Button</Button>
            <Button disabled>link</Button>
            <Button size="icon" variant="outline">
                <TrashIcon />
            </Button>
            <Button variant="destructive">
                <TrashIcon className="mr-2 h-4 w-4" />Delete
            </Button>
            <Button disabled>
                uploading <DownloadIcon className="ml-2 h-4 w-4 animate-bounce" />
            </Button>
            <Button asChild variant="ghost" >
                <Link href="/login">Login</Link>
            </Button>

            <Alert variant="destructive">
                <AlertTitle>Heads up!</AlertTitle>
                <AlertDescription>
                    You can add components to your app using the cli.
                </AlertDescription>
            </Alert>
            <Card>
                <CardHeader>
                    <CardTitle>Card Title</CardTitle>
                    <CardDescription>Card Description</CardDescription>
                </CardHeader>
                <CardContent>
                    <p>Card Content</p>
                </CardContent>
                <CardFooter>
                    <p>Card Footer</p>
                </CardFooter>
            </Card>


        </div>


    )
}
