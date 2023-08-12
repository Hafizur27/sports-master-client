import blog1 from "../../../../assets/Blogs/blog-1.jpg";
import blog2 from "../../../../assets/Blogs/blog-2.jpg";
import blog3 from "../../../../assets/Blogs/blog-3.jpg";
import blog4 from "../../../../assets/Blogs/blog-4.jpg";
import blog5 from "../../../../assets/Blogs/blog-5.jpg";
import blog6 from "../../../../assets/Blogs/blog-6.jpg";
const BlogSection = () => {
  return (
    <div>
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-serif text-center mb-10">
            <span className="text-yellow-500">Latest</span> Blog Posts
          </h2>

          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img
                src={blog1}
                alt="Football Blog Post"
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  Football Training Tips
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Mastering the Art of Dribbling: Tips to Improve Ball Control
                  and Evasion Skills.Enhancing Your Shooting Accuracy:
                  Techniques to Hit the Target Every Time......
                </p>
                <button className="btn btn-sm bg-orange-600 text-white hover:bg-orange-400">
                  Read More
                </button>
              </div>
            </div>

            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img
                src={blog2}
                alt="Cricket Blog Post"
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  Cricket Batting Techniques
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Mastering the Straight Drive: Perfecting the Technique for
                  Elegant Boundary Shots.Playing Spin Like a Pro: Essential Tips
                  for Effective........
                </p>
                <button className="btn btn-sm bg-orange-600 text-white hover:bg-orange-400">
                  Read More
                </button>
              </div>
            </div>

            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img
                src={blog3}
                alt="Volleyball Blog Post"
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  Mastering Volleyball Spikes
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Powerful Volleyball Spikes: Techniques to Generate Maximum
                  Force and Accuracy.Timing is Key : Mastering the Art of
                  Perfectly Timed Volleyball Spikes........
                </p>
                <button className="btn btn-sm bg-orange-600 text-white hover:bg-orange-400">
                  Read More
                </button>
              </div>
            </div>

            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img
                src={blog4}
                alt="Basketball Blog Post"
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  Improving Basketball Dribbling Skills
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Dribbling Fundamentals: Essential Drills to Enhance Basketball
                  Ball Handling.Mastering the Crossover: Techniques for Quick
                  and Effective Change of Direction........
                </p>
                <button className="btn btn-sm bg-orange-600 text-white hover:bg-orange-400">
                  Read More
                </button>
              </div>
            </div>

            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img
                src={blog5}
                alt="Badminton Blog Post"
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  Essential Badminton Techniques
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Mastering the Smash: Techniques for Powerful and Accurate
                  Badminton Smashes.Perfecting the Drop Shot: Strategies for
                  Executing Precise and Deceptive Drops in Badminton.........
                </p>
                <button className="btn btn-sm bg-orange-600 text-white hover:bg-orange-400">
                  Read More
                </button>
              </div>
            </div>

            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img
                src={blog6}
                alt="Tennis Blog Post"
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  Mastering Tennis Serve Techniques
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  The Power Serve: Techniques to Generate Speed and Power for a
                  Dominant Tennis Serve.Perfecting the Kick Serve: Strategies
                  for Adding Spin and Variations to Your Tennis Serves.........
                </p>
                <button className="btn btn-sm bg-orange-600 text-white hover:bg-orange-400">
                  Read More
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogSection;
