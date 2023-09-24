import ListItem from "@/components/util/ListItem";
import educationList from "@/data/educationList";

function Education() {
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
