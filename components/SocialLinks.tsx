
'use client';

export default function SocialLinks() {
  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: 'ri-linkedin-fill',
      color: 'bg-blue-600 hover:bg-blue-700'
    },
    {
      name: 'Dribbble',
      icon: 'ri-dribbble-fill',
      color: 'bg-pink-500 hover:bg-pink-600'
    },
    {
      name: 'GitHub',
      icon: 'ri-github-fill',
      color: 'bg-gray-800 hover:bg-gray-900'
    },
    {
      name: 'Twitter',
      icon: 'ri-twitter-fill',
      color: 'bg-blue-400 hover:bg-blue-500'
    }
  ];

  return (
    <div>
      <h4 className="font-semibold text-gray-800 mb-4">Follow Me</h4>
      <div className="flex space-x-4">
        {socialLinks.map((social) => (
          <div
            key={social.name}
            className={`w-12 h-12 ${social.color} text-white rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:shadow-lg cursor-pointer`}
            title={social.name}
          >
            <i className={`${social.icon} w-6 h-6 flex items-center justify-center`}></i>
          </div>
        ))}
      </div>
    </div>
  );
}