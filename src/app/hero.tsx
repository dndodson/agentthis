'use client';

import { Share2 } from 'lucide-react';
import { useEffect, useState } from 'react';

const integrations = [
  [
    {
      id: 'integration-1',
      icon: <img alt="Integration" src="https://www.shadcnblocks.com/images/block/block-1.svg" />,
    },
    {
      id: 'integration-2',
      icon: <img alt="Integration" src="https://www.shadcnblocks.com/images/block/block-2.svg" />,
    },
    {
      id: 'integration-3',
      icon: <img alt="Integration" src="https://www.shadcnblocks.com/images/block/block-3.svg" />,
    },
    {
      id: 'integration-4',
      icon: <img alt="Integration" src="https://www.shadcnblocks.com/images/block/block-4.svg" />,
    },
    {
      id: 'integration-5',
      icon: <img alt="Integration" src="https://www.shadcnblocks.com/images/block/block-5.svg" />,
    },
  ],
  [
    {
      id: 'integration-6',
      icon: <img alt="Integration" src="https://www.shadcnblocks.com/images/block/block-6.svg" />,
    },
    {
      id: 'integration-7',
      icon: <img alt="Integration" src="https://www.shadcnblocks.com/images/block/block-1.svg" />,
    },
    {
      id: 'integration-8',
      icon: <img alt="Integration" src="https://www.shadcnblocks.com/images/block/block-2.svg" />,
    },
    {
      id: 'integration-9',
      icon: <img alt="Integration" src="https://www.shadcnblocks.com/images/block/block-3.svg" />,
    },
    {
      id: 'integration-10',
      icon: <img alt="Integration" src="https://www.shadcnblocks.com/images/block/block-4.svg" />,
    },
  ],
  [
    {
      id: 'integration-11',
      icon: <img alt="Integration" src="https://www.shadcnblocks.com/images/block/block-5.svg" />,
    },
    {
      id: 'integration-12',
      icon: <img alt="Integration" src="https://www.shadcnblocks.com/images/block/block-6.svg" />,
    },
    {
      id: 'integration-13',
      icon: <img alt="Integration" src="https://www.shadcnblocks.com/images/block/block-1.svg" />,
    },
    {
      id: 'integration-14',
      icon: <img alt="Integration" src="https://www.shadcnblocks.com/images/block/block-2.svg" />,
    },
    {
      id: 'integration-15',
      icon: <img alt="Integration" src="https://www.shadcnblocks.com/images/block/block-3.svg" />,
    },
  ],
];

const Hero = () => {
  const [rotations, setRotations] = useState<number[]>([]);
  const [animations, setAnimations] = useState<string[]>([]);

  useEffect(() => {
    const newRotations = Array(15).fill(0).map(() => Math.random() * 360);
    const newAnimations = Array(15).fill(0).map(() => {
      const direction = Math.random() > 0.5 ? 'clockwise' : 'counterclockwise';
      const duration = 5 + Math.random() * 10; // Random duration between 5 and 15 seconds
      return `spin-${direction} ${duration}s linear infinite`;
    });
    setRotations(newRotations);
    setAnimations(newAnimations);
  }, []);

  return (
    <section className="relative overflow-hidden px-16">
      <div className="absolute inset-0 overflow-hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1400 600"
          className="min-h-full min-w-full"
        >
          <defs>
            <pattern
              id="grid"
              width="24"
              height="24"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 24 0 L 0 0 0 24"
                fill="none"
                stroke="hsl(var(--muted))"
                strokeWidth="1"
                strokeOpacity={0.5}
              />
            </pattern>
          </defs>
          <rect width="1400" height="600" fill="url(#grid)" />
        </svg>
      </div>
      <div className="relative">
        <div className="absolute left-0 hidden h-full w-1/2 bg-[linear-gradient(to_right,hsl(var(--background))_85%,transparent_100%)] md:block"></div>
        <div className="md:-space-x-26 container relative flex flex-col items-start md:flex-row md:items-center">
          <div className="-mx-[calc(theme(container.padding))] w-[calc(100%+2*theme(container.padding))] shrink-0 bg-background px-[calc(theme(container.padding))] pt-32 md:w-1/2 md:bg-transparent md:pb-32">
            <div className="flex flex-col items-start text-left">
              <div className="max-w-sm">
                <h1 className="my-6 text-pretty text-4xl font-bold lg:text-6xl text-center">
                  <span className="text-gray-800">The </span>
                  <span className="text-primary">agentic</span>
                  <span className="text-gray-800"> internet is here</span>
                </h1>
              </div>
            </div>
          </div>
          <div>
            <div className="flex flex-col gap-16 pb-8 pt-12 md:py-32">
              {integrations.map((line, i) => (
                <div key={i} className="flex gap-x-24 odd:-translate-x-24">
                  {line.map((integration, index) => (
                    <div
                      key={integration.id}
                      className="size-24 rounded-xl bg-background"
                      style={{
                        transform: `rotate(${rotations[i * 5 + index]}deg)`,
                        animation: animations[i * 5 + index],
                      }}
                    >
                      <div className="size-full bg-muted/20 p-4 flex items-center justify-center">
                        <Share2 className="text-gray-800" size={48} />
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
