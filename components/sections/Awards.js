import ListItem from '@/components/util/ListItem';

function Awards() {
  const awardList = [
    {
      title: 'Dositeja Scholarship, Fund for Young Talents of Serbia',
      description: 'Ministry of Youth and Sport',
      date: '2022'
    },
    {
      title: '"Nedeljko Parezanović" award for best graduate students',
      description: 'Department of Computer Science, Faculty of Mathematics, University of Belgrade',
      date: '2021'
    },
    {
      title: 'Dositeja Scholarship, Fund for Young Talents of Serbia',
      description: 'Ministry of Youth and Sport',
      date: '2021'
    }
  ];

  return (
    <>
      <h1 className="header">Awards</h1>

      <ul>
        {awardList.map((award, i) => {
          return <ListItem key={i} {...award} />;
        })}
      </ul>
    </>
  );
}

export default Awards;
