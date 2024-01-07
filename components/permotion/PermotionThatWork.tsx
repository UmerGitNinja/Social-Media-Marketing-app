import SharedText from "../shared/SharedText";
import Promotion from "./Promotion";

const PermotionThatWork = () => {
  return (
    <section className="flex-center max-md:flex-col gap-20  space-y-6 p-8">
      <div className="flex-center gap-4">
        <div className="space-y-4  w-fit">
          <Promotion heading="2,850+" text="Trusted Customers" />
          <Promotion heading="16,930+" text="Campaigns Launched" />
        </div>
        <div className="w-fit">
          <Promotion
            heading="34M+"
            text="Views, likes, comments and subscribes"
          />
        </div>
      </div>
      <SharedText
        subheading="Get the real Engagement"
        heading="Promotions that work!"
        description="After having worked for thousands of clients and run promotions across all social media channels, we know exactly what works and how to drive visibility to your channels. Have a look at our customer reviews and feel free to reach out to us if you have any doubts."
      />
    </section>
  );
};

export default PermotionThatWork;
