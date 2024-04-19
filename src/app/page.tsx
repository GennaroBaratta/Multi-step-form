import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle
} from "@/components/ui/card"
import { Pagination, PaginationContent, PaginationItem, PaginationPrevious, PaginationLink, PaginationEllipsis, PaginationNext } from "@/components/ui/pagination";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-6 gap-8
    bg-fixed
    bg-magnolia
    bg-top bg-no-repeat bg-contain
    bg-[url('/images/bg-sidebar-mobile.svg')] 
    sm:bg-none " >
      <Pagination>
        <PaginationContent>
          <PaginationItem >
            <PaginationLink className="rounded-full border text-white" href="#">1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink className="rounded-full border text-white" href="#">2</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink className="rounded-full border text-white" href="#">3</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink className="rounded-full border text-white" href="#">4</PaginationLink>
          </PaginationItem>
        </PaginationContent>
      </Pagination>

      <Card className="p-2 flex flex-row">
        <div className="hidden sm:inline w-1/2 rounded-lg
        sm:bg-[url('/images/bg-sidebar-desktop.svg')] bg-cover bg-no-repeat">
          <Pagination>
            <PaginationContent className="felx flex-col">
              <PaginationItem >
                <p>Step 1</p>
                <PaginationLink className="rounded-full border text-white" href="#">1</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink className="rounded-full border text-white" href="#">2</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink className="rounded-full border text-white" href="#">3</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink className="rounded-full border text-white" href="#">4</PaginationLink>
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>

        <CardContent className="p-4 px-16">
          <h2 className="text-lg font-semibold text-gray-900 mb-2">Personal info</h2>
          <p className="text-gray-600 mb-6">Please provide your name, email address, and phone number.</p>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 text-sm font-semibold mb-2">Name</label>
            <input type="text" id="name" placeholder="e.g. Stephen King" className="shadow-sm appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 text-sm font-semibold mb-2">Email Address</label>
            <input type="email" id="email" placeholder="e.g. stephenking@lorem.com" className="shadow-sm appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
          </div>
          <div className="mb-6">
            <label htmlFor="phone" className="block text-gray-700 text-sm font-semibold mb-2">Phone Number</label>
            <input type="tel" id="phone" placeholder="e.g. +1 234 567 890" className="shadow-sm appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
          </div>
          <Button className="sm:block hidden float-right bg-marine-blue hover:bg-pastel-blue text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ">
          Next Step
        </Button>
        </CardContent>
      </Card>
      <footer className="block sm:hidden fixed inset-x-0 bottom-0 bg-white p-4">

        <Button className="float-right bg-marine-blue hover:bg-pastel-blue text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ">
          Next Step
        </Button>
      </footer>
    </main>
  );
}
