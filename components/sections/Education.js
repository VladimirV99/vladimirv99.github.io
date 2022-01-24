import ListItem from '@/components/util/ListItem';

function Education() {
  const educationList = [
    {
      title: 'Faculty of Mathematics, University of Belgrade',
      description: 'Master studies, Informatics',
      date: '2021-now'
    },
    {
      title: 'Faculty of Mathematics, University of Belgrade',
      description: 'Undergraduate studies, Informatics',
      extra: 'GPA 9.88/10.00',
      date: '2017-2021'
    },
    { title: 'Užička gimnazija', description: 'Natural Sciences and Mathematics', date: '2013-2017' }
  ];

  return (
    <>
      <h1 className="header">Education</h1>

      <ul>
        {educationList.map((educationItem, i) => {
          return <ListItem key={i} {...educationItem} />;
        })}
      </ul>
    </>
  );
}

export default Education;
