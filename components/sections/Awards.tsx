import ListItem from "@/components/util/ListItem";
import awardList from "@/data/awardList";

function Awards() {
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
