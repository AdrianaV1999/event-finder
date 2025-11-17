"use client";
import Image from "next/image";

interface ExploreBtnProps {
  targetId?: string;
}

export default function ExploreBtn({
  targetId = "featured-events",
}: ExploreBtnProps) {
  const handleClick = () => {
    const section = document.getElementById(targetId);
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <button
      type="button"
      id="explore-btn"
      onClick={handleClick}
      className="mt-7 mx-auto flex items-center gap-2"
    >
      Explore Events
      <Image
        src="/icons/arrow-down.svg"
        alt="arrow-down"
        width={24}
        height={24}
      />
    </button>
  );
}
