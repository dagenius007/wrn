import React from "react";
import { Input, Button } from "antd";
import SubSection from "./SubSection";

const Section = ({
  sub_sections,
  index,
  articleIndex,
  partIndex,
  setStructure
}) => {
  const section_body = {
    id: "",
    title: "",
    desc: "",
    sub_sections: [
      {
        id: "",
        title: "",
        desc: ""
      }
    ]
  };

  return (
    <section style={{ marginLeft: "40px" }}>
      <h4>Section</h4>
      <Input
        placeholder="Section title"
        style={{ width: "100%", marginBottom: 10 }}
      />
      <Input
        placeholder="Section description"
        style={{ width: "100%", marginBottom: 10 }}
      />
      {sub_sections.map((section, i) => (
        <SubSection key={i} sections={section.sub_sections} />
      ))}

      <Button
        type="button"
        onClick={() => {
          setStructure(structure => {
            let parts = structure.parts;
            parts[partIndex].articles[index] = {
              ...parts[partIndex].articles[index],
              sections: [
                ...parts[partIndex].articles[index].sections,
                sectionObject
              ]
            };

            return {
              ...structure,
              parts
            };
          });
        }}
      >
        Add Section
      </Button>

      <Button>Remove Section</Button>
    </section>
  );
};

export default Section;
