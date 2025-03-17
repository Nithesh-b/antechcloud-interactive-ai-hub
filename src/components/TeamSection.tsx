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
      image: "https://media.licdn.com/dms/image/v2/D5603AQErEHXG4I60pw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1720720491108?e=1747872000&v=beta&t=EhWAuYRo8V965ZzIeko-8-7SlPigmYI9YYgDZZiXx7s&auto=format&fit=crop&w=256&h=256&q=80",
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
      image: "https://media.licdn.com/dms/image/v2/D4E03AQGfy4q-yzDD5g/profile-displayphoto-shrink_800_800/B4EZV3pFrVGYAc-/0/1741469015950?e=1747872000&v=beta&t=XiP3QK9vttJ7fCA7p-qcxd0_861_a8jXeEJODtWmIrg&auto=format&fit=crop&w=256&h=256&q=80",
    },
    {
      id: 4,
      name: "Ansiya V A",
      position: "Data Science Engineer",
      bio: "Ansiya leads the data science initiatives, developing machine learning models and AI algorithms for our clients.",
      image: "https://media.licdn.com/dms/image/v2/D5603AQEHj2JdiY-LRA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1721575739612?e=1747872000&v=beta&t=MsO8ODH9dwYkblEhovvLCxUqzXS6ZddApE9pQoEUTWc&auto=format&fit=crop&w=256&h=256&q=80",
    },
    {
      id: 5,
      name: "Abhishek B",
      position: "IT Infrastructure Expert",
      bio: "Abhishek specializes in IT infrastructure and serves as a senior developer for complex enterprise projects.",
      image: "https://media.licdn.com/dms/image/v2/D5603AQEzGQDB82VYkw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1690170952420?e=1747872000&v=beta&t=rYa1jbvYDjcZWte778qKAlGth30VYPb8ebEpWKDI-vA&auto=format&fit=crop&w=256&h=256&q=80",
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
                <div className="w-full h-64 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-auto object-cover object-top"
                    style={{
                      maxHeight: '150%',
                      marginTop: member.id === 1 ? '-20px' : '0'
                    }}
                  />
                </div>
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
