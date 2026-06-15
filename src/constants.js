// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import sassLogo from './assets/tech_logo/sass.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import angularLogo from './assets/tech_logo/angular.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import gsapLogo from './assets/tech_logo/gsap.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import springbootLogo from './assets/tech_logo/springboot.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';
import csharpLogo from './assets/tech_logo/csharp.png';
import phpLogo from './assets/tech_logo/php.png';
import hostingerLogo from './assets/tech_logo/hostinger.png';
import flutterLogo from './assets/tech_logo/flutter.png';
import dartLogo from './assets/tech_logo/dart.png';
import androidLogo from './assets/tech_logo/android.png';
import webdevLogo from './assets/tech_logo/webdev.png';
import softwaredevLogo from './assets/tech_logo/softwaredev.png';
import androidstudioLogo from './assets/tech_logo/androidstudio.png';

// Experience Section Logo's
import webverseLogo from './assets/company_logo/TT_Logo.png';
import agcLogo from './assets/company_logo/code_alpha.png';
import newtonschoolLogo from './assets/company_logo/MD4K_Logo.png';

// Education Section Logo's
import glaLogo from './assets/education_logo/DIT_logo.png';
import bsaLogo from './assets/education_logo/svpm_logo.png';
import vpsLogo from './assets/education_logo/RNAT_logo.png';

// Project Section Logo's
import githubdetLogo from './assets/work_logo/elephant_app.png';
import factoryBoxLogo from './assets/work_logo/box_tracker.png';
import movierecLogo from './assets/work_logo/movie_rec.png';
import taskremLogo from './assets/work_logo/task_tracker_new.png';
import npmLogo from './assets/work_logo/elephant_dashboard.png';
import travelTribeLogo from './assets/work_logo/travel_tribe_new.png';
import boxCounterLogo from './assets/work_logo/box_counter.png';


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'Firebase', logo: firebaseLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'PHP', logo: phpLogo },
      { name: 'Flutter', logo: flutterLogo },
      { name: 'Dart', logo: dartLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Hostinger', logo: hostingerLogo },
      { name: 'Android Studio', logo: androidstudioLogo },
    ],
  },
  {
    title: 'Services',
    skills: [
      { name: 'Android Development', logo: androidLogo },
      { name: 'Web Development', logo: webdevLogo },
      { name: 'Software Development', logo: softwaredevLogo },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: webverseLogo,
    role: "Junior Software Developer",
    company: "Tourist Tribe",
    date: "Jan 2026 - Feb 2026",
    desc: "Developed dynamic and scalable web applications using the MERN stack, handling both frontend and backend development. Collaborated with cross-functional teams to build responsive UI, implement RESTful APIs, and optimize application performance in an agile environment.",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React JS",
      "TypeScript",
      "Node JS",
      "Tailwind CSS",
      "MongoDb",
      "Redux",
      " Next Js",
    ],
  },
  {
    id: 1,
    img: agcLogo,
    role: "Mobile Application Developer Intern",
    company: "CodeAlpha",
    date: "Jan 2026 - Jan 2026",
    desc: "Completed a virtual internship focused on app development, gaining hands-on experience in building applications, improving coding skills, and understanding real-world development practices.",
    skills: [
      "ReactJS",
      "Redux",
      "JavaScript",
      "Tailwind CSS",
      "HTML",
      "CSS",
      "SQL",
    ],
  },
  {
    id: 2,
    img: newtonschoolLogo,
    role: "PHP Web Developer Intern",
    company: "MD4KS Analytics Pvt. Ltd.",
    date: "Jun 2023 - Jul 2023",
    desc: "I completed a six-week program of industrial training in the area of web development with MD4KS Analytics Pvt. Ltd. (June – July 2023). This training allowed me to gain real-world experience of creating and deploying dynamic web applications using HTML, CSS, JavaScript, PHP and MySQL. The training program enhanced my skills in frontend and backend development, improved my problem solving skills, and provided a platform to apply my theoretical knowledge within the context of real-world projects.",
    skills: [
      "HTML",
      "CSS",
      "Javascript",
      "Bootstrap",
      "Figma",
      "Material UI",
    ],
  },
];

export const education = [
  {
    id: 0,
    img: glaLogo,
    school: "Dr. D. Y. Patil Institute of Technology, Pimpri (DIT)",
    date: "Sept 2024 - July 2027",
    grade: "7.31 CGPA",
    desc: "I have completed my Bachelor's degree (B.E.) in Electronics & Telecommunication Engineering from Dr. D. Y. Patil Institute of Technology, Pimpri (DIT). During my time at DIT, I gained a strong foundation in programming, software development, and computer science principles. I have studied courses such as Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Web Development, and Software Engineering. I actively participated in various workshops and technical events, which enhanced my skills and knowledge. My experience at Collage has been instrumental in shaping my technical abilities and professional growth.",
    degree: "B.E. Electronics & Telecommunication Engineering",
  },
  {
    id: 1,
    img: bsaLogo,
    school: "SVPMs ITE Malegaon(Bk.), Baramati",
    date: "Jul 2021 - Jul 2024",
    grade: "83.54%",
    desc: "I completed my Diploma in Computer Science (B.Sc.) from SVPMs ITE Malegaon(Bk.), Baramati. Throughout my studies, I was immersed in a variety of subjects that deepened my understanding of computing and technology. From exploring Data Structures and Algorithms to diving into Web Development and Database Management Systems, I gained practical insights into the world of software development. My time at College allowed me to work on projects that applied theoretical concepts to real-world problems.",
    degree: "Bachelor of Science - BSC (Computer Science)",
  },
  {
    id: 2,
    img: vpsLogo,
    school: "R.N.A.T. Institute and Jr. College Baramati, Baramati",
    date: "Jun 2020 - Jun 2021",
    grade: "77%",
    desc: "I completed my class 10 education from R.N.A.T. Institute and Jr. College Baramati, under the MSBSHSE board, where I studied Science with Technical.",
    degree: "MSBSHSE, Science with Technical",
  },
];

export const projects = [
  {
    id: 0,
    title: "Real Time System For Elephant Detection",
    description:
      "This AI and IoT-powered system prevents human-elephant conflict (HEC) in Chhattisgarh by continuously monitoring elephant movements with sensors and night-vision cameras. When an elephant is detected, the system sends instant alerts to villagers and forest officials through the Mobile App Notification.",
    image: githubdetLogo,
    tags: ["Java", "App Development", "Firebase", "AIML", "Web Development"],
    github: "https://github.com/atulsg88/Elephant_Detection_App",
    webapp: "https://github.com/atulsg88/Elephant_Detection_App/releases/tag/v.1.0",
  },
  {
    id: 1,
    title: "Factory Box Tracker",
    description:
      "An automated, real-time computer vision and IoT solution for efficient shipment verification in logistics and warehouse environments. Uses YOLO object detection with custom kinematic tracking and barcode/QR scanning on conveyor belts to prevent double-counting, flag discrepancies, and sync data to a live cloud dashboard.",
    image: factoryBoxLogo,
    tags: ["Next.js", "Python", "YOLO", "Firebase", "Computer Vision", "IoT"],
    github: "https://github.com/atulsg88/Factory_Box_Tracker",
    webapp: "https://factory-box-tracker.vercel.app/",
  },
  {
    id: 2,
    title: "E-Payment for MSBTE Exam Form",
    description:
      "Developed a web application to digitize the MSBTE exam form process with integrated online fee payment. The system includes modules for Students, Institutes, and MSBTE officials to manage form submissions, approvals, notices, and results. Enhanced efficiency by reducing paperwork and introducing a user-friendly, secure e-payment system.",
    image: movierecLogo,
    tags: ["Java", "API", "SQL Server", "HTML", "CSS", "JavaScript"],
    github: "https://github.com/atulsg88/MSBTE_PROJECT",
    webapp: "",
  },
  {
    id: 3,
    title: "Elephant Detection Web Dashboard",
    description:
      "A real-time web dashboard built with React and Vite that serves as the monitoring companion for the Elephant Detection system. It visualizes live detection alerts, elephant movement data, sensor health status, and historical detection logs — enabling forest officials and villagers to track human-elephant conflict zones from any browser.",
    image: npmLogo,
    tags: ["React JS", "Vite", "JavaScript", "CSS", "Firebase", "Real-time"],
    github: "https://github.com/atulsg88/Elephant_Detection_Web",
    webapp: "https://elephant-detection-web.vercel.app/",
  },
  {
    id: 4,
    title: "Task Tracker",
    description:
      "A clean and simple Task Management application built with Flutter. Features a two-screen architecture with a main dashboard to view tasks and a separate screen for task entry. Every task includes a title and description, with the ability to add, mark as completed, and delete tasks with local data persistence.",
    image: taskremLogo,
    tags: ["Flutter", "Dart", "Mobile App", "State Management"],
    github: "https://github.com/atulsg88/task-tracker",
    webapp: "https://github.com/atulsg88/task-tracker/releases",
  },
  {
    id: 5,
    title: "Travel Tribe",
    description:
      "TravelTribe is a specialized B2B coordination platform designed to bridge the gap between travel agents, cab drivers, and hoteliers. By automating the booking and confirmation workflow, it replaces fragmented communication with a streamlined, multi-user ecosystem that ensures every trip component is confirmed in real-time.",
    image: travelTribeLogo,
    tags: ["Flutter", "Dart", "Firebase", "Android Studio"],
    github: "https://github.com/atulsg88/TravelTribe",
    webapp: "https://github.com/atulsg88/TravelTribe/releases",
  },
  {
    id: 6,
    title: "Box Counter App",
    description:
      "A smart mobile application for counting and tracking boxes using the device camera. Features real-time box detection, counter display, and scan functionality for efficient inventory management in warehouses and logistics.",
    image: boxCounterLogo,
    tags: ["Flutter", "Dart", "Camera", "Mobile App", "Computer Vision"],
    github: "https://github.com/atulsg88/Box_Counter_App",
    webapp: "https://github.com/atulsg88/Box_Counter_App/releases/tag/v.1.0",
  },

];  
