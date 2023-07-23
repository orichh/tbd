import CustomAnchorTag from "@/components/CustomAnchorTag";
import SectionHeader from "@/components/SectionHeader";

const PLACES_TO_EAT = [
  "Tops Grocery",
  "All Sorts",
  "Circle E Diner",
  "Hancock House Bar & Restaurant Hancock Liquor Store",
  "Little Italy II",
  "McDonald's",
  "MicBree's Crosstown Tavern New China",
  "Nighshade on Elm",
  "Rock Valley Spirits",
  "The Chestnut",
  "The Cow Lick",
  "The Old Bat Factory UncleBrother Gallery & Kitchen"
];

const THINGS_TO_DO = [
  "Bisbee Lumbar & Supply",
  "Cross Current Outfitters",
  "Fox Bowling Center",
  "Hancock Capital Theatre Hancock Cinemas",
  "Hancock Golf & Country Club Hancock Hounds Dog Park Hancock Town Square Kaybirds",
  "Marino's Outdoor World",
  "Outdoor Adventure Recreational Services",
  "Perfectly Priced Shop",
  "The Camptons Gallery",
  "The Treasure Chest Gift Shop",
  "Trout Brook Studios",
  "West Branch Shehawken PA Access"
];

export default function WhatToDo() {
  return (
    <article className="w-full p-8 sm:px-14 md:px-24 lg:px-60">
      <h2 className="font-itcWillow text-6xl sm:text-6xl text-center">
        What to Do
      </h2>

      <div className="flex w-full justify-center pl-0 sm:pl-12 md:pl-20 lg:32">
        <div className="sm:grid sm:grid-cols-2 sm:gap-3">
          <div className="p-1">
            <SectionHeader>Places to Eat</SectionHeader>
            <ul className="pt-5 list-disc list-outside ms-5">
              {PLACES_TO_EAT.map((place, i) => {
                return <li key={`${i}-${place}`}>{place}</li>;
              })}
            </ul>
          </div>

          <div className="p-1">
            <SectionHeader>Things to Do</SectionHeader>

            <ul className="pt-5 list-disc list-outside ms-5">
              {THINGS_TO_DO.map((thing, i) => {
                return <li key={`${i}-${thing}`}>{thing}</li>;
              })}
            </ul>
          </div>
        </div>
      </div>
    </article>
  );
}
