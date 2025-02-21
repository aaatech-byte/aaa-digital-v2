interface TeamMember {
  name: string;
  position: string;
  image: string;
}

const team: TeamMember[] = [
  {
    name: "Muhammad Haseeb Abbas",
    position: "Managing Director",
    image: "/images/haseeb_img.jpeg",
  },
  {
    name: "Junaid Khan",
    position: "Sales Director",
    image: "/images/junaid_img.jpeg",
  },
  {
    name: "Muhammad Nabeel Khan",
    position: "Creative Director",
    image: "/images/nabeel_img.jpeg",
  },
];

const TeamSec: React.FC = () => {
  return (
    <>
      <section className="py-12 bg-gradient-primary">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h1 className="text-2xl md:text-5xl font-orbitron text-center font-semibold text-white mb-4">
              The Leadership <span className="text-yellow">Team</span>
            </h1>
            <p className="text-[#FFFFFF] text-center">
              United by passion, accountability, and curiosity, we thrive on collaboration, resilience, and continuous learning <br /> to achieve excellence and make an impact together.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {team.map((member, index) => (
              <div key={index} className="group rounded-lg overflow-hidden">
                <div className="bg-white">

                <img
                  src={member.image}
                  alt={member.name}
                  className= "  h-80 w-80 object-cover cursor-pointer ease-linear group-hover:mix-blend-normal mix-blend-luminosity transition-all duration-300"
                  />
                  </div>
                <div className="p-4 text-center">
                  <h2 className="text-sm font-orbitron text-white">{member.name}</h2>
                  <p className="text-yellow">{member.position}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default TeamSec;