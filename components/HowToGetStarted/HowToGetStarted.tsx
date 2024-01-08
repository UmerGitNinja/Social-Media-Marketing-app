import Image from "next/image";
import SharedText from "../shared/SharedText";

const HowToGetStarted = () => {
  return (
    <section className="flex justify-between gap-10 items-center flex-col p-8">
      <div className="flex-center max-md:text-center max-md:flex-col p-4 gap-8 max-w-[640px]">
        <Image
          src={"/Images/alexa.webp"}
          alt="alexa"
          width={200}
          height={100}
          className=" rounded-full "
        />
        <div className="space-y-4">
          <p className="text-white font-semibold -mt-8">
            Awesome!! Very quick! Never have I had any issues! Great company. I
            will definitely continue using this company for my social media
            needs.
          </p>
          <p className="text-gray-400">- Alexa on Trustpilot</p>
        </div>
      </div>

      <div className="flex justify-between items-center max-lg:text-center max-lg:flex-col-reverse gap-10 ">
        <SharedText
          image="/Images/how-to-get-started.webp"
          subheading="Only 3 easy steps!"
          heading="How to get started"
          description=" Getting started with us has never been easier. First, simply select your
          service and choose your account that you like to promote. In the second
          step, let us know exactly what results you would like to see. After you
          have selected the exact posts and channel, we will get started promoting
          your campaign within 48 hours!"
        />
      </div>
    </section>
  );
};

export default HowToGetStarted;
