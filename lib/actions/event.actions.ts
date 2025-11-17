"use server";

import Event, { IEvent } from "@/database/event.model";
import connectDB from "@/lib/mongodb";

export const getSimilarEventsBySlug = async (
  slug: string
): Promise<IEvent[]> => {
  try {
    await connectDB();
    const event = await Event.findOne({ slug });

    if (!event) return [];

    const events = await Event.find({
      _id: { $ne: event._id },
      tags: { $in: event.tags },
    }).lean();

    return events.map((e: any) => ({
      _id: e._id.toString(),
      title: e.title,
      slug: e.slug,
      description: e.description,
      overview: e.overview,
      image: e.image,
      venue: e.venue,
      location: e.location,
      date: e.date,
      time: e.time,
      mode: e.mode,
      audience: e.audience,
      agenda: e.agenda,
      organizer: e.organizer,
      tags: e.tags,
      createdAt: e.createdAt,
      updatedAt: e.updatedAt,
    })) as IEvent[];
  } catch {
    return [];
  }
};
