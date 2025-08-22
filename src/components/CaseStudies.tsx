import React from 'react';
import { MessageSquare, Users, FileText, ClipboardCheck, Calendar, BookOpen, TrendingUp } from 'lucide-react';

const CaseStudies: React.FC = () => {
  const cases = [
    {
      icon: MessageSquare,
      title: 'WhatsApp Automation',
      domain: 'Customer Engagement & Support',
      workflows: [
        'Automated & template responses',
        'Rich media (images, receipts) messaging',
        'Order / ticket status updates'
      ],
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Users,
      title: 'Lead Management — Digital Marketing',
      domain: 'Marketing & Sales',
      workflows: [
        'Lead capture & qualification',
        'Nurture sequences & segmentation',
        'Campaign attribution & scoring'
      ],
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: FileText,
      title: 'Resume Intake AI Agent',
      domain: 'Human Resources & Recruitment',
      workflows: [
        'Resume Intake',
        'Role-Based Scoring',
        'Fit Filtering'
      ],
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: ClipboardCheck,
      title: 'Payroll Audit AI Agent',
      domain: 'Human Resources & Recruitment',
      workflows: [
        'Data Review',
        'Error Flagging',
        'Compliance Checks'
      ],
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Calendar,
      title: 'Interview Scheduling AI Agent',
      domain: 'Human Resources & Recruitment',
      workflows: [
        'Availability Matching',
        'Slot Suggestions',
        'Booking Confirmation'
      ],
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: BookOpen,
      title: 'Interview Prep AI Agent',
      domain: 'Human Resources & Recruitment',
      workflows: [
        'Interview Pack Generation',
        'Candidate + JD Summary',
        'Question Suggestions'
      ],
      color: 'from-orange-500 to-orange-600'
    }
  ];

  return (
    <section id="case-studies" className="py-20 bg-gradient-to-b from-gray-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            AI Agents: Workforce With Human-Level Performance
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            AI agents act as a digital workforce, capable of reasoning, learning, and adapting like humans. They streamline operations, boost efficiency, and scale innovation at speed.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {cases.map((caseStudy, index) => {
            const Icon = caseStudy.icon;
            return (
              <div
                key={index}
                className="group relative bg-gray-800/60 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50 hover:border-cyan-500/30 hover:shadow-2xl hover:shadow-cyan-500/10 transition-all duration-300 hover:scale-105 overflow-hidden"
              >
                {/* Flowing background gradient */}
                <div className="absolute inset-0 opacity-15">
                  <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${caseStudy.color} rounded-full filter blur-2xl transform translate-x-8 -translate-y-8`}></div>
                </div>
                
                <div className="relative">
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${caseStudy.color} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-xl font-bold text-white mb-6 group-hover:text-cyan-400 transition-colors duration-300">
                    {caseStudy.title}
                  </h3>

                  <div className="space-y-4 text-sm">
                    <div>
                      <span className="font-semibold text-indigo-300">Domain:</span>
                      <p className="text-gray-300 mt-1">{caseStudy.domain}</p>
                    </div>

                    <div>
                      <span className="font-semibold text-cyan-300">Workflows:</span>
                      <ul className="mt-2 space-y-2">
                        {caseStudy.workflows.map((wf, i) => (
                          <li key={i} className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-gray-300 text-sm">{wf}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <button className="group bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-cyan-500/25 flex items-center space-x-2 mx-auto">
            <span>Explore More Success Stories</span>
            <TrendingUp className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;