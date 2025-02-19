const AppDevBlog = () => {
  const post = {
    category: "Mobile Development",
    title: "How Cross-Platform Apps Are Changing the Game in 2025",
    publishDate: "Jan 22, 2025",
    image:
      "https://www.appikr.com/blog/wp-content/uploads/2024/03/A-Beginners-Tutorial-on-Cross-Platform-Mobile-App-Development.png",
    desc_p1: `
      In 2025, cross-platform app development is leading the way for businesses looking to build apps for both Android and iOS. In this blog, we’ll explore why cross-platform development is a game-changer and how it can save you time and money while expanding your reach.
    `,
    desc_h1: "Why Cross-Platform Development is a Game-Changer ?",
    desc_h2: "Single Codebase, Double Reach",
    desc_p2: `
      Develop your app for both iOS and Android simultaneously using a single codebase, saving you time and development costs.
    `,
    desc_h3: "Faster Time to Market",
    desc_p3: `
      Cross-platform development allows businesses to launch apps faster, gaining a competitive advantage.
    `,
    desc_h4: "Wider Audience Reach",
    desc_p4: `By targeting both major mobile platforms, you maximize your reach and grow your user base.
    `,
    desc_h5: "How Cross-Platform Development Saves You Time and Money",
    desc_p5: `
      Cost Efficiency: Develop once, deploy everywhere. With a single codebase, you reduce development costs and save on maintenance.
    `,
    desc_h6: "Faster Iteration and Updates",
    desc_p6: `
      Changes are implemented across both platforms at once, improving efficiency and ensuring consistency.
    `,
    desc_h7: "Real-World Success Story",
    desc_p7: `
      We built a cross-platform delivery app using React Native for a logistics company. The app seamlessly works on both Android and iOS, increasing operational efficiency and customer satisfaction. After launch, the app saw a 30% boost in user engagement and helped the business streamline its delivery processes.
    `,
    desc_h8: "Conclusion",
    desc_p8: `
      Cross-platform apps are the future of mobile development. If you want to save on development costs, reach more users, and launch faster, cross-platform development is the right choice for you. Ready to get started? Contact us today and build your custom mobile app.
    `,
  };

  return (
    <>
      <main className="max-w-7xl m-auto pt-24 pb-10">
        <div className="flex justify-between items-center">
          <p className="text-primary font-bold text-xl cursor-pointer rounded-2xl ">
            {post.category}
          </p>
          <p className="text-gray-400 text-xl font-semibold italic">
            {post.publishDate}
          </p>
        </div>

        <h1 className="font-bold py-5 font-serif text-4xl">{post.title}</h1>

        <img
          className="w-full  rounded-3xl object-cover"
          src={post.image}
          alt={post.title}
        />

        <div className="descriptions py-3 px-4">
          <p className="text-gray-800 text-lg leading-9 tracking-wide">
            {post.desc_p1}
          </p>
          <p className="text-primary font-bold pt-5 text-2xl leading-9 tracking-wide">
            {post.desc_h1}
          </p>
          <p className="text-primary font-bold pt-5 text-xl leading-9 tracking-wide">
            {post.desc_h2}
          </p>
          <p className="text-gray-800 text-lg leading-9 tracking-wide">
            {post.desc_p2}
          </p>
          <p className="text-primary font-bold pt-5 text-xl leading-9 tracking-wide">
            {post.desc_h3}
          </p>
          <p className="text-gray-800 text-lg leading-9 tracking-wide">
            {post.desc_p3}
          </p>
          <p className="text-primary font-bold pt-5 text-xl leading-9 tracking-wide">
            {post.desc_h4}
          </p>
          <p className="text-gray-800 text-lg leading-9 tracking-wide">
            {post.desc_p4}
          </p>
          <p className="text-primary font-bold pt-5 text-xl leading-9 tracking-wide">
            {post.desc_h5}
          </p>
          <p className="text-gray-800 text-lg leading-9 tracking-wide">
            {post.desc_p5}
          </p>
          <p className="text-primary font-bold pt-5 text-xl leading-9 tracking-wide">
            {post.desc_h6}
          </p>
          <p className="text-gray-800 text-lg leading-9 tracking-wide">
            {post.desc_p6}
          </p>
          <p className="text-primary font-bold pt-5 text-2xl leading-9 tracking-wide">
            {post.desc_h7}
          </p>
          <p className="text-gray-800 text-lg leading-9 tracking-wide">
            {post.desc_p7}
          </p>
          <p className="text-primary font-bold pt-5 text-2xl leading-9 tracking-wide">
            {post.desc_h8}
          </p>
          <p className="text-gray-800 text-lg leading-9 tracking-wide">
            {post.desc_p8}
          </p>
        </div>
      </main>
    </>
  );
};

export default AppDevBlog;
