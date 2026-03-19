import Image from "next/image";

type TeamMember = {
  name: string;
  role: string;
  image: string;
};

const teamData: TeamMember[] = [
  {
    name: "John Doe",
    role: "Product Designer",
    image: "/images/logo2.png",
  },
  {
    name: "David Endow",
    role: "Creative Designer",
    image: "/images/logo1.jpeg",
  },
  {
    name: "Jonathon Smith",
    role: "Brand Designer",
    image: "/images/logo2.png",
  },
  {
    name: "Gray Simon",
    role: "Frontend Developer",
    image: "/images/logo1.jpeg",
  },
];

export default function TeamSection() {
  return (
    <section id="team" className="py-16 lg:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0a85bc] ">
            Our Team
          </h2>
          <p className="text-gray-500 mt-3 max-w-xl mx-auto">
            Stop wasting time and money designing and managing a website that
            doesn’t get results. Happiness guaranteed!
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {teamData.map((member, i) => (
            <div key={i} className="text-center group">

              {/* Image */}
              <div className="relative w-full aspect-square rounded-md overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover group-hover:scale-105 transition duration-500"
                />
              </div>

              {/* Text */}
              <h3 className="mt-5 font-semibold text-[#0a85bc] ">
                {member.name}
              </h3>
              <p className="text-gray-500 text-sm mt-1">
                {member.role}
              </p>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
