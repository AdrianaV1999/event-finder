import React from "react";
import ExploreBtn from "./components/ExploreBtn";
import EventCard from "./components/EventCard";
import events from "@/lib/constants";
const Page = () => {
  return (
    <section>
      <h1 className="text-center">
        Explore Your Next
        <br />
        Event You Can't Miss
      </h1>
      <p className="text-center mt-5">
        Hackathons, Meetups, Conferences — All Together!
      </p>
      <ExploreBtn />
      <div className="mt-30 space-y-7">
        <h3>Featured Events</h3>
        <ul className="events">
          {events.map((event) => (
            <li key={event.title}>
              <EventCard {...event} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Page;
