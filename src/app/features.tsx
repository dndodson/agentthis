import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/src/components/ui/card";
import { ChartArea, DollarSign, Lock } from 'lucide-react';

const featuresData = [
  {
    title: "Protection",
    description: "Guard your content against AI theft",
    icon: <Lock className="size-8 text-primary" />,
  },
  {
    title: "Monetization",
    description: "Get paid when AI reads your content",
    icon: <DollarSign className="size-8 text-primary" />,
  },
  {
    title: "Analytics",
    description: "Understand how your content is used and tune your AI strategy",
    icon: <ChartArea className="size-8 text-primary" />,
  },
];

const Features = () => {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Platform</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuresData.map((feature, index) => (
            <Card key={index} className="bg-white">
              <CardHeader className="flex flex-col items-center">
                {feature.icon}
                <CardTitle className="text-2xl mt-4">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-center">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
