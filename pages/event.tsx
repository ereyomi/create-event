import { CalendarIcon, ChevronRight, LocationIcon } from '@components/icons';
import { EventT } from '@components/models/EventType';
import { format } from 'date-fns';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const Event: NextPage = () => {
  const router = useRouter();
  const [event, setEvent] = useState<EventT>();
  useEffect(() => {
    setEvent(JSON.parse(localStorage.getItem('event') || '{}'));
  }, [] );
  const doEdit = () => {
    
     try {
       localStorage.setItem(
         'event',
         JSON.stringify({
           ...event,
           doEdit: true,
         })
       );
       router.push('/create');
     } catch (error) {
       alert(`Failed to update: ${error}`);
     }
  } 
  return (
    <div className='w-full'>
      <Head>
        <title>Event</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='w-screen min-h-screen bg-[#FBFAFF] md:grid md:place-items-center md:py-[50px] lg:py-[88px]'>
        <div className='w-full md:w-10/12 lg:flex lg:flex-row-reverse justify-between'>
          <div className='w-full min-h-[375px] lg:h-[500px] lg:w-[500px] overflow-hidden'>
            <Image
              src={event?.eventImage || '/assets/images/event-image.png'}
              alt='event image'
              width={150}
              height={150}
              layout='responsive'
              className='object-cover object-center'
            />
          </div>
          <div className='px-[20px] py-[12px] flex flex-col gap-[32px] md:gap-[60px]'>
            <div className=''>
              <p className='text-black-muted text-2xlB font-[700] md:text-5xl'>
                Birthday Bash
              </p>
              <p className='text-sm font-[400] text-gray-muted mt-[4px] md:text-lgB md:mt-[12px]'>
                Hosted by
                <span>
                  <b>{event?.hostName || 'Elysia'}</b>
                </span>
              </p>
            </div>
            <div className='flex flex-col gap-[27px]'>
              <div
                className='flex flex-row items-center gap-[20px] relative'
                onClick={() => doEdit()}
              >
                <div className='h-[48px] w-[48px] md:w-[56px] md:h-[56px] shadow-iconBox bg-[#fff] grid place-items-center rounded-[10px]'>
                  <CalendarIcon className='h-[19px] w-[19.96px] md:h-[28px] md:w-[26px]' />
                </div>
                <div>
                  <p className='text-base text-black-muted font-[700] md:text-lgB'>
                    {event
                      ? format(
                          new Date(event.startTime),
                          'dd MMMM yyyy H:mmaaa'
                        )
                      : '18 August 6:00PM'}
                  </p>
                  <p className='text-sm font-[400] text-gray-dark mt-[3px] md:text-lgB pr-[11px]'>
                    to{' '}
                    <span className='font-[700]'>
                      {event
                        ? format(
                            new Date(event.endTime),
                            'dd MMMM H:mmaaa OOOO'
                          )
                        : '19 August 1:00PM'}
                    </span>{' '}
                    {event?.endTime ? '' : 'UTC +10'}
                  </p>
                </div>
                <div className='absolute right-0 z-1'>
                  <ChevronRight />
                </div>
              </div>
              <div
                className='flex flex-row items-center gap-[20px] relative'
                onClick={() => doEdit()}
              >
                <div className='h-[48px] w-[48px] md:w-[56px] md:h-[56px] shadow-iconBox bg-[#fff] grid place-items-center rounded-[10px]'>
                  <LocationIcon className='h-[19px] w-[19.96px] md:h-[28px] md:w-[26px]' />
                </div>
                <div className='min-w-fit'>
                  <p className='text-base text-black-muted font-[700] md:text-lgB'>
                    {event?.location ? 'Location' : 'Street name'}
                  </p>
                  <p className='text-sm font-[400] text-gray-dark mt-[3px] md:text-lgB'>
                    {event?.location || 'Suburb, State, Postcode'}
                  </p>
                </div>
                <div className='absolute right-0 z-1'>
                  <ChevronRight />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Event;