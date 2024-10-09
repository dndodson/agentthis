import { ChartArea, DollarSign, Lock, Menu, Share2 } from 'lucide-react';
import Link from 'next/link';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/src/components/ui/accordion';
import { Button, buttonVariants } from '@/src/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/src/components/ui/navigation-menu';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/src/components/ui/sheet';
import { cn } from '@/src/lib/utils';

const subMenuItemsOne = [
  {
    title: 'Protection',
    description: 'Guard your content against AI theft',
    icon: <Lock className="size-5 shrink-0" />,
  },
  {
    title: 'Monetization',
    description: 'Get paid when AI reads your content',
    icon: <DollarSign className="size-5 shrink-0" />,
  },
  {
    title: 'Analytics',
    description:
      'Understand how your content is used to tune your AI strategy',
    icon: <ChartArea className="size-5 shrink-0" />,
  },
];

const Navbar = () => {
  return (
    <section className="p-8">
      <div className="container">
        <nav className="hidden justify-between lg:flex">
          <div className="flex items-center gap-6">
            <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <Share2 className="h-8 w-8 text-gray-800 transform scale-x-[-1]" />
              <span className="text-xl font-bold text-primary">AgentThis</span>
            </Link>
            <div className="flex items-center">
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem className="text-muted-foreground">
                    <NavigationMenuTrigger>
                      <span>Platform</span>
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="w-80 p-3">
                        <NavigationMenuLink>
                          {subMenuItemsOne.map((item, idx) => (
                            <li key={idx}>
                              <a
                                className={cn(
                                  'flex select-none gap-4 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
                                )}
                                href={`/platform/${item.title.toLowerCase()}`}
                              >
                                {item.icon}
                                <div>
                                  <div className="text-sm font-semibold">
                                    {item.title}
                                  </div>
                                  <p className="text-sm leading-snug text-muted-foreground">
                                    {item.description}
                                  </p>
                                </div>
                              </a>
                            </li>
                          ))}
                        </NavigationMenuLink>
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>

              <Link
                href="/blog"
                className={cn(
                  'text-muted-foreground',
                  navigationMenuTriggerStyle,
                  buttonVariants({
                    variant: 'ghost',
                  }),
                )}
              >
                Blog
              </Link>
              <Link
                href="/pricing"
                className={cn(
                  'text-muted-foreground',
                  navigationMenuTriggerStyle,
                  buttonVariants({
                    variant: 'ghost',
                  }),
                )}
              >
                Pricing
              </Link>
              <Link
                href="/team"
                className={cn(
                  'text-muted-foreground',
                  navigationMenuTriggerStyle,
                  buttonVariants({
                    variant: 'ghost',
                  }),
                )}
              >
                Team
              </Link>
            </div>
          </div>
          <div className="flex gap-2">
            <Link href="/sign-in">
              <Button variant={'outline'}>Sign in</Button>
            </Link>
            <Button>Sign up</Button>
          </div>
        </nav>
        <div className="block lg:hidden">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Share2 className="h-8 w-8 text-gray-800 transform scale-x-[-1]" />
              <span className="text-xl font-bold text-primary">AgentThis</span>
            </div>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant={'outline'} size={'icon'}>
                  <Menu className="size-4" />
                </Button>
              </SheetTrigger>
              <SheetContent className="overflow-y-auto">
                <SheetHeader>
                  <SheetTitle>
                    <div className="flex items-center gap-2">
                      <Share2 className="h-8 w-8 text-gray-800 transform scale-x-[-1]" />
                      <span className="text-xl font-bold text-primary">AgentThis</span>
                    </div>
                  </SheetTitle>
                </SheetHeader>
                <div className="my-8 flex flex-col gap-4">
                  <a href="#" className="font-semibold">
                    Home
                  </a>
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="products" className="border-b-0">
                      <AccordionTrigger className="mb-4 py-0 font-semibold hover:no-underline">
                        Features
                      </AccordionTrigger>
                      <AccordionContent className="mt-2">
                        {subMenuItemsOne.map((item, idx) => (
                          <a
                            key={idx}
                            className={cn(
                              'flex select-none gap-4 rounded-md p-3 leading-none outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
                            )}
                            href={`/platform/${item.title.toLowerCase()}`}
                          >
                            {item.icon}
                            <div>
                              <div className="text-sm font-semibold">
                                {item.title}
                              </div>
                              <p className="text-sm leading-snug text-muted-foreground">
                                {item.description}
                              </p>
                            </div>
                          </a>
                        ))}
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                  <Link href="/blog" className="font-semibold">
                    Blog
                  </Link>
                  <Link href="/pricing" className="font-semibold">
                    Pricing
                  </Link>
                  <Link href="/team" className="font-semibold">
                    Team
                  </Link>
                </div>
                <div className="border-t pt-4">
                  <div className="grid grid-cols-2 justify-start">
                    <a
                      className={cn(
                        buttonVariants({
                          variant: 'ghost',
                        }),
                        'justify-start text-muted-foreground',
                      )}
                      href="#"
                    >
                      Press
                    </a>
                    <a
                      className={cn(
                        buttonVariants({
                          variant: 'ghost',
                        }),
                        'justify-start text-muted-foreground',
                      )}
                      href="#"
                    >
                      Contact
                    </a>
                    <a
                      className={cn(
                        buttonVariants({
                          variant: 'ghost',
                        }),
                        'justify-start text-muted-foreground',
                      )}
                      href="#"
                    >
                      Imprint
                    </a>
                    <a
                      className={cn(
                        buttonVariants({
                          variant: 'ghost',
                        }),
                        'justify-start text-muted-foreground',
                      )}
                      href="#"
                    >
                      Sitemap
                    </a>
                    <a
                      className={cn(
                        buttonVariants({
                          variant: 'ghost',
                        }),
                        'justify-start text-muted-foreground',
                      )}
                      href="#"
                    >
                      Legal
                    </a>
                    <a
                      className={cn(
                        buttonVariants({
                          variant: 'ghost',
                        }),
                        'justify-start text-muted-foreground',
                      )}
                      href="#"
                    >
                      Cookie Settings
                    </a>
                  </div>
                  <div className="mt-2 flex flex-col gap-3">
                    <Link href="/sign-in">
                      <Button variant={'outline'} className="w-full">Sign in</Button>
                    </Link>
                    <Button>Sign up</Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;