import React from 'react';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    document.title = "Atharva's Portfolio";
  }, []);

  return (
    <div className="bg-white min-h-screen font-inter text-gray-900">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-gray-200 shadow-sm px-4 py-4">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between w-full">
          <div className="text-center sm:text-left">
            <div className="font-space-grotesk text-2xl font-bold">Atharva Biyani</div>
            <div className="text-sm text-gray-500">Software Engineer 👨🏽‍💻</div>
          </div>
          <div className="text-sm text-gray-600 mt-2 sm:mt-0 text-center sm:text-right">Austin, TX 🏙️</div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4">
        {/* Home Section */}
        <section className="flex flex-col items-center justify-center min-h-[60vh] py-16" id="home">
          {/* <div className="w-56 h-56 rounded-full bg-gray-200 mb-6"></div> */}
          <img 
            src="/profile_picture.jpg" 
            alt="Atharva Biyani" 
            className="w-56 h-56 rounded-full object-cover shadow mb-6"
          />
          <h1 className="text-3xl md:text-5xl font-bold mb-2">Atharva Biyani</h1>
          <h2 className="text-lg md:text-2xl text-gray-600 mb-4">Software Engineer at Oracle in Austin, TX</h2>
          <div className="mt-4 flex flex-wrap justify-center gap-3">
            <a href="https://www.linkedin.com/in/atharva-biyani/" target="_blank" rel="noopener noreferrer" className="px-4 py-2 text-sm md:text-base bg-blue-600 text-white rounded-full shadow hover:bg-blue-700 transition w-full sm:w-auto text-center">
              LinkedIn
            </a>
            <a href="https://github.com/atharvabiyani" target="_blank" rel="noopener noreferrer" className="px-4 py-2 text-sm md:text-base bg-blue-600 text-white rounded-full shadow hover:bg-blue-700 transition w-full sm:w-auto text-center">
              GitHub
            </a>
            <a href="https://medium.com/@atharvabiyani" target="_blank" rel="noopener noreferrer" className="px-4 py-2 text-sm md:text-base bg-blue-600 text-white rounded-full shadow hover:bg-blue-700 transition w-full sm:w-auto text-center">
              Medium Articles
            </a>
            <a href="mailto:atharvabiyani@gmail.com" target="_blank" rel="noopener noreferrer" className="px-4 py-2 text-sm md:text-base bg-blue-600 text-white rounded-full shadow hover:bg-blue-700 transition w-full sm:w-auto text-center">
              Email
            </a>
          </div>
        </section>

        {/* About Section */}
        <section className="py-16" id="about">
  <h3 className="text-2xl font-bold mb-4">About Me</h3>

  {/* Intro Paragraph */}
  <p className="mb-6 text-gray-700">
    I'm a software engineer based in Austin, Texas, building and scaling cloud infrastructure that keeps modern applications running fast and secure. I love turning complex architecture into something elegant, efficient, and maintainable. I work on identity and access management within the access governance team in Oracle Cloud Infrastructure. 
  </p>

  {/* Lead into Tech Stack */}
  <p className="mb-4 text-gray-700">
    Here are some of the tools and technologies I work with on a daily basis:
  </p>

  {/* Tech Stack */}
  <div className="flex flex-wrap gap-2 mb-8">
    <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">Python</span>
    <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">Docker</span>
    <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">Kubernetes</span>
    <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">Terraform</span>
    <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">Oracle Cloud Infrastructure</span>
    <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">Jira</span>
    <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">Linux</span>
    <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">Java</span>
    <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">Git</span>
  </div>

  {/* Hobbies Paragraph */}
  <p className="mb-6 text-gray-700">
    When I’m not debugging a container issue or writing Terraform scripts, you’ll probably find me chasing after my golden retriever, Rio. I’m also a huge pickleball enthusiast on the weekends. And yes, I believe tacos are a religion in Austin. Whether it's a mid-day reward or a post-workout meal, you’ll find me hunting down the best tacos in town.
  </p>

  {/* Hobby Images */}
  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
    <img
      src="/dog.jpg"
      alt="My dog Rio"
      className="aspect-square object-cover rounded-xl shadow"
    />
    <img
      src="/pickleball.jpg"
      alt="Playing pickleball"
      className="aspect-square object-cover rounded-xl shadow"
    />
    <img
      src="/tacos.jpg"
      alt="Austin tacos"
      className="aspect-square object-cover rounded-xl shadow"
    />
  </div>
</section>

        {/* Education Section */}
        
        <section className="py-16" id="education">
          <h3 className="text-2xl font-bold mb-4">Education</h3>
          <div className="space-y-4 mb-6">
            <div className="p-4 bg-white rounded-lg shadow border">
              <div className="font-semibold">Bachelor of Science in Computer Science</div>
              <div className="text-gray-500 text-sm">The University of Texas at Dallas • Richardson, TX • August 2021 - May 2025 • GPA: 3.75/4.0</div>
              <div className="text-sm text-gray-700">
              <span className="font-semibold">Relevant Coursework:</span>
                <ul className="list-disc list-inside mt-1">
                  <li>Operating Systems</li>
                  <li>Computer Architecture</li>
                  <li>Algorithms & Data Structures</li>
                  <li>Database Systems</li>
                  <li>Software Engineering</li>
      </ul>
    </div>
            </div>

          </div>
          <div>
            <h4 className="font-semibold mb-2">Activities & Certifications</h4>
            <ul className="list-disc list-inside text-gray-700">
              <li>AWS Cloud Club, UT Dallas (Operations Director)</li>
              <li>Association for Computing Machinery, UT Dallas (Undergraduate Researcher)</li>
              <li>Artificial Intelligence Society, UT Dallas (Computer Vision Project Work)</li>
              <li>Certified Amazon Web Services Cloud Practitioner</li>
            </ul>
          </div>
        </section>

        {/* Experience Section */}
        <section className="py-16" id="experience">
          <h3 className="text-2xl font-bold mb-4">Experience</h3>
          <div className="border-l-2 border-primary-500 pl-6 space-y-8">
            <div>
              <div className="font-semibold">Oracle</div>
              <div className="text-gray-500 text-sm mb-1">Software Engineer • Austin, TX • July 2025 - Present</div>
              <ul className="list-disc list-inside text-gray-700">
                <li>Identity and Access Management under Access Governance in Oracle Cloud Infrastructure (OCI)</li>
              </ul>
            </div>
            <div>
              <div className="font-semibold">Bank of America</div>
              <div className="text-gray-500 text-sm mb-1">Software Engineer Intern • Plano, TX • June 2024 - August 2024</div>
              <ul className="list-disc list-inside text-gray-700">
                <li>Core Technology Infrastructure: API Services Team</li>
              </ul>
            </div>
            <div>
              <div className="font-semibold">Magnifico</div>
              <div className="text-gray-500 text-sm mb-1">Software Intern • Remote • October 2023 - December 2023</div>
              <ul className="list-disc list-inside text-gray-700">
                <li>AWS & React Development: AI Tech Startup</li>
              </ul>
            </div>
            <div>
              <div className="font-semibold">APCON</div>
              <div className="text-gray-500 text-sm mb-1">Software Front End Intern • Plano, TX • May 2023 - December 2023</div>
              <ul className="list-disc list-inside text-gray-700">
                <li>Angular Development for Network Security Interface</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="py-16" id="projects">
          <h3 className="text-2xl font-bold mb-4">Projects</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow p-4 border flex flex-col">
              <div className="font-semibold mb-2">Full Stack Movie Reviews App</div>
              <div className="text-gray-600 mb-2">Built a full-stack movie review app using Java, Spring Boot, and React. Users can browse a wide movie database, watch trailers, and leave reviews on specific films. Backend is powered by MongoDB and REST APIs, with a clean React frontend for interactive user experience.</div>
              <div className="flex flex-wrap gap-2 mb-2">
                <span className="bg-gray-100 px-2 py-0.5 rounded text-xs">Java</span>
                <span className="bg-gray-100 px-2 py-0.5 rounded text-xs">Spring Boot</span>
                <span className="bg-gray-100 px-2 py-0.5 rounded text-xs">MongoDB</span>
                <span className="bg-gray-100 px-2 py-0.5 rounded text-xs">React</span>
                <span className="bg-gray-100 px-2 py-0.5 rounded text-xs">REST API</span>
                <span className="bg-gray-100 px-2 py-0.5 rounded text-xs">Axios</span>
                <span className="bg-gray-100 px-2 py-0.5 rounded text-xs">HTML/CSS</span>
              </div>
              <a href="https://github.com/atharvabiyani/Movie-Review-Application-Java-SpringBoot-MongoDB-React" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline mt-auto">GitHub</a>
            </div>
            <div className="bg-white rounded-lg shadow p-4 border flex flex-col">
              <div className="font-semibold mb-2">NBA Highlights Classifier</div>
              <div className="text-gray-600 mb-2">Built an end-to-end video classification pipeline using YOLOv5 for player detection, MoveNet for pose estimation, and a Random Forest for final prediction. Scraped and processed data with Selenium, OpenCV, and Pandas. Created collaboratively with the AI Society at UTD.</div>
              <div className="flex flex-wrap gap-2 mb-2">
                <span className="bg-gray-100 px-2 py-0.5 rounded text-xs">Python</span>
                <span className="bg-gray-100 px-2 py-0.5 rounded text-xs">YOLOv5</span>
                <span className="bg-gray-100 px-2 py-0.5 rounded text-xs">MoveNet</span>
                <span className="bg-gray-100 px-2 py-0.5 rounded text-xs">Scikit-Learn</span>
                <span className="bg-gray-100 px-2 py-0.5 rounded text-xs">OpenCV</span>
                <span className="bg-gray-100 px-2 py-0.5 rounded text-xs">Selenium</span>
                <span className="bg-gray-100 px-2 py-0.5 rounded text-xs">Pandas</span>
              </div>
              <a href="https://github.com/atharvabiyani/Machine-Learning-Basketball-Highlight-Classifier-Model-Python" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline mt-auto">GitHub</a>
            </div>
            <div className="bg-white rounded-lg shadow p-4 border flex flex-col">
              <div className="font-semibold mb-2">Resume Matching System</div>
              <div className="text-gray-600 mb-2">Developed a Python tool using Sentence-BERT to match resumes with job descriptions via semantic similarity, cosine scoring, and skill gap analysis. Includes RAKE keyword extraction and real-world datasets to demo fast (~0.2s) NLP-based matching and recruiting automation.</div>
              <div className="flex flex-wrap gap-2 mb-2">
                <span className="bg-gray-100 px-2 py-0.5 rounded text-xs">Python</span>
                <span className="bg-gray-100 px-2 py-0.5 rounded text-xs">Sentence-BERT</span>
                <span className="bg-gray-100 px-2 py-0.5 rounded text-xs">Scikit-Learn</span>
                <span className="bg-gray-100 px-2 py-0.5 rounded text-xs">RAKE</span>
                <span className="bg-gray-100 px-2 py-0.5 rounded text-xs">Pandas</span>
                <span className="bg-gray-100 px-2 py-0.5 rounded text-xs">NumPy</span>
                <span className="bg-gray-100 px-2 py-0.5 rounded text-xs">Google Colab</span>
              </div>
              <a href="https://github.com/atharvabiyani/Resume-Job-Matching-System" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline mt-auto">GitHub</a>
            </div>
          </div>
        </section>

        {/* Articles Section */}
        <section className="py-16" id="articles">
          <h3 className="text-2xl font-bold mb-4">Articles</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow p-4 border flex flex-col">
              <div className="font-semibold mb-2">Stargate: The Future of AI Infrastructure</div>
              <div className="text-gray-600 mb-2">Wrote an article analyzing Stargate, a global AI supercluster initiative led by Oracle, NVIDIA, and OpenAI. Covered its technical components including GPU scaling, RDMA networking, and renewable energy usage as well as its strategic impact on AI accessibility, infrastructure sustainability, and global deployment.</div>
              <a href="https://medium.com/@atharvabiyani/how-stargate-superclusters-reflect-a-bigger-shift-in-ai-infrastructure-d238cefce75e" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline mt-auto">Read More</a>
            </div>
            <div className="bg-white rounded-lg shadow p-4 border flex flex-col">
              <div className="font-semibold mb-2">Smart Cities Powered by Azure</div>
              <div className="text-gray-600 mb-2">Wrote an article exploring how Microsoft Azure enables smart city transformation through IoT and Edge Computing. Covered real-time traffic optimization, environmental monitoring, and public safety use cases. Highlighted tools like Azure IoT Hub, Digital Twins, and AI services, along with global examples from Barcelona, Singapore, and NYC.</div>
              <a href="https://medium.com/@atharvabiyani/microsoft-azure-for-smart-cities-iot-and-edge-computing-in-action-35fb4914b195" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline mt-auto">Read More</a>
            </div>
            <div className="bg-white rounded-lg shadow p-4 border flex flex-col">
              <div className="font-semibold mb-2">The Power of Networking in Tech Careers</div>
              <div className="text-gray-600 mb-2">Wrote an article on the importance of networking in today’s job market, highlighting strategies for building authentic relationships both online and in person. Covered how LinkedIn, job fairs, and referrals can boost visibility and job prospects, along with personal insights on securing interviews through direct outreach.</div>
              <a href="https://medium.com/@atharvabiyani/the-power-of-networking-why-its-crucial-in-today-s-competitive-job-market-f5be9d95cf35" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline mt-auto">Read More</a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="mt-16 py-8 border-t border-gray-200 text-center text-sm text-gray-500">
        <div className="mb-2">Atharva Biyani</div>
        <div className="flex justify-center gap-4">
          <a href="https://www.linkedin.com/in/atharva-biyani/" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">LinkedIn</a>
          <a href="https://github.com/atharvabiyani" aria-label="GitHub" target="_blank" rel="noopener noreferrer" className="hover:text-gray-800">GitHub</a>
          <a href="https://medium.com/@atharvabiyani" aria-label="Medium Articles" target="_blank" rel="noopener noreferrer" className="hover:text-gray-800">Medium Articles</a>
          <a href="mailto:atharvabiyani@gmail.com" aria-label="Email" target="_blank" rel="noopener noreferrer" className="hover:text-red-500">Email</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
