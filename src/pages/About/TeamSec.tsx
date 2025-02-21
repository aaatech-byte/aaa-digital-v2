interface TeamMember {
  name: string;
  position: string;
  image: string;
}

const team: TeamMember[] = [
  {
    name: "Muhammad Haseeb Abbas",
    position: "Managing Director",
    image: "/images/haseeb.jpeg",
  },
  {
    name: "Junaid Khan",
    position: "Head of Marketing",
    image: "/images/junaid.jpeg",
  },
  {
    name: "Muhammad Nabeel Khan",
    position: "Creative Director",
    image: "/images/raseel2.jpeg",
  },
];

const TeamSec: React.FC = () => {
  return (
    <>
      <section className="py-20 bg-gradient-primary">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-[#FFFFFF] font-orbitron md:text-4xl">
              Meet Our <span className="text-yellow">Team</span>
            </h2>
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
                  <CardContent>
                    <Typography variant="h6" component="div">
                      {member.name}
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      className="font-extrabold text-primary"
                    >
                      {member.position}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default TeamSec;