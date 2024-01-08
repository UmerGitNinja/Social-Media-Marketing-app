import SharedText from "../shared/SharedText";

const HowItWork = () => {
  return (
    <section className="p-8">
      <div className="flex-center  max-lg:text-center max-lg:flex-col-reverse gap-10 ">
        <SharedText
          image="/Images/works.webp"
          subheading="Always do your research"
          heading="How Viewpals works"
          description="There are many ways to promote social media channels. At Viewpals we have been spending the last years to grow an extensive network of influencers, fans, newsletters and promoters across all major platform. When you launch your campaign with us, we will start driving traffic to your channels through our network and get your content the visibility it deserves!"
        />
      </div>
    </section>
  );
};

export default HowItWork;
