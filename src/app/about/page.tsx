import Paragraph from "@/components/Paragraph";
import SectionHeader from "@/components/SectionHeader";
import { routes } from "@/util/constants";

export default function About() {
  return (
    <article className="w-full p-8 sm:px-16 md:px-32 lg:px-64">
      <h2 className="font-itcWillow text-5xl sm:text-8xl text-center">
        Meet Red Camp
      </h2>

      <Paragraph>
        <span className="text-6xl float-left pr-2">R</span>
        ed Camp is a picturesque riverfront cabin located directly on the banks
        of the West Branch of the Delaware River.
      </Paragraph>

      <Paragraph>
        Originally built in the 1930s, Red Camp offers guests all the modern
        amenities of a contemporary home without sacrificing the sense of
        history, charm, and grit that a rustic fishing cabin should provide.
      </Paragraph>

      <Paragraph>
        Whether you plan on fishing, bird watching, kayaking, or working from
        home, come experience everything that the Western Catskills has to offer
        at Red Camp!
      </Paragraph>

      <Paragraph>
        IG:{" "}
        <a href={routes.INSTAGRAM} className="text-blue-600">
          @RedCamp_Hancock
        </a>
      </Paragraph>

      <SectionHeader>The Space</SectionHeader>
      <Paragraph>
        Red Camp is located on 6 acres at the end of the road. Our home offers
        guests a remote setting to experience world-class trout fishing, observe
        local wildlife, and enjoy the beauty of the Western Catskills and Upper
        Delaware River watershed while only being a 5-minute drive from the
        center of Hancock, NY.
      </Paragraph>

      <Paragraph>
        Main Floor: Living room, kitchen, bathroom, and bedroom (1 queen bed)
        <br />
        Second Floor: Bedroom loft style (1 queen bed)
      </Paragraph>

      <Paragraph>Amenities:</Paragraph>
      <ul className="list-disc list-outside ms-5">
        <li>High Speed Internet</li>
        <li>850 feet of Private Riverfront</li>
        <li>Fireplace (propane)</li>
        <li>Screened-in porch</li>
        <li>Fenced in side yard with Propane Grill and Chiminea</li>
        <li>Deck overlooking river</li>
        <li>Parking for up to 4 cars</li>
        <li>Fully equipped kitchen and bathrooms </li>
      </ul>

      <Paragraph>
        Red Camp accommodates 4 guests with room for your pets.
      </Paragraph>

      <Paragraph>
        Follow us on &ldquo;the gram&rdquo;{" "}
        <a href={routes.INSTAGRAM} className="text-blue-600">
          @RedCamp_Hancock
        </a>
      </Paragraph>

      <SectionHeader>Guest Access</SectionHeader>
      <Paragraph>
        Guests have access to the entire house with the exception of 1 storage
        closet and 1 utility closet.
      </Paragraph>

      <SectionHeader>Other Things to Note</SectionHeader>
      <Paragraph>
        Red Camp is &ldquo;friendly-pet friendly&rdquo;, for up to 2 dogs with a
        $100 deposit. We have a fenced yard and the field along the river where
        your dog can roam freely.
        <br />
        <br />
        We&apos;d appreciate keeping your dog on a leash when in the driveway or
        around the houses and on the gravel road shared by our other neighbors.
        <br />
        <br />
        There are porcupines in these trees, and sometimes walking right up the
        driveway, so keep that in mind when your pet is enjoying their stay.
      </Paragraph>
    </article>
  );
}
