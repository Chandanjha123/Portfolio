import Image from "next/image";
import bg from "../../../../public/background/contact-background.png";
import dynamic from "next/dynamic";

export const metadata = {
  title: "Contact",
};

const Form = dynamic(() => import("@/components/contact/Form"), {
  loading: () => (
    <div className="w-full flex justify-center py-12">
      <div className="animate-pulse h-8 w-8 rounded-full bg-accent/20" />
    </div>
  ),
  ssr: false,
});

export default function Contact() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Fixed Background Image */}
      <div className="fixed inset-0 -z-50">
        <Image
          src={bg}
          alt="Background image"
          priority
          quality={80}
          placeholder="blur"
          fill
          sizes="100vw"
          className="object-cover object-center opacity-50"
        />
      </div>

      {/* Fixed Centered Content */}
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <article className="w-full sm:w-3/4 max-w-2xl flex flex-col items-center space-y-4">
          <h1 className="text-accent font-semibold text-center text-3xl sm:text-4xl capitalize">
            summon the wizard
          </h1>
          <p className="text-center font-light text-sm sm:text-base">
            Step into the circle of enchantment and weave your words into the
            fabric of the cosmos...
          </p>
          <div className="w-full mt-4">
            <Form />
          </div>
        </article>
      </div>
    </div>
  );
}