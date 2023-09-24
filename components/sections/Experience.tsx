import ListItem from "@/components/util/ListItem";
import experienceList from "@/data/experienceList";

function Experience() {
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
