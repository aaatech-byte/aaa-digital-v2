interface TeamMember {
  name: string;
  position: string;
  image: string;
}

const team: TeamMember[] = [
  {
    name: "Muhammad Haseeb Abbas",
    position: "Managing Director",
<<<<<<< HEAD
    image: "/images/haseeb_img.jpeg",
  },
  {
    name: "Junaid Khan",
    position: "Sales Director",
    image: "/images/junaid_img.jpeg",
=======
    image: "/images/haseeb.jpeg",
  },
  {
    name: "Junaid Khan",
    position: "Head of Marketing",
    image: "/images/junaid.jpeg",
>>>>>>> 6a1d783cdfa43ab3058d7aae90b4559fc9ea526c
  },
  {
    name: "Muhammad Nabeel Khan",
    position: "Creative Director",
<<<<<<< HEAD
    image: "/images/nabeel_img.jpeg",
=======
    image: "/images/raseel2.jpeg",
>>>>>>> 6a1d783cdfa43ab3058d7aae90b4559fc9ea526c
  },
];

const TeamSec: React.FC = () => {
  return (
    <>
<<<<<<< HEAD
      <section className="py-12 bg-gradient-primary">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h1 className="text-2xl md:text-5xl font-orbitron text-center font-semibold text-white mb-4">
              The Leadership <span className="text-yellow">Team</span>
            </h1>
            <p className="text-[#FFFFFF] text-center">
              United by passion, accountability, and curiosity, we thrive on collaboration, resilience, and continuous learning <br /> to achieve excellence and make an impact together.
            </p>
=======
      <section className="py-20 bg-gradient-primary">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-[#FFFFFF] font-orbitron md:text-4xl">
              Meet Our <span className="text-yellow">Team</span>
            </h2>
>>>>>>> 6a1d783cdfa43ab3058d7aae90b4559fc9ea526c
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
<<<<<<< HEAD
                  </div>
                <div className="p-4 text-center">
                  <h2 className="text-sm font-orbitron text-white">{member.name}</h2>
                  <p className="text-yellow">{member.position}</p>
                </div>
              </div>
=======
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
>>>>>>> 6a1d783cdfa43ab3058d7aae90b4559fc9ea526c
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default TeamSec;