import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../ui/card";
import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  id: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  id,
}) => {
  return (
    <Card className="max-w-sm rounded overflow-hidden shadow-lg">
      <Link className="hover:underline" href={`/${id}`}>
        <CardHeader className="flex items-center justify-between p-4">
          <CardTitle className="text-xl font-bold">{title}</CardTitle>
        </CardHeader>
        <div className="overflow-hidden fit-">
        <Image
          src={image}
          alt={title}
          width={475}
          height={348}
          className="w-full transform transition duration-300 ease-out hover:scale-110 hover:-translate-y-2"
        />
        </div>
      </Link>
      <CardContent className="p-4">
        <p className="text-gray-700 text-base">{description}</p>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
