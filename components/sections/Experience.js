import ListItem from '@/components/util/ListItem';

function Experience() {
  const experienceList = [
    {
      title: 'SYRMIA',
      description: 'Junior Software Engineer',
      date: 'Nov 2022 - now'
    },
    {
      title: 'SYRMIA',
      description: 'Software Engineer Intern',
      date: 'Jul 2022 - Oct 2022'
    }
  ];

  return (
    <>
      <h1 className="header">Experience</h1>

      <ul>
        {experienceList.map((experienceItem, i) => {
          return <ListItem key={i} {...experienceItem} />;
        })}
      </ul>
    </>
  );
}

export default Experience;
