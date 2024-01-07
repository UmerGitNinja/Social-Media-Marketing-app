import SocialSlider from "./SocialSlider";

const Social = () => {
  return (
    <section className="flex-center py-10 md:py-[150px] bg-[url('/Hero.png')] bg-cover">
      <div className="space-y-8 text-center ">
        <h1 className="md:text-4xl font-bold text-5xl text-white">
          We help you go viral on social media!
        </h1>
        <p className="text-gray-400 md:text-md text-sm">
          Promote your content on TikTok, Twitter, Instagram and more...
        </p>
        <div className="flex-center flex-col ">
          <SocialSlider />
        </div>
      </div>
    </section>
  );
};

export default Social;
