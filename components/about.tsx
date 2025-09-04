import { Card, CardContent } from "@/components/ui/card"
import { Code2, Globe, Server, Users } from "lucide-react"
import { Camera, Cpu } from "lucide-react"

export default function About() {
  const features = [
    {
      icon: <Cpu className="h-10 w-10 text-primary" />,
      title: "Robotics & Control Systems",
      description: "Hands-on experience with ROS/ROS2, MoveIt, URDF, and PID control for robotic arms, drones, and autonomous platforms",
    },
    {
      icon: <Camera className="h-10 w-10 text-primary" />,
      title: "Computer Vision & AI",
      description: "Proficient in OpenCV, PyTorch, SLAM, and reinforcement learning for object tracking, 3D mapping, and autonomous navigation",
    },
    {
      icon: <Users className="h-10 w-10 text-primary" />,
      title: "Team Leadership",
      description: "Led multidisciplinary teams in developing 6-DOF robotic arms and rover subsystems, winning international robotics competitions",
    },
    {
      icon: <Globe className="h-10 w-10 text-primary" />,
      title: "Research & Collaboration",
      description: "Collaborated with academic and industry teams at IISc Bangalore, PNT Robotics, and BITS Pilani on cutting-edge robotics projects",
    },
  ]

  return (
    <div className="w-full bg-muted/30">
      <section id="about" className="py-20 w-full">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="space-y-12">
            <div className="space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Me</h2>
              <p className="mx-auto max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                I'm a Robotics Software Engineer at Fynd Robotics, working on autonomous indoor navigation with a focus on localisation and path planning. My experience spans research and industry projects at PNT Robotics, where I built tactile sensors, implemented SLAM, and integrated robotic arms with motion planning frameworks. 
              </p>
            </div>

            <div className="space-y-4 text-center">
              <p className="mx-auto max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                I've led teams at CRISS Robotics to develop robotic arms and rovers, winning the International Rover Design Challenge, and explored AI-driven projects like reinforcement learning agents, drones, and sound-based localisation. Beyond robotics, I strengthened my leadership and communication skills as President and Treasurer of Toastmasters BITS Pilani, guiding a 30+ member club and launching new speaking formats. 
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-30">
              {features.map((feature, index) => (
                <div key={index} className="animate-in">
                  <Card className="h-full transition-all duration-300 hover:shadow-lg hover:border-primary/50">
                    <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                      <div className="p-2 rounded-full bg-primary/10">{feature.icon}</div>
                      <h3 className="text-xl font-bold">{feature.title}</h3>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
