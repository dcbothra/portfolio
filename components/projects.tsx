import { Card, CardContent } from "@/components/ui/card"
import { ExternalLink } from "lucide-react"
import Link from "next/link"
import OpenSource from "./open-source"

export default function Projects() {
  const projects = [
    {
      title: "Deep Q-Network Agent for LunarLander",
      description:
        "Implemented a Deep Q-Network (DQN) agent using PyTorch to solve the LunarLander-v3 environment, applying experience replay, target networks, and custom reward shaping.",
      tags: ["Python", "PyTorch", "Reinforcement Learning"],
      liveLink: null,
    },
    {
      title: "PID-Controlled Drone in ROS",
      description:
        "Developed a custom ROS package to simulate and control a drone using PID controllers, fine-tuning parameters for minimal overshoot and precise navigation.",
      tags: ["ROS", "Python", "PID Control", "Drone Simulation"],
      liveLink: null,
    },
    {
      title: "Goal-based Robot Navigation via Sound",
      description:
        "Created a stereo microphone system for robot localization through sound triangulation and integrated it with ROS2 Nav2 stack for goal-directed navigation.",
      tags: ["ROS2", "Acoustic Localization", "TurtleBot", "Python"],
      liveLink: null,
    },
    {
      title: "Multi-Modal 3D Mapping using SLAM",
      description:
        "Researched and implemented multi-modal 3D mapping using RTAB-Mapping with Realsense D435i and LeGO-LOAM with 3D LiDAR, generating large-scale depth maps of the campus environment.",
      tags: ["ROS", "SLAM", "3D Mapping", "Python", "C++"],
      liveLink: null,
    },
    {
      title: "Omnidirectional Camera Image Processing",
      description:
        "Applied algorithms to remove distortions from omnidirectional camera feeds and implemented trackers (Harris, Canny, YoloV6, MOSSE) to track objects across 360° fields of view.",
      tags: ["OpenCV", "Computer Vision", "Python"],
      liveLink: null,
    },
  ]

  return (
    <section id="projects" className="py-20">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="space-y-12">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Projects</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              A selection of my robotics, AI, and research projects
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {projects.map((project, index) => (
              <div key={index} className="project-card">
                <Card className="overflow-hidden h-full flex flex-col">
                  <CardContent className="project-content flex-1 flex flex-col p-5">
                    <h3 className="text-lg font-bold">{project.title}</h3>
                    <p className="text-sm text-muted-foreground mt-2 flex-1">{project.description}</p>
                    <div className="project-tags mt-3">
                      {project.tags.slice(0, 3).map((tag, i) => (
                        <span key={i} className="project-tag">
                          {tag}
                        </span>
                      ))}
                    </div>
                    {/* Removed all codeLink buttons */}
                    {project.liveLink && (
                      <div className="project-links mt-4">
                        <Link
                          href={project.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-sm font-medium text-primary hover:underline"
                        >
                          <ExternalLink className="mr-1 h-4 w-4" /> Live
                        </Link>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          {/* Include Open Source section directly under Projects */}
          <div className="mt-20">
            <OpenSource />
          </div>
        </div>
      </div>
    </section>
  )
}
