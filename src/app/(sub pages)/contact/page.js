import Image from "next/image";
import bg from "../../../../public/background/contact-background.png";
import dynamic from "next/dynamic";

export const metadata = {
  title: "Contact",
};

// Dynamically import the Form component
const Form = dynamic(() => import("@/components/contact/Form"), {
  loading: () => (
    <div className="w-full min-h-screen flex justify-center py-12">
      <div className="animate-pulse h-8 w-8 rounded-full bg-accent/20" />
    </div>
  ),
  ssr: false,
});

export default function Contact() {
  return (
    <>
      <Image
        src={bg}
        alt="Next.js Portfolio website's contact page background image"
        priority
        quality={80}
        placeholder="blur"
        fill
        sizes="100vw"
        className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-50"
      />

      <article className="relative w-full flex flex-col items-center justify-center py-8 sm:py-0 space-y-8">
        <div className="flex flex-col items-center justify-center space-y-6 w-full sm:w-3/4">
          <h1 className="text-accent font-semibold text-center text-4xl capitalize">
            summon the wizard
          </h1>
          <p className="text-center font-light text-sm xs:text-base max-w-2xl px-4">
            Step into the circle of enchantment and weave your words into the
            fabric of the cosmos. Whether you seek to conjure collaborations,
            unlock mysteries, or simply share tales of adventure, your messages
            are treasured scrolls within this realm. Use the form below to send
            your missives through the ethereal network, and await the whisper of
            magic in response.
          </p>
        </div>
        <Form />
      </article>
    </>
  );
}