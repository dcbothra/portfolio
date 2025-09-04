import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Skills from "./skills-content"

export default function Experience() {
  const experiences = [
    {
      title: "Robotics Software Engineer",
      company: "Fynd Robotics",
      period: "June 2025 - Present",
      location: "Mumbai, India",
      achievements: [
        "Working on the development of autonomous indoor robot navigation systems, with a focus on localisation and path planning to ensure accurate positioning and efficient movement in complex environments.",
      ],
    },
    {
      title: "Research Intern",
      company: "Stochastic Robotics Lab, IISc Bangalore",
      period: "June 2024 - Dec 2024",
      location: "Bangalore, India",
      achievements: [
        "Designed and prototyped novel tactile sensors for quadruped robots to perform contact-enabled reinforcement learning policies",
        "Achieved low response time (2ms) and high signal-to-noise ratio (37.90 dB) in a thin (0.8 mm) flexible form factor",
        "Ensured optimal sensor performance across a broad range of input forces, enhancing robotic interaction reliability",
      ],
    },
    {
      title: "Robotics Intern",
      company: "PNT Robotics and Automation Solutions",
      period: "May 2023 - July 2023",
      location: "Mumbai, India",
      achievements: [
        "Implemented HectorSLAM and GMapping on a mobile robot using RPLIDAR360 and conducted benchmarking tests",
        "Developed a URDF model for a 5-DOF robotic arm and integrated it with MoveIt for motion planning in simulation",
        "Applied ArUco marker detection using OpenCV for visual tracking and robot localization",
      ],
    },
    {
      title: "Robotic Arm & Mechanical Lead",
      company: "CRISS Robotics, BITS Pilani",
      period: "July 2022 - Feb 2024",
      location: "Pilani, India",
      achievements: [
        "Led the design, manufacturing, and assembly of a 6-DOF robotic arm for a Mars Rover prototype",
        "Developed a mechanically robust Mars Rover chassis featuring skid-steering and differential bar mechanisms",
        "Achieved 1st place in International Rover Design Challenge (Sep 2023) and 10th place in International Rover Challenge (Feb 2024)",
      ],
    },
    {
      title: "President & Treasurer",
      company: "Toastmasters BITS Pilani",
      period: "Aug 2022 - May 2023",
      location: "Pilani, India",
      achievements: [
        "Led a 30+ member club under the international Toastmasters organisation, focused on leadership and public speaking.",
        "Organized a record 13 meets in one semester, introducing new formats such as Evaluation Contests and Speech-a-thons.",
        "Built a culture of consistent participation, mentorship, and peer-driven growth."
      ],
    },
    {
      title: "Project Developer",
      company: "Academic & Personal Robotics Projects, BITS Pilani",
      period: "2021 - 2024",
      location: "Pilani, India",
      achievements: [
        "Implemented Deep Q-Network agent for LunarLander environment using PyTorch with reward >200",
        "Developed PID control packages for drone simulation with fine-tuned performance",
        "Created a stereo microphone system for goal-based robot navigation integrating acoustic localization with ROS2 Nav2 stack",
        "Applied computer vision algorithms (Harris Corner, Canny Edge, YoloV6, MOSSE Tracker) for omnidirectional camera feeds",
      ],
    },
  ]

  return (
    <section id="experience" className="py-20">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="space-y-12">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Experience</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              My robotics research, internships, and project leadership experience
            </p>
          </div>

          <div className="space-y-8 mt-12">
            {experiences.map((experience, index) => (
              <div key={index} className="timeline-item">
                <Card className="border-l-4 border-l-primary transition-all duration-300 hover:shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold">{experience.title}</h3>
                        <p className="text-muted-foreground">{experience.company}</p>
                      </div>
                      <div className="mt-2 md:mt-0 flex flex-col md:items-end">
                        <Badge variant="outline" className="mb-1 md:mb-0">
                          {experience.period}
                        </Badge>
                        <span className="text-sm text-muted-foreground">{experience.location}</span>
                      </div>
                    </div>
                    <ul className="mt-4 space-y-2">
                      {experience.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start">
                          <span className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0"></span>
                          <span className="text-sm text-muted-foreground">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          {/* Skills Section */}
          <div className="mt-20" id="skills">
            <Skills />
          </div>
        </div>
      </div>
    </section>
  )
}
