import CustomAnchorTag from "@/components/CustomAnchorTag";
import Paragraph from "@/components/Paragraph";
import SectionHeader from "@/components/SectionHeader";
import { routes } from "@/util/constants";

export default function Contact() {
  return (
    <article className="w-full p-8 sm:px-14 md:px-24 lg:px-60">
      <h2 className="font-itcWillow text-6xl sm:text-6xl text-center">
        Contacts. yes?
      </h2>

      <div className="flex flex-col items-center">
        <Paragraph>Brett: (215) 570-8347</Paragraph>
        <Paragraph>Nina: (484) 716-6276</Paragraph>
        <Paragraph>WestBranchCollective@gmail.com</Paragraph>
        <Paragraph>
          IG{" "}
          <a href={routes.INSTAGRAM} className="text-blue-600">
            @RedCamp_Hancock
          </a>
        </Paragraph>

        <SectionHeader>Emergency</SectionHeader>
        <Paragraph className="text-center">
          In case of emergency, please dial 911. <br />
          <br />
          A fire extinguisher is located in the kitchen cabinet under the sink
          (left-side). <br />
          <br />
          First Aid Kit is hung in hallway in front of the bathroom
        </Paragraph>
      </div>

      <div className="flex w-full justify-center pl-0 sm:pl-12 md:pl-20 lg:32">
        <div className="sm:grid sm:grid-cols-2 sm:gap-3">
          <div className="p-1">
            <SectionHeader>Hospital</SectionHeader>
            <ul className="pt-5 list-disc list-outside ms-5">
              <li>
                <CustomAnchorTag href="https://www.nyuhs.org/location-search/uhs-delaware-valley-hospital">
                  UHS Delaware Valley Hospital
                </CustomAnchorTag>
              </li>
              <li>
                <CustomAnchorTag href="https://www.wmh.org/">
                  Wayne Memorial Hospital
                </CustomAnchorTag>
              </li>
              <li>
                <CustomAnchorTag href="https://www.nyuhs.org/location-search/uhs-binghamton-general-hospital">
                  UHS Binghamton General Hospital
                </CustomAnchorTag>
              </li>
            </ul>
          </div>

          <div className="p-1">
            <SectionHeader>Urgent Care</SectionHeader>

            <ul className="pt-5 list-disc list-outside ms-5">
              <li>
                <CustomAnchorTag href="https://healthcare.ascension.org/locations/new-york/nybin/hancock-lourdes-primary-care-hancock?intent_source=location_title&result_position=1">
                  Lourdes Walk-in Vestal
                </CustomAnchorTag>
              </li>
              <li>
                <CustomAnchorTag href="https://www.wellnow.com/urgent-care-centers/new-york/oneonta/5001-ny-23-13820">
                  WellNow Urgent Care
                </CustomAnchorTag>
              </li>
            </ul>
          </div>

          <div className="p-1">
            <SectionHeader>Pharmacy</SectionHeader>

            <ul className="pt-5 list-disc list-outside ms-5">
              <li>Walgreen&apos;s</li>
              <li>CVS</li>
            </ul>
          </div>

          <div className="p-1">
            <SectionHeader>Veterinarian</SectionHeader>

            <ul className="pt-5 list-disc list-outside ms-5">
              <li>
                <CustomAnchorTag href="https://duttonveterinary.com/">
                  Dutton Veterinary Services
                </CustomAnchorTag>
              </li>
              <li>
                <CustomAnchorTag href="https://jeffersonvilleanimalhospitalny.com/">
                  Jeffersonville Animal Hospital
                </CustomAnchorTag>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </article>
  );
}
