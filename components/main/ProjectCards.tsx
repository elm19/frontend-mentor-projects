import ProjectCard from "./ProjectCard";

export interface Card {
    id: number;
    title: string;
    description: string;
    imageUrl: string;
    link: string;
}

const ProjectCards = ({cards}: {cards: Card[]}) => {
  return (
    <div className="">

    <section className="grid px-12  grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {cards.map((card, index) => (
          <ProjectCard key={index} title={card.title} description={card.description} image={card.imageUrl} id={card.id} />
        ))}
    </section>
    </div>
  )
}

export default ProjectCards