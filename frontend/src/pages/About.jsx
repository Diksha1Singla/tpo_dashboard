function About() {
  return (
    <div className="mt-16">
      {/* Top Yellow Bar */}
      <div className="h-1 bg-yellow-500 w-full"></div>

      {/* Content Container */}
      <div className="px-6 py-8 max-w-3xl mx-auto text-gray-800">
        <h2 className="text-3xl font-bold mb-4">Learn About Us</h2>

        <h3 className="text-xl font-semibold mt-6 mb-2">
          Suvidha Foundation (Suvidha Mahila Mandal)
        </h3>
        <p className="mb-6 text-justify">
          Suvidha Mahila Mandal, established on September 8, 1995, is a non-profit organization
          working to impart education among the financially challenged sections to help them
          realize parity in education and strength of little minds in building a promising future.
          The organization has provisions of student internships, student mentorship, and the
          scope to volunteer. Through these programs, the organization aims to achieve the vision
          of imparting innovative education that stays with the students forever and equips them
          for the unforeseen future.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-2">Mission</h3>
        <ul className="list-disc list-inside mb-6 space-y-2">
          <li>
            <strong>Imparting Education:</strong> Suvidha Foundation strives to bridge the
            educational gap by providing access to quality education, particularly for
            underprivileged children and those facing financial challenges.
          </li>
          <li>
            <strong>Empowering Communities:</strong> We aim to empower individuals and communities
            through social awareness campaigns, healthcare initiatives, and vocational training
            programs.
          </li>
          <li>
            <strong>Building a Sustainable Future:</strong> The foundation actively promotes
            environmental sustainability through tree plantation drives and fostering greener
            practices.
          </li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-2">Vision</h3>
        <p className="mb-6 text-justify">
          Suvidha Foundation envisions equal opportunities, quality education, and a sustainable
          future.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-2">Key Activities</h3>
        <ul className="list-disc list-inside space-y-2">
          <li>Education: Scholarships, internships, and mentorship programs.</li>
          <li>Social Awareness: Campaigns on hygiene, healthcare, and sustainability.</li>
          <li>Healthcare: Affordable, quality healthcare access.</li>
          <li>Environment: Tree plantation drives for sustainability.</li>
          <li>Women Empowerment: Skill development and support initiatives.</li>
        </ul>
      </div>
    </div>
  );
}

export default About;
