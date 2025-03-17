
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const TeamSection = ({ limit = 0 }) => {
  const team = [
    {
      id: 1,
      name: "Nithesh Balakrishnan",
      position: "Founder",
      bio: "Nithesh is the visionary founder of AN Technologies, bringing extensive experience in cloud architecture and AI solutions.",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&h=256&q=80",
    },
    {
      id: 2,
      name: "Prashanth Gunda",
      position: "Software Developer",
      bio: "Prashanth is a skilled software developer specializing in full-stack development and cloud-native applications.",
      image: "https://media.licdn.com/dms/image/v2/D5603AQEXc4niKvgCFg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1732520329580?e=1747872000&v=beta&t=1KMcohFC6P20sW4abQXuuRYs8Si_c-fzJSYqjrvqg_k&auto=format&fit=crop&w=256&h=256&q=80",
    },
    {
      id: 3,
      name: "Santhosh Chavan",
      position: "Consultant Architect",
      bio: "Santhosh brings his expertise as a consultant architect, designing scalable and secure technology solutions.",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&h=256&q=80",
    },
    {
      id: 4,
      name: "Ansiya V A",
      position: "Data Science Engineer",
      bio: "Ansiya leads the data science initiatives, developing machine learning models and AI algorithms for our clients.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&h=256&q=80",
    },
    {
      id: 5,
      name: "Abhishek B",
      position: "IT Infrastructure Expert",
      bio: "Abhishek specializes in IT infrastructure and serves as a senior developer for complex enterprise projects.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&h=256&q=80",
    }
  ];

  const displayTeam = limit > 0 ? team.slice(0, limit) : team;

  return (
    <section className="section bg-white py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-ant-darkblue">
            Meet Our <span className="text-ant-purple">Team</span>
          </h2>
          <p className="text-lg text-gray-600">
            We're a team of passionate experts dedicated to delivering innovative technology solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayTeam.map((member) => (
            <Card key={member.id} className="overflow-hidden card-hover border-0 shadow-md">
              <div className="aspect-w-3 aspect-h-2 bg-gradient-to-r from-ant-blue to-ant-purple">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-64 object-cover object-center"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-ant-purple font-medium mb-3">{member.position}</p>
                <p className="text-gray-600 mb-4">{member.bio}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {limit > 0 && limit < team.length && (
          <div className="text-center mt-12">
            <Button variant="outline" className="border-ant-purple text-ant-purple hover:bg-ant-purple/5">
              <Link to="/team">Meet the Entire Team</Link>
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default TeamSection;
