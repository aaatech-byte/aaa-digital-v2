import { useState } from "react";
import { Button } from "../../components/ui/Button";
import { Calendar, Clock, ArrowRight, Sparkles } from "lucide-react";
import { Dialog } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Testimonials from "../../components/Testimonials";
import OurMission from "../../components/OurMission";
import ContactForm from "../../components/ContactCTA";
import Stats from "../../components/Stats";

interface Post {
  title: string;
  category: string;
  excerpt: string;
  date: string;
  readTime: string;
  image: string;
  link: string;
}

const posts: Post[] = [
  {
    title: "The Future of Web Development: Top Trends to Watch in 2025",
    category: "Web Development",
    excerpt:
      "Explore the latest web development trends and technologies shaping the future of the web.",
    date: "Apr 10, 2024",
    readTime: "6 min read",
    image:
      "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=800&q=80",
    link: "/blog/blog4",
  },

  {
    title: "Boost Your E-Commerce Performance with These Simple Tips",
    category: "App Development",
    excerpt:
      "Enhance your e-commerce site's performance with these proven optimization techniques.",
    date: "Feb 28, 2024",
    readTime: "7 min read",
    image:
      "https://www.retis.be/wp-content/uploads/2013/11/images-a-la-une-publications-retis.png",
    link: "/blog/blog2",
  },

  {
    title: "How to Build an E-Commerce Website That Converts in 2025",
    category: "Digital Marketing & SEO",
    excerpt:
      "Discover key features and strategies to build an e-commerce site that boosts sales in 2025.",
    date: "Mar 15, 2024",
    readTime: "4 min read",
    image:
      "https://www.glinfotech.net/blog/wp-content/uploads/2024/10/E-commerce-Main-banner.jpg",
    link: "/blog/blog3",
  },

  {
    title: "Responsive Web Design: Why It’s Crucial for Your Business in 2025",
    category: "Custom Software Solutions",
    excerpt:
      "Learn why responsive design is essential for business success in the mobile-first era.",
    date: "Mar 25, 2024",
    readTime: "5 min read",
    image:
      "https://media.licdn.com/dms/image/D4D12AQFNwdaM_lbYQA/article-cover_image-shrink_720_1280/0/1686822959705?e=2147483647&v=beta&t=ve99KPOUhOtkJShRn80s84HjkLDqtFTnTwy--Ss5B6s",

    link: "/blog/blog1",
  },

  {
    title: " Game-Changing Mobile App Trends to Watch in 2025",
    category: "E-commerce Solutions",
    excerpt:
      "Stay ahead in 2025 with the top 5 mobile app development trends, including AI and more, transforming the app industry!",
    date: "Feb 10, 2024",
    readTime: "5 min read",
    image:
      "https://www.appikr.com/blog/wp-content/uploads/2024/03/A-Beginners-Tutorial-on-Cross-Platform-Mobile-App-Development.png",
    link: "/blog/blog5",
  },
  {
    title: "Top E-Commerce Security Features You Need for 2025",
    category: "Social Media Marketing",
    excerpt:
      "Learn how SSL certificates and other security features can protect your e-commerce business.",
    date: "Mar 15, 2024",
    readTime: "4 min read",
    image:
      "https://plus.unsplash.com/premium_photo-1661764570116-b1b0a2da783c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "/blog/blog6",
  },
];


export default function Blog() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);


  const navigate = useNavigate();
  const handleNavigation = (path: string) => {
    navigate(path);
    window.scrollTo(0, 0);
  };

  const filteredPosts = selectedCategory
    ? posts.filter((post) => post.category === selectedCategory)
    : posts;

  return (
    <main className="bg-gradient-primary">
      <section className="relative h-[95vh] bg-[url('https://png.pngtree.com/thumb_back/fh260/background/20230801/pngtree-top-tips-to-make-money-blogging-image_12958761.jpg')] bg-center bg-cover">
        <div className="absolute bg-primary w-[100%] h-[95vh] opacity-80"></div>

        <section className="relative pt-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-22">
            <div className="text-center">
              <span className="text-yellow text-xl font-orbitron md:text-2xl font-bold tracking-wide uppercase">
                Blogs
              </span>
              <h1 className="mt-4 text-2xl md:text-5xl font-orbitron font-bold text-white mb-6">
                Expert Insights &{" "}
                <span className="text-yellow">Strategies</span>
              </h1>
              <p className="text-base text-gray-200 mb-4 max-w-2xl tracking-wide mx-auto">
                Stay ahead of the curve with actionable tips, industry trends,
                and proven strategies. From web development to digital
                marketing, discover how to boost your business and drive
                results.
              </p>
              <Button
                variant="primary"
                size="md"
                className="group px-4 py-3 font-bold"
                onClick={() => navigate("/contact")}
              >
                Let's Get Started
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </section>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-primary to-transparent"></div>
      </section>

      <div className="flex justify-center flex-wrap md:flex-row flex-col pt-20 pb-10">
        <section className=" sm:w-3/4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <div
                  key={index}
                  className=" rounded-xl overflow-hidden shadow-xl hover:-translate-y-2 ease-in-out hover:shadow-2xl transition duration-300"
                >
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <div className="flex items-center text-sm text-gray-300 mb-4">
                      <Calendar className="h-4 w-4 mr-2 text-yellow" />
                      <span className="mr-4">{post.date}</span>
                      <Clock className="h-4 w-4 mr-2 text-yellow" />
                      <span>{post.readTime}</span>
                    </div>
                    <h3 className="text-lg font-bold font-orbitron text-white mb-3">
                      {post.title}
                    </h3>
                    <p className="text-gray-300 mb-4 font-sm">{post.excerpt}</p>
                    <Button variant="primary" size="md" className="group px-3 py-2 font-bold mt-4"
                      onClick={() => handleNavigation(post.link)}
                    >
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

      </div>

      <Dialog open={modalOpen} onClose={() => setModalOpen(false)}>
        <div className="p-6 text-center">
          <Sparkles className="h-10 w-10 text-yellow-500 mx-auto mb-4" />
          <h3 className="text-lg font-bold mb-2">Coming Soon!</h3>
          <p className="text-gray-200">
            This page will be available shortly. Stay tuned for exciting
            updates!{" "}
          </p>
        </div>
      </Dialog>

      <Testimonials />
      <OurMission />
      <Stats />
      <ContactForm />
    </main>
  );
}
