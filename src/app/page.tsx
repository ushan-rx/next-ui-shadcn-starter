import Image from 'next/image';
import { Button as ButtonH } from '@heroui/react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Calendar } from '@/components/ui/calendar';
import { Card, Skeleton } from '@heroui/react';

export default function Home() {
  return (
    <div className='grid min-h-screen grid-rows-[20px_1fr_20px] place-items-center gap-2 p-8 pb-20 font-[family-name:var(--font-geist-sans)] sm:p-20'>
      <main className='row-start-2 flex flex-col items-center gap-4 sm:items-start'>
        <Image
          className='dark:invert'
          src='/next.svg'
          alt='Next.js logo'
          width={180}
          height={38}
          priority
        />
        <p className='text-center text-lg font-bold sm:text-left'>
          Welcome to the Hero UI (Next UI) + Shadcn UI Starter Project
        </p>
        <div className='flex flex-col gap-2'>
          {/* Information Section */}
          <div className='space-y-2 rounded-lg p-4 shadow-md sm:p-8'>
            <h2 className='text-lg font-bold'>Important Information</h2>
            <ul className='list-disc pl-5 text-sm leading-6'>
              <li>
                Components from both Hero UI and Shadcn UI work fine together,
                but there are some incompatibilities in their default styles.
              </li>
              <li>
                These issues arise when using the same default component from
                both libraries on one page. Try to avoid this scenario.
              </li>
              <li>
                A default theme system is being developed to ensure both
                libraries work seamlessly. If you create your own theme, this
                won't be an issue.
              </li>
              <li>
                This project is new, so there might be unknown bugs. If you
                encounter any, please make an issue or email me at{' '}
                <a
                  href='mailto:ushan.r.senarathna@gmail.com'
                  className='text-blue-500 underline'
                >
                  ushan.r.senarathna@gmail.com
                </a>
                .
              </li>
            </ul>
          </div>

          {/* Component Previews */}
          <div className='flex gap-8'>
            <div className='text-center'>
              <span>Shadcn Calendar</span>
              <Calendar />
            </div>
            <div className='text-center'>
              <span>HeroUi Skeleton</span>
              <Card className='w-[200px] space-y-5 p-4' radius='lg'>
                <Skeleton className='rounded-lg'>
                  <div className='h-24 rounded-lg bg-default-300' />
                </Skeleton>
                <div className='space-y-3'>
                  <Skeleton className='w-3/5 rounded-lg'>
                    <div className='h-3 w-3/5 rounded-lg bg-default-200' />
                  </Skeleton>
                  <Skeleton className='w-4/5 rounded-lg'>
                    <div className='h-3 w-4/5 rounded-lg bg-default-200' />
                  </Skeleton>
                  <Skeleton className='w-2/5 rounded-lg'>
                    <div className='h-3 w-2/5 rounded-lg bg-default-300' />
                  </Skeleton>
                </div>
              </Card>
            </div>
            {/* Buttons to navigate */}
            <div className='flex flex-col gap-8'>
                <span className='text-center'>Buttons</span>
                <ButtonH color='primary'>
                  <Link href={'/test-hero'}>Hero ui</Link>
                </ButtonH>
                <Button variant={'default'}>
                  <Link href={'/test-shadcn'}>Shadcn ui</Link>
                </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
