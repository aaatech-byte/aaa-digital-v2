// import React from "react";
import { Card, CardContent, CardMedia, Typography, Grid } from "@mui/material";

const team = [
  // {
  //   name: "Tahir Khan",
  //   position: "CEO",
  //   image: "/assets/images/tahir.jpeg",
  // },
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
  // {
  //   name: "Muhammad Jamshed",
  //   position: "Project Manager",
  //   image: "/assets/images/Jamshed_profile.png",
  // },
  {
    name: "Rishaeel zai",
    position: "Creative Director",
    image: "/images/raseel2.jpeg",
  },

  // {
  //   name: "Atif Awan",
  //   position: "Full Stack Developer",
  //   image: "/assets/images/random.jpeg",
  // },
];


const TeamSec = () => {
  return (
    <>
      <section className="py-20 bg-gradient-primary">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-[#FFFFFF] font-orbitron md:text-4xl">
              Meet Our <span className="text-yellow">Team</span>
            </h2>
          </div>
          <Grid container spacing={4}>
            {team.map((member, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card>
                  <CardMedia
                    component="img"
                    style={{ height: "380px", objectFit: "cover" }}
                    image={member.image}
                    alt={member.name}
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
          </Grid>
        </div>
      </section>
    </>
  );
};

export default TeamSec;
