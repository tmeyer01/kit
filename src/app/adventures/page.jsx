import AdventuresBlog from "@/components/views/AdventuresBlog/AdventuresBlog";
import Hero from "@/components/Hero";

export default function Adventures() {
  const backgroundImage = "heroAdventures";
  const title = "Adventures";

  return (
    <>
      <Hero backgroundImage={backgroundImage} title={title} />
      <AdventuresBlog />
    </>
  );
}
