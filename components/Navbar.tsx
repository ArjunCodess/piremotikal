'use client'

import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { NavigationMenu, NavigationMenuList, NavigationMenuLink } from "@/components/ui/navigation-menu"
import React from "react";
import DarkThemeToggler from "./DarkThemeToggler"
import { navbarItems } from "@/constants"

type SVGProps = React.SVGProps<SVGSVGElement>;

export default function Navbar() {
     return (
          <header className="flex md:h-[10vh] py-10 w-full shrink-0 items-center">
               <Sheet>
                    <SheetTrigger asChild>
                         <Button variant="outline" size="icon" className="lg:hidden bg-transparent">
                              <MenuIcon className="h-6 w-6" />
                              <span className="sr-only">Toggle navigation menu</span>
                         </Button>
                    </SheetTrigger>
                    <SheetContent side="left" className="dark:bg-neutral-900">
                         <Link href="/#home" prefetch={false}>
                              <div className="dark:hidden inline-block">
                                   <svg className="h-10 w-10" viewBox="0 0 83.542 72.708" xmlns="http://www.w3.org/2000/svg"><g id="svgGroup" strokeLinecap="round" fillRule="evenodd" fontSize="9pt" style={{ stroke: "#000", strokeWidth: "0.25mm", fill: "#000" }}><path d="M 9.081 35.365 L 11.797 35.372 L 11.797 50.928 A 29.157 29.157 0 0 0 7.215 53.938 C 4.117 56.412 1.852 59.22 0.443 61.532 A 21.816 21.816 0 0 0 0 62.292 L 1.917 62.292 A 21.583 21.583 0 0 1 11.797 56.243 L 11.797 70.333 L 11.797 72.708 L 23.499 72.708 L 29.292 72.708 L 29.292 70.333 C 29.292 66.521 29.292 62.708 29.292 58.895 C 30.232 59.51 31.124 60.2 31.958 60.958 L 53.833 49.167 L 53.833 10.167 C 50.99 6.233 47.481 2.782 43.492 0 L 29.292 10.35 C 29.292 7.566 29.292 4.781 29.292 1.997 L 26.903 1.997 C 26.903 5.361 26.903 8.726 26.903 12.091 L 23.499 14.572 L 23.499 13.083 A 19.31 19.31 0 0 0 23.253 9.891 C 22.115 3.11 17.285 1.847 13.927 1.847 A 11.344 11.344 0 0 0 7.489 3.799 A 10.928 10.928 0 0 0 2.677 12.301 L 4.672 12.301 A 6.088 6.088 0 0 1 4.72 12.064 C 5.038 10.631 5.896 9.197 7.237 8.595 A 3.386 3.386 0 0 1 8.636 8.3 C 10.342 8.3 11.353 9.57 11.68 11.636 A 10.37 10.37 0 0 1 11.797 13.25 L 11.797 27.038 A 9.58 9.58 0 0 0 11.355 27.027 A 9.221 9.221 0 0 0 2.09 35.001 A 9.403 9.403 0 0 0 2.025 36.115 A 8.382 8.382 0 0 0 2.025 36.122 A 8.883 8.883 0 0 0 2.548 39.125 L 4.465 39.125 A 4.543 4.543 0 0 1 4.46 38.94 A 4.434 4.434 0 0 1 4.46 38.928 A 4.048 4.048 0 0 1 4.754 37.313 C 5.311 36.024 6.687 35.358 9.081 35.365 Z M 81.545 53.847 L 77.95 56.243 L 75.153 53.447 L 75.153 28.281 L 68.762 20.692 L 57.577 28.281 L 58.776 29.879 L 61.971 27.882 L 64.768 31.477 L 64.768 53.447 L 59.575 57.042 L 60.773 58.64 L 63.569 56.643 L 71.558 63.833 L 83.542 55.444 L 81.545 53.847 Z M 23.499 47.788 L 23.499 17.053 L 26.903 14.649 C 26.903 25.719 26.903 36.789 26.903 47.858 A 27.976 27.976 0 0 0 24.634 47.766 A 28.805 28.805 0 0 0 23.499 47.788 Z M 29.292 40.149 L 43.194 33.127 L 43.194 52.125 L 41.36 53.208 C 37.807 50.61 33.632 48.882 29.292 48.155 C 29.292 45.487 29.292 42.818 29.292 40.149 Z M 43.194 15.75 L 43.194 21.704 L 29.292 28.727 C 29.292 23.472 29.292 18.217 29.292 12.962 L 35.367 8.671 C 38.238 10.748 40.861 13.125 43.194 15.75 Z M 29.292 31.403 L 43.194 24.381 L 43.194 30.451 L 29.292 37.473 C 29.292 35.45 29.292 33.426 29.292 31.403 Z M 62.099 9.449 L 69.202 17.538 L 77.161 10.55 L 70.058 2.46 L 62.099 9.449 Z M 26.903 70.333 L 23.499 70.333 L 23.499 56.239 C 24.672 56.577 25.811 57.013 26.903 57.542 C 26.903 61.806 26.903 66.07 26.903 70.333 Z" vectorEffect="non-scaling-stroke" /></g></svg>
                              </div>

                              <div className="hidden dark:inline-block">
                                   <svg className="h-10 w-10" viewBox="0 0 83.542 72.708" xmlns="http://www.w3.org/2000/svg"><g id="svgGroup" strokeLinecap="round" fillRule="evenodd" fontSize="9pt" style={{ stroke: "#fff", strokeWidth: "0.25mm", fill: "#fff" }}><path d="M 9.081 35.365 L 11.797 35.372 L 11.797 50.928 A 29.157 29.157 0 0 0 7.215 53.938 C 4.117 56.412 1.852 59.22 0.443 61.532 A 21.816 21.816 0 0 0 0 62.292 L 1.917 62.292 A 21.583 21.583 0 0 1 11.797 56.243 L 11.797 70.333 L 11.797 72.708 L 23.499 72.708 L 29.292 72.708 L 29.292 70.333 C 29.292 66.521 29.292 62.708 29.292 58.895 C 30.232 59.51 31.124 60.2 31.958 60.958 L 53.833 49.167 L 53.833 10.167 C 50.99 6.233 47.481 2.782 43.492 0 L 29.292 10.35 C 29.292 7.566 29.292 4.781 29.292 1.997 L 26.903 1.997 C 26.903 5.361 26.903 8.726 26.903 12.091 L 23.499 14.572 L 23.499 13.083 A 19.31 19.31 0 0 0 23.253 9.891 C 22.115 3.11 17.285 1.847 13.927 1.847 A 11.344 11.344 0 0 0 7.489 3.799 A 10.928 10.928 0 0 0 2.677 12.301 L 4.672 12.301 A 6.088 6.088 0 0 1 4.72 12.064 C 5.038 10.631 5.896 9.197 7.237 8.595 A 3.386 3.386 0 0 1 8.636 8.3 C 10.342 8.3 11.353 9.57 11.68 11.636 A 10.37 10.37 0 0 1 11.797 13.25 L 11.797 27.038 A 9.58 9.58 0 0 0 11.355 27.027 A 9.221 9.221 0 0 0 2.09 35.001 A 9.403 9.403 0 0 0 2.025 36.115 A 8.382 8.382 0 0 0 2.025 36.122 A 8.883 8.883 0 0 0 2.548 39.125 L 4.465 39.125 A 4.543 4.543 0 0 1 4.46 38.94 A 4.434 4.434 0 0 1 4.46 38.928 A 4.048 4.048 0 0 1 4.754 37.313 C 5.311 36.024 6.687 35.358 9.081 35.365 Z M 81.545 53.847 L 77.95 56.243 L 75.153 53.447 L 75.153 28.281 L 68.762 20.692 L 57.577 28.281 L 58.776 29.879 L 61.971 27.882 L 64.768 31.477 L 64.768 53.447 L 59.575 57.042 L 60.773 58.64 L 63.569 56.643 L 71.558 63.833 L 83.542 55.444 L 81.545 53.847 Z M 23.499 47.788 L 23.499 17.053 L 26.903 14.649 C 26.903 25.719 26.903 36.789 26.903 47.858 A 27.976 27.976 0 0 0 24.634 47.766 A 28.805 28.805 0 0 0 23.499 47.788 Z M 29.292 40.149 L 43.194 33.127 L 43.194 52.125 L 41.36 53.208 C 37.807 50.61 33.632 48.882 29.292 48.155 C 29.292 45.487 29.292 42.818 29.292 40.149 Z M 43.194 15.75 L 43.194 21.704 L 29.292 28.727 C 29.292 23.472 29.292 18.217 29.292 12.962 L 35.367 8.671 C 38.238 10.748 40.861 13.125 43.194 15.75 Z M 29.292 31.403 L 43.194 24.381 L 43.194 30.451 L 29.292 37.473 C 29.292 35.45 29.292 33.426 29.292 31.403 Z M 62.099 9.449 L 69.202 17.538 L 77.161 10.55 L 70.058 2.46 L 62.099 9.449 Z M 26.903 70.333 L 23.499 70.333 L 23.499 56.239 C 24.672 56.577 25.811 57.013 26.903 57.542 C 26.903 61.806 26.903 66.07 26.903 70.333 Z" vectorEffect="non-scaling-stroke" /></g></svg>
                              </div>
                              <span className="sr-only">Acme Inc</span>
                         </Link>
                         <div className="grid gap-2 py-6">
                              {navbarItems.map((item) => (
                                   <Link key={item.id} href={item.slug} className="flex w-full items-center py-2 text-lg font-semibold" prefetch={false}>
                                        {item.name}
                                   </Link>
                              ))}

                              <DarkThemeToggler />
                         </div>
                    </SheetContent>
               </Sheet>
               <Link href="/#home" className="mr-6 hidden lg:flex" prefetch={false}>
                    <div className="dark:hidden inline-block">
                         <svg className="h-10 w-10" viewBox="0 0 83.542 72.708" xmlns="http://www.w3.org/2000/svg"><g id="svgGroup" strokeLinecap="round" fillRule="evenodd" fontSize="9pt" style={{ stroke: "#000", strokeWidth: "0.25mm", fill: "#000" }}><path d="M 9.081 35.365 L 11.797 35.372 L 11.797 50.928 A 29.157 29.157 0 0 0 7.215 53.938 C 4.117 56.412 1.852 59.22 0.443 61.532 A 21.816 21.816 0 0 0 0 62.292 L 1.917 62.292 A 21.583 21.583 0 0 1 11.797 56.243 L 11.797 70.333 L 11.797 72.708 L 23.499 72.708 L 29.292 72.708 L 29.292 70.333 C 29.292 66.521 29.292 62.708 29.292 58.895 C 30.232 59.51 31.124 60.2 31.958 60.958 L 53.833 49.167 L 53.833 10.167 C 50.99 6.233 47.481 2.782 43.492 0 L 29.292 10.35 C 29.292 7.566 29.292 4.781 29.292 1.997 L 26.903 1.997 C 26.903 5.361 26.903 8.726 26.903 12.091 L 23.499 14.572 L 23.499 13.083 A 19.31 19.31 0 0 0 23.253 9.891 C 22.115 3.11 17.285 1.847 13.927 1.847 A 11.344 11.344 0 0 0 7.489 3.799 A 10.928 10.928 0 0 0 2.677 12.301 L 4.672 12.301 A 6.088 6.088 0 0 1 4.72 12.064 C 5.038 10.631 5.896 9.197 7.237 8.595 A 3.386 3.386 0 0 1 8.636 8.3 C 10.342 8.3 11.353 9.57 11.68 11.636 A 10.37 10.37 0 0 1 11.797 13.25 L 11.797 27.038 A 9.58 9.58 0 0 0 11.355 27.027 A 9.221 9.221 0 0 0 2.09 35.001 A 9.403 9.403 0 0 0 2.025 36.115 A 8.382 8.382 0 0 0 2.025 36.122 A 8.883 8.883 0 0 0 2.548 39.125 L 4.465 39.125 A 4.543 4.543 0 0 1 4.46 38.94 A 4.434 4.434 0 0 1 4.46 38.928 A 4.048 4.048 0 0 1 4.754 37.313 C 5.311 36.024 6.687 35.358 9.081 35.365 Z M 81.545 53.847 L 77.95 56.243 L 75.153 53.447 L 75.153 28.281 L 68.762 20.692 L 57.577 28.281 L 58.776 29.879 L 61.971 27.882 L 64.768 31.477 L 64.768 53.447 L 59.575 57.042 L 60.773 58.64 L 63.569 56.643 L 71.558 63.833 L 83.542 55.444 L 81.545 53.847 Z M 23.499 47.788 L 23.499 17.053 L 26.903 14.649 C 26.903 25.719 26.903 36.789 26.903 47.858 A 27.976 27.976 0 0 0 24.634 47.766 A 28.805 28.805 0 0 0 23.499 47.788 Z M 29.292 40.149 L 43.194 33.127 L 43.194 52.125 L 41.36 53.208 C 37.807 50.61 33.632 48.882 29.292 48.155 C 29.292 45.487 29.292 42.818 29.292 40.149 Z M 43.194 15.75 L 43.194 21.704 L 29.292 28.727 C 29.292 23.472 29.292 18.217 29.292 12.962 L 35.367 8.671 C 38.238 10.748 40.861 13.125 43.194 15.75 Z M 29.292 31.403 L 43.194 24.381 L 43.194 30.451 L 29.292 37.473 C 29.292 35.45 29.292 33.426 29.292 31.403 Z M 62.099 9.449 L 69.202 17.538 L 77.161 10.55 L 70.058 2.46 L 62.099 9.449 Z M 26.903 70.333 L 23.499 70.333 L 23.499 56.239 C 24.672 56.577 25.811 57.013 26.903 57.542 C 26.903 61.806 26.903 66.07 26.903 70.333 Z" vectorEffect="non-scaling-stroke" /></g></svg>
                    </div>

                    <div className="hidden dark:inline-block">
                         <svg className="h-10 w-10" viewBox="0 0 83.542 72.708" xmlns="http://www.w3.org/2000/svg"><g id="svgGroup" strokeLinecap="round" fillRule="evenodd" fontSize="9pt" style={{ stroke: "#fff", strokeWidth: "0.25mm", fill: "#fff" }}><path d="M 9.081 35.365 L 11.797 35.372 L 11.797 50.928 A 29.157 29.157 0 0 0 7.215 53.938 C 4.117 56.412 1.852 59.22 0.443 61.532 A 21.816 21.816 0 0 0 0 62.292 L 1.917 62.292 A 21.583 21.583 0 0 1 11.797 56.243 L 11.797 70.333 L 11.797 72.708 L 23.499 72.708 L 29.292 72.708 L 29.292 70.333 C 29.292 66.521 29.292 62.708 29.292 58.895 C 30.232 59.51 31.124 60.2 31.958 60.958 L 53.833 49.167 L 53.833 10.167 C 50.99 6.233 47.481 2.782 43.492 0 L 29.292 10.35 C 29.292 7.566 29.292 4.781 29.292 1.997 L 26.903 1.997 C 26.903 5.361 26.903 8.726 26.903 12.091 L 23.499 14.572 L 23.499 13.083 A 19.31 19.31 0 0 0 23.253 9.891 C 22.115 3.11 17.285 1.847 13.927 1.847 A 11.344 11.344 0 0 0 7.489 3.799 A 10.928 10.928 0 0 0 2.677 12.301 L 4.672 12.301 A 6.088 6.088 0 0 1 4.72 12.064 C 5.038 10.631 5.896 9.197 7.237 8.595 A 3.386 3.386 0 0 1 8.636 8.3 C 10.342 8.3 11.353 9.57 11.68 11.636 A 10.37 10.37 0 0 1 11.797 13.25 L 11.797 27.038 A 9.58 9.58 0 0 0 11.355 27.027 A 9.221 9.221 0 0 0 2.09 35.001 A 9.403 9.403 0 0 0 2.025 36.115 A 8.382 8.382 0 0 0 2.025 36.122 A 8.883 8.883 0 0 0 2.548 39.125 L 4.465 39.125 A 4.543 4.543 0 0 1 4.46 38.94 A 4.434 4.434 0 0 1 4.46 38.928 A 4.048 4.048 0 0 1 4.754 37.313 C 5.311 36.024 6.687 35.358 9.081 35.365 Z M 81.545 53.847 L 77.95 56.243 L 75.153 53.447 L 75.153 28.281 L 68.762 20.692 L 57.577 28.281 L 58.776 29.879 L 61.971 27.882 L 64.768 31.477 L 64.768 53.447 L 59.575 57.042 L 60.773 58.64 L 63.569 56.643 L 71.558 63.833 L 83.542 55.444 L 81.545 53.847 Z M 23.499 47.788 L 23.499 17.053 L 26.903 14.649 C 26.903 25.719 26.903 36.789 26.903 47.858 A 27.976 27.976 0 0 0 24.634 47.766 A 28.805 28.805 0 0 0 23.499 47.788 Z M 29.292 40.149 L 43.194 33.127 L 43.194 52.125 L 41.36 53.208 C 37.807 50.61 33.632 48.882 29.292 48.155 C 29.292 45.487 29.292 42.818 29.292 40.149 Z M 43.194 15.75 L 43.194 21.704 L 29.292 28.727 C 29.292 23.472 29.292 18.217 29.292 12.962 L 35.367 8.671 C 38.238 10.748 40.861 13.125 43.194 15.75 Z M 29.292 31.403 L 43.194 24.381 L 43.194 30.451 L 29.292 37.473 C 29.292 35.45 29.292 33.426 29.292 31.403 Z M 62.099 9.449 L 69.202 17.538 L 77.161 10.55 L 70.058 2.46 L 62.099 9.449 Z M 26.903 70.333 L 23.499 70.333 L 23.499 56.239 C 24.672 56.577 25.811 57.013 26.903 57.542 C 26.903 61.806 26.903 66.07 26.903 70.333 Z" vectorEffect="non-scaling-stroke" /></g></svg>
                    </div>
                    <span className="sr-only">Acme Inc</span>
               </Link>
               <NavigationMenu className="ml-auto hidden lg:flex gap-6">
                    <NavigationMenuList>
                         <NavigationMenuLink asChild>
                              <div className="flex gap-8">
                                   {navbarItems.map((item) => (
                                        <Link
                                             key={item.id}
                                             href={item.slug}
                                             className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-lg font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-secondary-foreground h-10 py-2"
                                             prefetch={false}
                                        >
                                             {item.name}
                                        </Link>
                                   ))}

                                   <DarkThemeToggler />
                              </div>
                         </NavigationMenuLink>
                    </NavigationMenuList>
               </NavigationMenu>
          </header>
     )
}

const MenuIcon: React.FC<SVGProps> = (props) => {
     return (
          <svg
               {...props}
               xmlns="http://www.w3.org/2000/svg"
               width="24"
               height="24"
               viewBox="0 0 24 24"
               fill="none"
               stroke="currentColor"
               strokeWidth="2"
               strokeLinecap="round"
               strokeLinejoin="round"
          >
               <line x1="4" x2="20" y1="12" y2="12" />
               <line x1="4" x2="20" y1="6" y2="6" />
               <line x1="4" x2="20" y1="18" y2="18" />
          </svg>
     )
}