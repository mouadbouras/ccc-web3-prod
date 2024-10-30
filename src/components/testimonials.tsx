import Image from "next/image";

const testimonials = [
  {
    id: 1,
    body: "Working with CCC is truly a pleasure: smooth process and quality service as per the agreed KPIs. Definitely one of the best UGC providers in the market.",
    author: {
      name: "Jigen",
      handle: "Founder",
      imageUrl: "/img/testimonials/jigen.png",
    },
  },
  {
    id: 4,
    body: "We worked with CCC on a few campaigns over the last few months - always super fast execution (same day even at time) and a very proffesional process with clear communication and updates on progress. Would highly recommend them, they are a creator-led creator agency meaning they are very fairly priced making deals that keep creators and clients happy win-win.",
    author: {
      name: "Ankh Labs",
      handle: "Founder",
      imageUrl: "/img/testimonials/ankh.png",
    },
  },

  {
    id: 3,
    body: "CCC was great to work with. Super fast, responsive, and made everything easy. Guess our collab has been amongst the smoothest ones we’ve ever been through in regards to content campaigns. Would definitely recommend!",
    author: {
      name: "Two3 Labs",
      handle: "Marketing Manager",
      imageUrl: "/img/testimonials/twothree.png",
    },
  },
  {
    id: 2,
    body: "CCC one of easiest , most organized teams to work with! Great communication, deadlines met. Helped execute the most difficult and creative activations perfectly! They are my go to KOL marketing group for my clients!",
    author: {
      name: "Inferno Labs",
      handle: "Marketing Manager",
      imageUrl: "/img/testimonials/inferno.png",
    },
  },
];

export default function Testimonials() {
  return (
    <div
      id="testimonials"
      className="bg-zinc-900 py-24 w-full sm:py-32 border-y border-tulip-400/20 "
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mt-2 text-balance text-3xl font-semibold tracking-tight text-tulip-400 sm:text-4xl">
            What clients say about CCC
          </p>
        </div>
        <div className="mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none">
          <div className="-mt-8 sm:-mx-4 sm:columns-1 sm:text-[0] lg:columns-2">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="pt-8 sm:inline-block sm:w-full sm:px-4 "
              >
                <figure className="rounded-2xl bg-zinc-950 p-8 text-sm/6 border border-tulip-400/20">
                  <blockquote className="text-gray-300">
                    <p>{`“${testimonial.body}”`}</p>
                  </blockquote>
                  <figcaption className="mt-6 flex items-center gap-x-4 ">
                    <Image
                      width={40}
                      height={40}
                      alt=""
                      src={testimonial.author.imageUrl}
                      className="h-10 w-10 rounded-full bg-gray-50"
                    />
                    <div>
                      <div className="font-semibold text-white">
                        {testimonial.author.name}
                      </div>
                      <div className="text-gray-500">{`${testimonial.author.handle}`}</div>
                    </div>
                  </figcaption>
                </figure>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
